<template>
  <div class="container">
    <a-form :form="form" :colon="false">
      <a-row>
        <a-col :span="6">
          <a-form-item label="所属对象分类" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
            <a-select
              v-decorator="['a', { rules: [{ required: false, message: '请选择!' }] }]"
              @change="handleSelectChange"
              style="width: 100%"
              placeholder="请选择所属对象分类"
            >
              <a-select-option value="a"> 基础设施 </a-select-option>
              <a-select-option value="b"> 其他 </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="所属对象类型" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
            <a-select
              placeholder="请选择所属对象类型"
              v-decorator="['b', { rules: [{ required: false, message: '请选择!' }] }]"
              @change="handleSelectChange"
              style="width: 100%"
              :options="option2"
            >
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6"></a-col>
      </a-row>
    </a-form>
    <Table :columns="columns" :data="data" />
  </div>
</template>
<script>
import Table from "@/components/Table"

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Address",
    scopedSlots: { customRender: "tags" },
    dataIndex: "address",
  },
]
const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: i + 10,
    address: i + i * 10,
    id: `${i}`,
  })
}
export default {
  components: {
    Table,
  },
  data() {
    return {
      data: data,
      columns,
      current: 1,
      total: 100,
      pageSize: 10,
      selectedRowKeys: [],
      form: this.$form.createForm(this, { name: "form" }),
      option2: [
        { label: "CPU", value: "CPU" },
        { label: "云存储池", value: "云存储池" },
        { label: "物理服务器", value: "物理服务器" },
        { label: "云硬盘", value: "云硬盘" },
      ],
    }
  },
  methods: {
    handleSelectChange() {},
  },
}
</script>
<style lang="less" scoped>
.export {
  display: flex;
  justify-content: flex-end;
}
.container {
  background: #fff;
}
</style>
