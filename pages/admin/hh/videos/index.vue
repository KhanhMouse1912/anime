<template>
  <div class="flex items-start gap-8">
    <div class="flex-1">
      <div class="max-h-[700px] overflow-auto">
        <a-table :columns="columns" :data-source="videos" :pagination="false">
          <span slot="name" slot-scope="text">{{ text }}</span>
          <span slot="tags" slot-scope="tags" class="flex gap-2 flex-wrap">
            <a-tag v-for="item in tags" :key="item" class="!mr-0">
              {{ item.name }}
            </a-tag>
          </span>
          <span
            slot="categories"
            slot-scope="categories"
            class="flex gap-2 flex-wrap"
          >
            <a-tag v-for="item in categories" :key="item" class="!mr-0">
              {{ item.name }}
            </a-tag>
          </span>
          <span slot="operation" slot-scope="text, record">
            <div class="flex items-center justify-end gap-2">
              <a-button type="primary" @click="onShowEdit(record)">
                Sửa
              </a-button>
              <a-popconfirm
                title="Vui lòng xác nhận!"
                ok-text="Có"
                cancel-text="Không"
                @confirm="onConfirmDelete(record)"
              >
                <a-button type="danger">Xóa</a-button>
              </a-popconfirm>
            </div>
          </span>
        </a-table>
      </div>
      <div class="flex items-center justify-end mt-4">
        <a-pagination
          v-model="pagination.page"
          :page-size="20"
          :total="pagination.total"
          show-less-items
          @change="onChangePagination"
        />
      </div>
    </div>
    <div class="flex-[0_0_380px]">
      <h2 class="text-lg mb-4">
        {{ formState?.id ? 'Cập nhật danh mục' : 'Tạo danh mục' }}
      </h2>
      <a-form layout="vertical">
        <a-form-item label="Tiêu đề video" class="!mb-0">
          <a-input v-model="formState.name" placeholder="Tên danh mục" />
        </a-form-item>
        <a-form-item label="Link video" class="!mb-0">
          <a-input v-model="formState.link" placeholder="Link video" />
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
          <a-input
            v-model="formState.slug"
            placeholder="Key code"
            disabled
          />
        </a-form-item>
        <a-form-item class="!mt-2">
          <a-button type="primary" @click="onSubmit()">
            {{ formState?.id ? 'Cập nhật' : 'Tạo' }}
          </a-button>
          <a-button class="ml-4" @click="onReset()">
            Reset
          </a-button>
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
      formState: {
        name: '',
        slug: '',
        link: '',
        categories: [],
      },
      pagination: {
        page: 1,
        total: 1000,
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
          width: '220px',
          scopedSlots: { customRender: 'image' },
        },
        {
          title: 'Danh mục',
          dataIndex: 'categories',
          key: 'categories',
          width: '250px',
          scopedSlots: { customRender: 'categories' },
        },
        {
          dataIndex: 'operation',
          key: 'operation',
          scopedSlots: { customRender: 'operation' },
          width: '120px',
        },
      ],
    }
  },
  watch: {
    formState(newVal, oldVal) {
      console.log('User name changed:', newVal, oldVal)
    },
  },
  computed: {
    ...mapState({
      categoriesOptions: (state) => state.categoriesOptions,
      tagsOptions: (state) => state.tagsOptions,
    }),
    ...mapState("admin", {
      products: (state) => state.products,
      categories: (state) => state.categories,
    }),
    videos() {
      return this.products?.list?.map((video) => {
        return {
          id: video?.description?.meta_title ?? undefined,
          thumbnail: video.image,
          viewed: video.viewed,
          name: video?.description?.name ?? '',
        }
      })
    },
  },
  methods: {
    onChangePagination(e) {
      console.log('e: ', e)
    },
    getProducts(url) {
      this.$store.dispatch(url ?? "admin/getProducts");
    },
    onShowEdit(record) {
      this.formState = {
        id: record.id,
        name: record.name,
        slug: record.slug,
        categories: (record?.categories ?? []).map((item) => item.id),
        tags: (record?.tags ?? []).map((item) => item.id),
      }
    },
    onReset() {
      this.formState = {
        name: '',
      }
    },
    onConfirmDelete(record) {
      if (!record?.id) return
      this.data = this.data.filter((item) => item.id !== record.id)
    },
    create() {
      if (!this.formState.name || !this.formState.link) return
      this.formState = {
        ...this.formState,
        slug: this.formState.name.split(' ').slice(0, 5).join('-'),
      }
      console.log('this.formState: ', this.formState)
      // TODO: create
      this.onReset()
    },
    update() {
      if (!this.formState.id) return
      this.formState = {
        ...this.formState,
        slug: this.formState.name.split(' ').slice(0, 5).join('-'),
      }
      // TODO: update
      this.onReset()
    },
    onSubmit() {
      if (this.formState?.id) this.update()
      else this.create()
    },
  },
  created() {
    if (!this.products.length) this.getProducts();
    this.$store.commit('SET_STATE_VALUE', {
      key: 'pageAdminName',
      value: "Danh sách Videos",
    })
  }
}
</script>
