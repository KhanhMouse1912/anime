<template>
  <div>
    <div class="max-h-[700px] overflow-auto">
      <a-table :columns="columns" :data-source="data" :pagination="false">
        <span slot="name" slot-scope="text">{{ text }}</span>
        <span slot="operation" slot-scope="text, record">
          <div class="flex items-center justify-center gap-2">
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
      <a-button type="primary" @click="refreshList()" class="mr-6">Làm mới</a-button>
      <a-pagination
        v-model="pagination.page"
        :page-size="50"
        :total="pagination.total"
        show-less-items
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'CookiesList',
  layout: 'admin',
  data() {
    return {
      pagination: {
        page: 1,
        total: 100,
      },
      columns: [
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Password',
          dataIndex: 'password',
          key: 'password',
        },
        {
          dataIndex: 'operation',
          key: 'operation',
          scopedSlots: { customRender: 'operation' },
          width: '160px',
        },
      ],
      data: [
        {
          key: '1',
          id: '1',
          email: 'John Brown1',
          password: 'John-Brown',
        },
        {
          key: '2',
          id: '2',
          email: 'John Brown 2',
          password: 'John-Brown',
        },
      ],
    }
  },
  methods: {
    onConfirmDelete(record) {
      if (!record?.id) return
      this.data = this.data.filter((item) => item.id !== record.id)
    },
    refreshList() {}
  },
  created() {
    this.$store.commit('SET_STATE_VALUE', {
      key: 'pageAdminName',
      value: "Danh sách Cookies",
    })
  }
}
</script>
