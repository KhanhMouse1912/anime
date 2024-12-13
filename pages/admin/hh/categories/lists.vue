<template>
  <div class="mt-10">
    <a-table bordered :dataSource="dataSource" :columns="columns">
      <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex === 'name'">
        <div class="editable-cell">
          <span>{{ text || '' }}</span>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="onDelete(record.key)"
        >
          <a>Delete</a>
        </a-popconfirm>
        <span>hello</span>
      </template>
    </template>
    </a-table>
  </div>
</template>

<script>
  export default {
    layout: "private",
    data() {
      return {
        dataSource: [
          {
            key: '1',
            name: 'Mike',
          },
          {
            key: '2',
            name: 'John',
          },
        ],
        columns: [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Actions',
            dataIndex: 'operation',
          },
        ],
      }
    },
    methods: {
      onDelete(key) {
        this.dataSource = this.dataSource.filter(item => item.key !== key);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>