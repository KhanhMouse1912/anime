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
  cookies: []
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
  async getProducts({ commit }, payload) {
    try {
      const res = await this.$axios.get(payload ?? "products");
      commit('SET_STATE_VALUE', {
        key: 'products',
        value: {
          list: [
            ...res?.data?.products?.data ?? []
          ],
          pagination: {
            next_page_url: res?.data?.products.next_page_url,
            prev_page_url: res?.data?.products.prev_page_url,
            total: res?.data?.products.total
          }
        },
      })
    } catch (error) {
    }
  },
  // async getCookies({ commit }) {
  //   try {
  //     const res = await this.$axios.get("cookies");
  //     commit('SET_STATE_VALUE', {
  //       key: 'cookies',
  //       value: {
  //         list: [
  //           ...res?.data?.products?.data ?? []
  //         ],
  //         pagination: {
  //           next_page_url: res?.data?.products.next_page_url,
  //           prev_page_url: res?.data?.products.prev_page_url,
  //           total: res?.data?.products.total
  //         }
  //       },
  //     })
  //   } catch (error) {
  //   }
  // },
  async getCategories({ commit }, payload) {
    try {
      const res = await this.$axios.get(payload ?? "admin/categories");
      commit('SET_STATE_VALUE', {
        key: 'categories',
        value: {
          list: [
            ...res?.data?.categories?.data ?? []
          ],
          pagination: {
            next_page_url: res?.data?.categories.next_page_url,
            prev_page_url: res?.data?.categories.prev_page_url,
            total: res?.data?.categories.total
          }
        },
      })
    } catch (error) {
    }
  },
  async removeCategory({ commit, state }, id) {
    try {
      const res = await this.$axios.get(`admin/categories/destroy/${id}`);
      if (res.status === 200) {
        const newList = state.categories.list.filter(item => item.category_id !== id);
        commit('SET_STATE_VALUE', {
          key: 'categories',
          value: {
            list: [...newList],
            pagination: { ...state.categories.pagination }
          },
        })
      }
    } catch (error) {
    }
  },
  async updateCategory({ commit, dispatch }, payload) {
    try {
      const res = await this.$axios.post(`admin/categories/update/${payload.id}`, payload.data);
      if (res.status === 200) {
        dispatch("getCategories")
      }
    } catch (error) {
    }
  },
  async createCategory({ commit, dispatch }, payload) {
    try {
      const res = await this.$axios.post('admin/categories/store', payload);
      if (res.status === 200) {
        dispatch("getCategories")
      }
    } catch (error) {
    }
  },

}
