<template>
  <div ref="container" class="home-background"></div>
</template>

<script>
import * as THREE from 'three';

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
      this.camera.position.z = 0.42;
    },

    setMesh() {
      this.geometry = new THREE.PlaneBufferGeometry(1, 0.46);
      this.material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          uDisplaceX: { value: 4 },
          uDisplaceY: { value: 3 },
          uStrengthX: { value: 0.06 },
          uStrengthY: { value: 0.02 },
          tex: {
            value: new THREE.TextureLoader().load('/bg.png'),
          },
        },
        vertexShader: `
					varying vec2 vUv;

					void main() {
						vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
						gl_Position = projectionMatrix * mvPosition;

						vUv = uv;
					}
				`,
        fragmentShader: `
          uniform float time;
          uniform float uDisplaceX;
          uniform float uDisplaceY;
          uniform float uStrengthX;
          uniform float uStrengthY;
          uniform sampler2D tex;
          varying vec2 vUv;

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
            vec3 outgo;

            vec2 newUv = vUv;
            newUv.x += snoise( vec3(vUv.xy * uDisplaceX, 0.5) + time ) * uStrengthX;
            newUv.y += snoise( vec3(vUv.yx * uDisplaceY, 0.5) + time ) * uStrengthY;

            float angle = 1.2;
            vec2 offset = 0.01 * vec2(cos(angle + time), sin(angle - time));
            vec3 cR = texture2D(tex, newUv - offset * 0.4).xyz;
            vec3 cG = texture2D(tex, newUv + offset * 0.0).xyz;
            vec3 cB = texture2D(tex, newUv + offset * 0.1).xyz;

            outgo = vec3(cR.r, cG.g, cB.b);
            outgo *= 1.8;

						vec4 tex = texture2D(tex, newUv);
            float a = tex.w;
						gl_FragColor = vec4(outgo, a);
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
      window.addEventListener('resize', () => {
        this.sizes.w = window.innerWidth;
        this.sizes.h = window.innerHeight * 0.85;

        this.camera.aspect = this.sizes.w / this.sizes.h;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.sizes.w, this.sizes.h);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });
      window.addEventListener('scroll', (e) => {
        // console.log(window.pageYOffset);
      });
    },

    render() {
      this.material.uniforms.time.value += 0.005;

      this.renderer && this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render);
    },

    clear() {
      this.renderer.dispose();
      this.renderer.domElement = null;
      this.renderer = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-background {
  position: absolute;
  left: -1%;
  top: 0;
  width: 100vw;
  // height: 100vh;
}
</style>
