<template>
  <div class="flex items-start gap-8">
    <div class="flex-1 max-h-[700px] overflow-auto">
      <a-table :columns="columns" :data-source="list" :pagination="false">
        <span slot="name" slot-scope="text">{{ text }}</span>
        <span slot="slug" slot-scope="text">{{ text ?? "-" }}</span>
        <span slot="operation" slot-scope="text, record">
          <div class="flex items-center gap-2">
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
    <div class="flex-[0_0_380px]">
      <h2 class="text-lg mb-4 italic">
        {{ formState?.id ? 'Cập nhật danh mục' : 'Tạo danh mục' }}
      </h2>
      <a-form layout="vertical">
        <a-form-item label="Tên danh mục *" class="!mb-0">
          <a-input v-model="formState.name" placeholder="Tên danh mục - Bắt buộc nhập" />
        </a-form-item>
        <a-form-item label="Mô tả" class="!mb-0">
          <a-textarea
            v-model="formState.description"
            placeholder="Mô tả"
            class="max-h-[200px]"
          />
        </a-form-item>
        <a-form-item label="Key Code" class="!mb-0">
          <a-input
            v-model="formState.slug"
            placeholder="Key code"
            disabled
          />
        </a-form-item>
        <a-form-item class="!mt-2">
          <a-button type="primary" @click="onSubmit" :disabled="!formState.name?.length">
            {{ formState?.id ? 'Cập nhật' : 'Tạo' }}
          </a-button>
          <a-button v-if="formState?.id" class="ml-4" @click="onReset()">Hủy</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: 'CategoriesList',
  layout: 'admin',
  data() {
    return {
      formState: {
        name: "",
        description: "",
        slug: "",
      },
      columns: [
        {
          title: 'Tên danh mục',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Code',
          dataIndex: 'slug',
          key: 'slug',
          width: '200px',
          scopedSlots: { customRender: 'slug' },
        },
        {
          title: "Hành động",
          dataIndex: 'operation',
          key: 'operation',
          width: '120px',
          scopedSlots: { customRender: 'operation' },
        },
      ],
    }
  },
  computed: {
    ...mapState("admin", {
      categories: (state) => state.categories,
    }),
    list() {
      return this.categories?.list?.map(item => {
        return {
          id: item.category_id,
          key: item.category_id,
          name: item?.description?.name ?? "",
          description: item?.description?.description ?? "",
          slug: item?.description?.meta_title ?? "",
        }
      })
    }
  },
  methods: {
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
        .replace(/-+/g, '-');
    },
    onShowEdit(record) {
      this.formState = {
        id: record.id,
        name: record.name,
        description: record.description,
        slug: record.slug,
      }
    },
    onReset() {
      this.formState = {
        name: "",
        description: "",
        slug: ""
      }
    },
    onConfirmDelete(record) {
      if (!record?.id) return;
      this.$store.dispatch("admin/removeCategory", record.id).then(() => {
        this.$message.success('Xóa thành công');
      });
    },
    create() {
      if(!this.formState.name) return;
      const dataReq = {
        category: {
          parent_id: 0,
          sort_order: 0,
          status: "on",
          image: ""
        },
        category_description: {
          name: this.formState.name ?? "",
          description: this.formState.description ?? "",
          meta_title: this.convertToSlug(this.formState.slug || this.formState.name),
          seo_url: "",
          meta_description: ""
        }
      }
      this.$store.dispatch("admin/createCategory", dataReq).then(() => {
        this.$message.success('Tạo thành công');
      });
      this.onReset();
    },
    update() {
      if(!this.formState.id) return;
      const dataReq = {
        category: {
          parent_id: 0,
          sort_order: 0,
          status: "on",
          image: ""
        },
        category_description: {
          name: this.formState.name ?? "",
          description: this.formState.description ?? "",
          meta_title: this.convertToSlug(this.formState.slug || this.formState.name),
          seo_url: "",
          meta_description: ""
        }
      }
      this.$store.dispatch("admin/updateCategory", { id: this.formState.id, data: dataReq}).then(() => {
        this.$message.success('Cập nhật thành công');
      })
      this.onReset();
    },
    onSubmit() {
      if (this.formState?.id) this.update()
      else this.create()
    },
  },
  created() {
    this.$store.commit('SET_STATE_VALUE', {
      key: 'pageAdminName',
      value: "Danh sách danh mục",
    })
  }
}
</script>
