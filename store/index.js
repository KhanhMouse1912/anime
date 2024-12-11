export const strict = false

export const state = () => ({
  loading: false,
  categories: [],
  slides: []
})
export const getters = {
  loading: (state) => state.loading,
  categories: (state) => state.categories,
}
export const mutations = {
  SET_STATE_VALUE: (state, payload) => {
    state[payload.key] = payload.value
  },
}
export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    try {
      const res = await $axios.get('https://google.serper.dev/news?q=apple+inc&apiKey=e6dc8d729d2068059e937f703de8709768c9bcb1');
      commit('SET_STATE_VALUE', {
        key: 'categories',
        value: res?.data?.news ?? [],
      })
      const sliders = await $axios.get('https://google.serper.dev/images?q=apple+inc&num=20&apiKey=e6dc8d729d2068059e937f703de8709768c9bcb1');
      commit('SET_STATE_VALUE', {
        key: 'slides',
        value: sliders?.data?.images ?? [],
      })
    } catch (e) {}
  },
}
