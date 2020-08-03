<template>
  <div class="app-container">
    <div class="head-container">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="服务">
          <el-input v-model="formInline.user" placeholder="服务" />
        </el-form-item>
        <el-form-item>
          <el-button class="filter-item" icon="el-icon-search" size="mini" type="success" @click="onSubmit">搜索
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData"
    >
      <el-table-column
        type="index"
        width="150"
      />
      <el-table-column
        label="服务"
        prop="name"
      />
      <el-table-column
        label="时间"
        prop="date"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="click(scope.$index, scope.row)"
          >查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page.sync="currentPage1"
      :page-size="10"
      :total="3"
      layout="total, prev, pager, next"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script>

export default {
  name: 'Server',
  data() {
    return {
      tableData: [{
        date: '2020-07-23',
        name: 'grafana'
      }, {
        date: '2020-07-23',
        name: 'spring-admin'
      }, {
        date: '2020-07-23',
        name: 'kibana'
      }
      ],
      formInline: {
        user: ''
      },
      currentPage1: 5
    }
  },
  methods: {
    click(index, row) {
      if (row.name === 'grafana') {
        window.open('http://10.1.2.4:3000', '_blank')
      } else if (row.name === 'spring-admin') {
        window.open('http://10.1.2.6:20011', '_blank')
      } else if (row.name === 'kibana') {

      }
    },
    onSubmit() {
    },
    handleSizeChange(val) {
    },
    handleCurrentChange(val) {
    }
  }
}
</script>

