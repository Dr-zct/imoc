<template>
  <div>
    <div class="btn"><a-button type="primary"> 导出</a-button></div>
    <a-table
      rowKey="id"
      @change="tableChange"
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
      :pagination="{
        total,
        current,
        pageSize,
        showSizeChanger: true,
        showTotal: (total, range) => {
          return `共 ${total} 条记录，第 ${current} / 共 ${Math.ceil(total / pageSize)} 页`
        },
      }"
    >
      <slot :slot="item.scopedSlots.customRender" slot-scope="text" v-for="item in scopedSlots">
        <a-tag :color="text > 50 ? '#f50' : '#87d068'" :key="item.title">
          {{ text }}
        </a-tag>
      </slot>
    </a-table>
  </div>
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => [],
      require: true,
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    columns: {
      immediate: true,
      deep: true,
      handler() {
        const list = this.columns.filter(item => item?.scopedSlots?.customRender === "tags")
        console.log(list, "11111111111")
        this.scopedSlots = list
      },
    },
  },
  data() {
    return {
      current: 1,
      total: 100,
      pageSize: 10,
      selectedRowKeys: [],
      dataSource: [],
      scopedSlots: [],
    }
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      console.log(selectedRowKeys, "1111111111")
      this.selectedRowKeys = selectedRowKeys
    },
    tableChange({ pageSize, current }) {
      this.pageSize = pageSize
      this.current = current
    },
  },
}
</script>
<style lang="less" scoped>
.btn {
  display: flex;
  justify-content: flex-end;
  margin-top: -20px;
  margin-bottom: 10px;
  position: relative;
  top: -32px;
}
/deep/ .ant-table-thead > tr > th {
  background: #33ccff !important;
}
</style>
