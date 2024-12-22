export const strict = false

export const state = () => ({
  loading: false,
  pageAdminName: '',
  products: {
    list: [],
    pagination: {
      next_page_url: null,
      prev_page_url: null,
      total: 0,
      per_page: 20,
      current_page: 1,
    }
  },
  categories: {
    list: [],
    pagination: {
      next_page_url: null,
      prev_page_url: null,
      total: 0
    }
  },
  cookies: [],
  tags: [],
  customers: []
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
  async getUsers({ commit }) {
    try {
      const res = await this.$axios.get("admin/users");
      if (res.status === 201) {
        commit('SET_STATE_VALUE', {
          key: 'customers',
          value: res?.data?.customers ?? [],
        })
      }
    } catch (error) {
    }
  },
  async removeUser({ commit, state }, id) {
    try {
      const res = await this.$axios.get(`admin/users/destroy/${id}`);
      if (res.status === 201) {
        const newList = state.customers.filter(item => item.id !== id);
        commit('SET_STATE_VALUE', {
          key: 'customers',
          value: [...newList],
        })
      }
    } catch (error) {
    }
  },
  async getProducts({ commit }, payload) {
    try {
      const res = await this.$axios.get(payload ?? "admin/products");
      commit('SET_STATE_VALUE', {
        key: 'products',
        value: {
          list: [
            ...res?.data?.products?.data ?? []
          ],
          pagination: {
            current_page: res?.data?.products.current_page,
            per_page: res?.data?.products.per_page,
            next_page_url: res?.data?.products.next_page_url,
            prev_page_url: res?.data?.products.prev_page_url,
            total: res?.data?.products.total
          }
        },
      })
    } catch (error) {
    }
  },
  async createProduct({ commit, dispatch }, payload) {
    try {
      const res = await this.$axios.post("admin/products/store", payload);
      if (res.status === 201) {
        dispatch("getProducts")
      }
    } catch (error) {
    }
  },
  async updateProduct({ commit, dispatch }, payload) {
    try {
      const res = await this.$axios.post(`admin/products/update/${payload.id}`, payload.data);
      if (res.status === 200) {
        dispatch("getProducts")
      }
    } catch (error) {
    }
  },
  async removeProduct({ commit, state }, id) {
    try {
      const res = await this.$axios.get(`admin/products/destroy/${id}`);
      if (res.status === 200) {
        const newList = state.products.list.filter(item => item.product_id !== id);
        commit('SET_STATE_VALUE', {
          key: 'products',
          value: {
            list: [...newList],
            pagination: { ...state.products.pagination }
          },
        })
      }
    } catch (error) {
    }
  },
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
  async getTags({ commit }, payload) {
    try {
      const res = await this.$axios.get(payload ?? "admin/tags");
      commit('SET_STATE_VALUE', {
        key: 'tags',
        value: res?.data?.tags ?? [],
      })
    } catch (error) {
    }
  },
  async removeTag({ commit, state }, id) {
    try {
      const res = await this.$axios.get(`admin/tags/destroy/${id}`);
      if (res.status === 200) {
        const newList = state.tags.filter(item => item.tag_id !== id);
        commit('SET_STATE_VALUE', {
          key: 'tags',
          value: [...newList],
        })
      }
    } catch (error) {
    }
  },
  async updateTag({ commit, dispatch }, payload) {
    try {
      const res = await this.$axios.post(`admin/tags/update/${payload.id}`, payload.data);
      if (res.status === 200) {
        dispatch("getTags")
      }
    } catch (error) {
    }
  },
  async createTag({ commit, dispatch }, payload) {
    try {
      const res = await this.$axios.post('admin/tags/store', payload);
      if (res.status === 201) {
        dispatch("getTags")
      }
    } catch (error) {
    }
  },
}
