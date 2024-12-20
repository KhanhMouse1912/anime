export const strict = false

export const state = () => ({
  loading: false,
  pageAdminName: '',
  products: {
    list: [],
    pagination: {
      next_page_url: null,
      prev_page_url: null,
      total: 0
    }
  },
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
      const [categories, slidersData, lastUpdated, productsData] = await Promise.all([
        $axios.get('categories'),
        $axios.get('products/trends'),
        $axios.get('products/last-update'),
        $axios.get('products/list'),
      ]);
      commit('SET_STATE_VALUE', {
        key: 'categories',
        value: categories?.data?.categories?.data ?? [],
      })
      commit('SET_STATE_VALUE', {
        key: 'slides',
        value: slidersData?.data?.products ?? [],
      })
      commit('SET_STATE_VALUE', {
        key: 'newlyUpdated',
        value: lastUpdated?.data?.products ?? [],
      })
      commit('SET_STATE_VALUE', {
        key: 'products',
        value: {
          list: productsData?.data?.products?.data ?? [],
          pagination: {
            next_page_url: productsData?.data?.products.next_page_url,
            prev_page_url: productsData?.data?.products.prev_page_url,
            total: productsData?.data?.products.total
          }
        },
      })
    } catch (e) {}
  },
  async getViewMore({ commit, state }, payload) {
    try {
      const productsData = await this.$axios.get(payload);
      commit('SET_STATE_VALUE', {
        key: 'products',
        value: {
          list: [
            ...state.products.list,
            ...productsData?.data?.products?.data ?? []
          ],
          pagination: {
            next_page_url: productsData?.data?.products.next_page_url,
            prev_page_url: productsData?.data?.products.prev_page_url,
            total: productsData?.data?.products.total
          }
        },
      })
    } catch (error) {
    }
  }
}
