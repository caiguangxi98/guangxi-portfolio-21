<template>
  <div ref="container" class="about-background"></div>
</template>

<script>
import * as THREE from 'three';
import { gsap } from 'gsap/all';

export default {
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      renderer: null,
      geometry: null,
      material: null,
      mesh: null,
      controls: null,
      sizes: {
        w: 0,
        h: 0,
      },
      tl: null,
    };
  },
  mounted() {
    this.sizes = {
      w: window.innerWidth,
      h: window.innerHeight * 0.85,
    };
    this.setScene();
    this.setMesh();
    this.setMouseEffects();
    this.render();
    this.meshFadeIn();
  },
  destroyed() {
    this.clear();
  },
  methods: {
    setScene() {
      this.container = this.$refs.container;
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      this.renderer.setSize(this.sizes.w, this.sizes.h);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setClearColor(0x18171a, 1);
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.container.appendChild(this.renderer.domElement);

      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(
        70,
        this.sizes.w / this.sizes.h,
        0.01,
        1000
      );
      this.setCamPos();
      this.windowResize();
    },

    setMesh() {
      this.geometry = new THREE.PlaneBufferGeometry(0.68, 1, 32, 32);
      this.material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          uColorMult: { value: 1 },
          uOpacity: { value: 0 },
          uNoiseAmp: { value: 0.05 },
          tex: {
            value: new THREE.TextureLoader().load('/me.png'),
          },
        },
        vertexShader: `
					uniform float time;
					uniform float uNoiseAmp;
					varying vec2 vUv;
					varying float vWave;

					//	Simplex 3D Noise
          //	by Ian McEwan, Ashima Arts
          //
          vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
          vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

          float snoise(vec3 v){
            const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

          // First corner
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 =   v - i + dot(i, C.xxx) ;

          // Other corners
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );

            //  x0 = x0 - 0. + 0.0 * C
            vec3 x1 = x0 - i1 + 1.0 * C.xxx;
            vec3 x2 = x0 - i2 + 2.0 * C.xxx;
            vec3 x3 = x0 - 1. + 3.0 * C.xxx;

          // Permutations
            i = mod(i, 289.0 );
            vec4 p = permute( permute( permute(
                      i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

          // Gradients
          // ( N*N points uniformly over a square, mapped onto an octahedron.)
            float n_ = 1.0/7.0; // N=7
            vec3  ns = n_ * D.wyz - D.xzx;

            vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);

            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );

            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));

            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);

          //Normalise gradients
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
            p0 *= norm.x;
            p1 *= norm.y;
            p2 *= norm.z;
            p3 *= norm.w;

          // Mix final noise value
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                          dot(p2,x2), dot(p3,x3) ) );
          }

					void main() {
						vec3 pos = position;
						float noiseFreqX = 1.8;
						float noiseFreqY = 0.2;
						vec3 noisePos = vec3(pos.x * noiseFreqX + time, pos.y * noiseFreqY + time, pos.z);
						pos.z += snoise(noisePos) * uNoiseAmp;
						vWave = pos.z;

						vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
						gl_Position = projectionMatrix * mvPosition;

						vUv = uv;
					}
				`,
        fragmentShader: `
          uniform float time;
          uniform float uColorMult;
          uniform float uOpacity;
          uniform sampler2D tex;
          varying vec2 vUv;
          varying float vWave;

					void main() {
						float wave = vWave * 0.1;
						float r = texture2D(tex, vUv + wave).r;
						float g = texture2D(tex, vUv).g;
						float b = texture2D(tex, vUv).b;
            float a = texture2D(tex, vUv).a;
						vec3 tex = vec3(r, g, b);
            tex *= vWave * 3.0 + 0.5;
            tex *= uColorMult;

            a *= uOpacity;

						gl_FragColor = vec4(tex, a);
					}
				`,
        transparent: true,
      });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.mesh.matrixAutoUpdate = false;
      this.mesh.updateMatrix();
      this.scene.add(this.mesh);
    },

    setMouseEffects() {
      window.addEventListener('resize', this.windowResize);
    },

    windowResize() {
      this.sizes.w = window.innerWidth;
      this.sizes.h = window.innerHeight * 0.85;

      this.camera.aspect = this.sizes.w / this.sizes.h;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(this.sizes.w, this.sizes.h);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      if (this.sizes.w < 1200) {
        this.moveMeshToCenter();
      } else {
        this.setCamPos();
      }
    },

    moveMeshToCenter() {
      this.camera.position.x = -0.01;
      this.camera.position.z = 1.4;
    },

    setCamPos() {
      this.camera.position.x = -0.64;
      this.camera.position.y = 0.1;
      this.camera.position.z = 1;
    },

    meshFadeIn() {
      this.tl = gsap.timeline();
      this.tl
        .to(this.material.uniforms.uOpacity, 1, {
          value: 1,
          delay: 0.2,
          ease: 'power4.out',
        })
        .from(
          this.material.uniforms.uNoiseAmp,
          2,
          {
            value: 1.2,
            ease: 'power4.out',
          },
          '<'
        );
    },

    render() {
      this.material.uniforms.time.value += 0.005;

      if (this.sizes.w < 1200) {
        this.material.uniforms.uColorMult.value = 0.8;
      } else {
        this.material.uniforms.uColorMult.value = 1;
      }

      this.renderer && this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render);
    },

    clear() {
      window.removeEventListener('resize', this.windowResize);
      this.renderer.dispose();
      this.renderer.domElement = null;
      this.renderer = null;
      this.tl.kill();
      this.tl = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.about-background {
  position: absolute;
  left: -1%;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
