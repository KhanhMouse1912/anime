<template>
  <div>
    <div>
      <div class="mb-4 flex justify-end">
        <a-button type="primary" @click="onToggleMenu()"> Tạo mới </a-button>
      </div>
      <div class="max-h-[700px] overflow-auto">
        <a-table :columns="columns" :data-source="videos" :pagination="false">
          <span slot="name" slot-scope="text">{{ text }}</span>
          <span slot="image" slot-scope="text">
            <img
              :src="text"
              alt=""
              class="max-h-[100px] w-full object-cover"
              @error="setDefaultImage($event)"
            />
          </span>
          <span slot="tags" slot-scope="tags" class="flex gap-2 flex-wrap">
            <a-tag v-for="item in tags" :key="item" class="!mr-0">
              {{ item.name }}
            </a-tag>
          </span>
          <span
            slot="categories"
            slot-scope="categories"
            class="flex gap-1 flex-wrap"
          >
            <a-tag
              v-for="item in categories"
              :key="item.category_id"
              class="!mr-0"
              color="blue"
            >
              {{ item?.category?.description?.name ?? '-' }}
            </a-tag>
          </span>
          <span slot="tags" slot-scope="tags" class="flex gap-1 flex-wrap">
            <a-tag v-for="item in tags" :key="item.category_id" class="!mr-0">
              {{ item?.info?.name ?? '-' }}
            </a-tag>
          </span>
          <span slot="operation" slot-scope="text, record">
            <div class="flex items-center justify-end gap-2">
              <a-button type="dashed" @click="onShowEdit(record)" class="!px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.9445 9.1875L14.9445 5.1875M18.9445 9.1875L13.946 14.1859C13.2873 14.8446 12.4878 15.3646 11.5699 15.5229C10.6431 15.6828 9.49294 15.736 8.94444 15.1875C8.39595 14.639 8.44915 13.4888 8.609 12.562C8.76731 11.6441 9.28735 10.8446 9.946 10.1859L14.9445 5.1875M18.9445 9.1875C18.9445 9.1875 21.9444 6.1875 19.9444 4.1875C17.9444 2.1875 14.9445 5.1875 14.9445 5.1875M20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12C3.5 5.5 5.5 3.5 12 3.5"
                    stroke="#2a2c31"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a-button>
              <a-popconfirm
                title="Vui lòng xác nhận!"
                ok-text="Có"
                cancel-text="Không"
                @confirm="onConfirmDelete(record)"
              >
                <a-button type="dashed" class="!px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2.75C11.0215 2.75 10.1871 3.37503 9.87787 4.24993C9.73983 4.64047 9.31134 4.84517 8.9208 4.70713C8.53026 4.56909 8.32557 4.1406 8.46361 3.75007C8.97804 2.29459 10.3661 1.25 12 1.25C13.634 1.25 15.022 2.29459 15.5365 3.75007C15.6745 4.1406 15.4698 4.56909 15.0793 4.70713C14.6887 4.84517 14.2602 4.64047 14.1222 4.24993C13.813 3.37503 12.9785 2.75 12 2.75Z"
                      fill="#f5222d"
                    />
                    <path
                      d="M2.75 6C2.75 5.58579 3.08579 5.25 3.5 5.25H20.5001C20.9143 5.25 21.2501 5.58579 21.2501 6C21.2501 6.41421 20.9143 6.75 20.5001 6.75H3.5C3.08579 6.75 2.75 6.41421 2.75 6Z"
                      fill="#f5222d"
                    />
                    <path
                      d="M5.91508 8.45011C5.88753 8.03681 5.53015 7.72411 5.11686 7.75166C4.70356 7.77921 4.39085 8.13659 4.41841 8.54989L4.88186 15.5016C4.96735 16.7844 5.03641 17.8205 5.19838 18.6336C5.36678 19.4789 5.6532 20.185 6.2448 20.7384C6.83639 21.2919 7.55994 21.5307 8.41459 21.6425C9.23663 21.75 10.2751 21.75 11.5607 21.75H12.4395C13.7251 21.75 14.7635 21.75 15.5856 21.6425C16.4402 21.5307 17.1638 21.2919 17.7554 20.7384C18.347 20.185 18.6334 19.4789 18.8018 18.6336C18.9637 17.8205 19.0328 16.7844 19.1183 15.5016L19.5818 8.54989C19.6093 8.13659 19.2966 7.77921 18.8833 7.75166C18.47 7.72411 18.1126 8.03681 18.0851 8.45011L17.6251 15.3492C17.5353 16.6971 17.4712 17.6349 17.3307 18.3405C17.1943 19.025 17.004 19.3873 16.7306 19.6431C16.4572 19.8988 16.083 20.0647 15.391 20.1552C14.6776 20.2485 13.7376 20.25 12.3868 20.25H11.6134C10.2626 20.25 9.32255 20.2485 8.60915 20.1552C7.91715 20.0647 7.54299 19.8988 7.26957 19.6431C6.99616 19.3873 6.80583 19.025 6.66948 18.3405C6.52891 17.6349 6.46488 16.6971 6.37503 15.3492L5.91508 8.45011Z"
                      fill="#f5222d"
                    />
                    <path
                      d="M9.42546 10.2537C9.83762 10.2125 10.2051 10.5132 10.2464 10.9254L10.7464 15.9254C10.7876 16.3375 10.4869 16.7051 10.0747 16.7463C9.66256 16.7875 9.29502 16.4868 9.25381 16.0746L8.75381 11.0746C8.71259 10.6625 9.0133 10.2949 9.42546 10.2537Z"
                      fill="#f5222d"
                    />
                    <path
                      d="M15.2464 11.0746C15.2876 10.6625 14.9869 10.2949 14.5747 10.2537C14.1626 10.2125 13.795 10.5132 13.7538 10.9254L13.2538 15.9254C13.2126 16.3375 13.5133 16.7051 13.9255 16.7463C14.3376 16.7875 14.7051 16.4868 14.7464 16.0746L15.2464 11.0746Z"
                      fill="#f5222d"
                    />
                  </svg>
                </a-button>
              </a-popconfirm>
            </div>
          </span>
        </a-table>
      </div>
      <div class="flex items-center justify-end mt-4">
        <a-pagination
          v-model="pagination.current_page"
          :page-size="pagination.per_page ?? 20"
          :total="pagination.total"
          show-less-items
          @change="onChangePagination"
        />
      </div>
    </div>
    <div
      class="form--create shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]"
      :class="toggleForm && 'active'"
    >
      <div class="flex items-center justify-between mb-4 mt-[100px]">
        <h2 class="text-lg mb-0">
          {{ formState?.id ? 'Cập nhật video' : 'Tạo video' }}
        </h2>
        <button class="mb-0 cursor-pointer" @click="onToggleMenu()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
              stroke="#2a2c31"
              stroke-width="1.5"
            />
            <path
              d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
              stroke="#2a2c31"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      <a-form layout="vertical">
        <a-form-item label="Tiêu đề video" class="!mb-0">
          <a-input v-model="formState.name" placeholder="Tiêu đề video" />
        </a-form-item>
        <a-form-item label="Link video" class="!mb-0">
          <a-input v-model="formState.link" placeholder="Link video" />
        </a-form-item>
        <div class="flex gap-2">
          <a-form-item label="Link ảnh" class="!mb-0 !w-full">
            <a-input v-model="formState.image" placeholder="Link ảnh" />
          </a-form-item>
          <span v-if="!!formState.image?.length">
            <img
              :src="formState.image"
              alt=""
              class="w-[100px] object-cover"
              @error="setDefaultImage($event)"
            />
          </span>
        </div>
        <a-form-item label="Mô tả" class="!mb-0">
          <a-textarea
            v-model="formState.description"
            placeholder="Mô tả"
            class="max-h-[200px]"
          />
        </a-form-item>
        <a-form-item label="Danh mục" class="!mb-0">
          <a-select
            v-model="formState.categories"
            :options="categoriesOptions"
            mode="multiple"
            placeholder="Please select"
          >
          </a-select>
        </a-form-item>
        <a-form-item label="Hashtag" class="!mb-0">
          <a-select
            v-model="formState.tags"
            :options="tagsOptions"
            mode="multiple"
            placeholder="Please select"
          ></a-select>
        </a-form-item>
        <a-form-item label="Key Code" class="!mb-0">
          <a-input v-model="formState.slug" placeholder="Key code" disabled />
        </a-form-item>
        <a-form-item class="!mt-2">
          <a-button type="primary" @click="onSubmit()">
            {{ formState?.id ? 'Cập nhật' : 'Tạo' }}
          </a-button>
          <a-button class="ml-4" @click="onReset()"> Reset </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'VideosList',
  layout: 'admin',
  data() {
    return {
      toggleForm: false,
      formState: {
        name: '',
        image: '',
        link: '',
        description: '',
        categories: [],
        tags: [],
      },
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Hình ảnh',
          dataIndex: 'image',
          key: 'image',
          width: '120px',
          scopedSlots: { customRender: 'image' },
        },
        {
          title: 'Danh mục',
          dataIndex: 'categories',
          key: 'categories',
          width: '300px',
          scopedSlots: { customRender: 'categories' },
        },
        {
          title: 'Hashtag',
          dataIndex: 'tags',
          key: 'tags',
          width: '250px',
          scopedSlots: { customRender: 'tags' },
        },
        {
          dataIndex: 'operation',
          key: 'operation',
          scopedSlots: { customRender: 'operation' },
          width: '120px',
        },
      ],
      defaultImageError: "/default.webp"
    }
  },
  computed: {
    ...mapState('admin', {
      products: (state) => state.products,
      tags: (state) => state.tags,
      categoriesStore: (state) => state.categories,
    }),
    videos() {
      return this.products?.list?.map((video) => {
        return {
          id: video?.product_id ?? undefined,
          image: video.image,
          viewed: video.viewed,
          name: video?.description?.name ?? '',
          description: video?.description?.description ?? '',
          categories: video?.categories ?? [],
          tags: video?.tags ?? [],
          link: video?.options?.[0]?.value,
        }
      })
    },
    categoriesOptions() {
      return this.categoriesStore?.list?.map((item) => {
        return {
          id: item.category_id,
          key: item.category_id,
          name: item?.description?.name ?? '',
          label: item?.description?.name ?? '',
          value: item.category_id,
        }
      })
    },
    tagsOptions() {
      return this.tags?.map((item) => {
        return {
          id: item.tag_id,
          key: item.tag_id,
          name: item?.name ?? '',
          label: item?.name ?? '',
          value: item.tag_id,
        }
      })
    },
    pagination() {
      return this.products.pagination
    },
  },
  methods: {
    setDefaultImage(event) {
      event.target.src = this.defaultImageError;
    },
    onToggleMenu() {
      this.toggleForm = !this.toggleForm
      const body = document.getElementsByTagName('body')
      if (this.toggleForm) {
        body[0].classList += 'body-hidden'
      } else {
        body[0].classList = ''
      }
    },
    onChangePagination(e) {
      this.$store.dispatch("admin/getProducts", `admin/products?page=${e}`)
    },
    getProducts() {
      this.$store.dispatch('admin/getProducts')
    },
    onShowEdit(record) {
      this.toggleForm = true
      this.formState = {
        id: record.id,
        name: record.name,
        link: record.link,
        image: record.image,
        description: record.description,
        categories: (record?.categories ?? []).map((item) => item.category_id),
        tags: (record?.tags ?? []).map((item) => item.tag_id),
      }
    },
    onReset() {
      this.formState = {
        name: '',
        image: '',
        link: '',
        description: '',
        categories: [],
        tags: [],
      }
    },
    onConfirmDelete(record) {
      if (!record?.id) return
      this.$store.dispatch('admin/removeProduct', record.id).then(() => {
        this.$message.success('Xóa thành công')
        this.toggleForm = false
        if (!this.videos.length) this.getProducts()
      })
    },
    convertToSlug(title, maxWords = 8) {
      return title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .split(/\s+/)
        .slice(0, maxWords)
        .join('-')
        .replace(/-+/g, '-')
    },
    create() {
      if (!this.formState.name || !this.formState.link) return
      const dataRq = {
        product: {
          org_id: 0,
          status_check: 2,
          video: 0,
          quality: '720p',
          year_manufacture: '',
          rate: '',
          quantity: 0,
          location: '',
          warning: '',
          episode_duration: '',
          url_trainner: '',
          status: 'active',
          type_movie: 'one_episodes',
          image: this.formState.image ?? '',
        },
        product_description: {
          tag: '',
          language_id: 1,
          name: this.formState.name ?? '',
          description: this.formState.description ?? '',
          meta_keyword: this.convertToSlug(this.formState.name),
        },
        product_category: this.formState.categories.map((item) => {
          return { category_id: item }
        }),
        product_tag: this.formState.tags ?? [],
        date_available: '',
        product_option: {
          1000: {
            episode: 1,
            product_option_id: 1000,
            value: this.formState.link,
          },
        },
      }
      this.$store.dispatch('admin/createProduct', dataRq).then(() => {
        this.$message.success('Tạo sản phẩm thành công')
        this.onReset()
        this.toggleForm = false
      })
    },
    update() {
      if (!this.formState.id) return
      const dataRq = {
        product: {
          org_id: 0,
          status_check: 2,
          video: 0,
          quality: '720p',
          year_manufacture: 0,
          rate: '',
          quantity: 0,
          location: 0,
          warning: 0,
          episode_duration: 0,
          url_trainner: '',
          status: 'active',
          type_movie: 'one_episodes',
          image: this.formState.image,
        },
        product_description: {
          tag: '',
          language_id: 1,
          name: this.formState.name,
          description: this.formState.description ?? '',
          meta_keyword: this.convertToSlug(this.formState.name),
        },
        product_category: this.formState.categories.map((item) => {
          return { category_id: item }
        }),
        product_tag: this.formState.tags,
        date_available: '',
        product_option: {
          1000: {
            episode: 1,
            product_option_id: 1000,
            value: this.formState.link,
          },
        },
      }
      this.$store
        .dispatch('admin/updateProduct', {
          id: this.formState.id,
          data: dataRq,
        })
        .then(() => {
          this.$message.success('Cập nhật sản phẩm thành công')
          this.onReset()
          this.toggleForm = false
        })
    },
    onSubmit() {
      if (this.formState?.id) this.update()
      else this.create()
    },
  },
  created() {
    if (!this.products?.list?.length) this.getProducts()
    if (!this.tags.length) this.$store.dispatch('admin/getTags')
    this.$store.commit('SET_STATE_VALUE', {
      key: 'pageAdminName',
      value: 'Danh sách Videos',
    })
  },
}
</script>

<style lang="scss" scoped>
.form--create {
  position: fixed;
  right: -380px;
  top: 0;
  overflow-y: auto;
  width: 380px;
  height: 100vh;
  padding: 20px 16px;
  background: #fafafa;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  transition: all ease-in 0.2s;
  cursor: pointer;
  z-index: 12;
  &.active {
    right: 0;
    z-index: 12;
  }
}
</style>
