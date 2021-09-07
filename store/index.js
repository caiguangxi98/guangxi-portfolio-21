export const state = () => ({
  darkMood: true,
});

export const mutations = {
  changeColorMood() {
    this.state.darkMood = !this.state.darkMood;
  },
};
