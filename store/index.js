export const strict = false

export const state = () => ({
  loading: false,
  pageAdminName: '',
  categories: [],
  slides: [],
  newlyUpdated: [],
  relatedVideos: [],
  tagsOptions: [
    {
      id: 'tag1',
      value: 'tag1',
      label: 'tag 1',
    },
    {
      id: 'tag2',
      value: 'tag2',
      label: 'tag 2',
    },
    {
      id: 'tag3',
      value: 'tag3',
      label: 'tag 3',
    },
    {
      id: 'tag4',
      value: 'tag4',
      label: 'tag 4',
    },
    {
      id: 'tag5',
      value: 'tag5',
      label: 'tag 5',
    },
  ],
  categoriesOptions: [
    {
      id: 'categorie1',
      value: 'categorie1',
      label: 'categorie 1',
    },
    {
      id: 'categorie2',
      value: 'categorie2',
      label: 'categorie 2',
    },
    {
      id: 'categorie3',
      value: 'categorie3',
      label: 'categorie 3',
    },
    {
      id: 'categorie4',
      value: 'categorie4',
      label: 'categorie 4',
    },
    {
      id: 'categorie45',
      value: 'categorie45',
      label: 'categorie 55',
    },
  ],
})
export const getters = {
  loading: (state) => state.loading,
  categories: (state) => state.categories,
  slides: (state) => state.slides,
  newlyUpdated: (state) => state.newlyUpdated,
  relatedVideos: (state) => state.relatedVideos,
  tagsOptions: (state) => state.tagsOptions,
  categoriesOptions: (state) => state.categoriesOptions,
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
      // TODO: Call API get newly updated for NewVideos component
      commit('SET_STATE_VALUE', {
        key: 'newlyUpdated',
        value: [],
      })
    } catch (e) {}
  },
}
