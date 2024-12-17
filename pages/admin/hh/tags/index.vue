<template>
  <div class="flex items-start gap-8">
    <div class="flex-1">
      <div class="max-h-[700px] overflow-auto">
        <a-table :columns="columns" :data-source="data" :pagination="false">
          <span slot="name" slot-scope="text">{{ text }}</span>
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
    </div>
    <div class="flex-[0_0_380px]">
      <h2 class="text-lg mb-4">
        {{ formState?.id ? 'Cập nhật tag' : 'Tạo tag' }}
      </h2>
      <a-form layout="vertical">
        <a-form-item label="Tên tag" class="!mb-0">
          <a-input v-model="formState.name" placeholder="Tên tag" />
        </a-form-item>
        <a-form-item label="Key Code" class="!mb-0">
          <a-input
            v-model="formState.keyCode"
            placeholder="Key code"
            disabled
          />
        </a-form-item>
        <a-form-item class="!mt-2">
          <a-button type="primary" @click="onSubmit" :disabled="!formState.name?.length">
            {{ formState?.id ? 'Cập nhật' : 'Tạo' }}
          </a-button>
          <a-button v-if="formState?.id" class="ml-4" @click="onReset()">Reset</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TagsList',
  layout: 'admin',
  data() {
    return {
      formState: {
        name: '',
        keyCode: '',
      },
      columns: [
        {
          title: 'Tên hashtag',
          dataIndex: 'name',
          key: 'name',
        },
        {
          dataIndex: 'operation',
          key: 'operation',
          scopedSlots: { customRender: 'operation' },
          width: '120px',
        },
      ],
      data: [
        {
          key: '1',
          id: '1',
          name: 'John Brown',
          keyCode: 'John-Brown',
        },
        {
          key: '2',
          id: '2',
          name: 'Jim Green',
          keyCode: 'Jim-Green',
        },
        {
          key: '3',
          id: '3',
          name: 'Joe Black',
          keyCode: 'Jo-Black',
        },
      ],
    }
  },
  methods: {
    onShowEdit(record) {
      this.formState = {
        id: record.id,
        name: record.name,
        keyCode: record.keyCode,
      }
    },
    onReset() {
      this.formState = {
        name: ""
      }
    },
    onConfirmDelete(record) {
      if (!record?.id) return;
      this.data = this.data.filter(item => item.id !== record.id);
    },
    create() {
      if(!this.formState.name) return;
      this.formState = {
        ...this.formState,
        keyCode: this.formState.name.split(" ").slice(0, 5).join("-")
      }
      // TODO: create
      this.onReset();
    },
    update() {
      if(!this.formState.id) return;
      this.formState = {
        ...this.formState,
        keyCode: this.formState.name.split(" ").slice(0, 5).join("-")
      }
      // TODO: update
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
      value: "Danh sách Hashtag",
    })
  }
}
</script>
