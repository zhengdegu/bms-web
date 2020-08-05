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
      <el-table-column type="index" width="150" />
      <el-table-column label="服务" prop="name" />
      <el-table-column label="时间" prop="date" />
      <el-table-column label="地址" prop="uri" />
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.enabled"
            active-color="#F56C6C"
            inactive-color="#409EFF"
            @change="changeEnabled(scope.row, scope.row.enabled)"
          />
        </template>
      </el-table-column>
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
      :total="4"
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
        name: 'grafana',
        uri: 'http://10.1.2.4:3000',
        status: false
      }, {
        date: '2020-07-23',
        name: 'spring-admin',
        uri: 'http://10.1.2.6:20011',
        status: false
      }, {
        date: '2020-07-23',
        name: 'kibana',
        uri: 'http://10.1.1.7:5602',
        status: false
      }, {
        date: '2020-07-23',
        name: 'nacos',
        uri: 'http://10.1.2.4:8848/nacos',
        status: false
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
      window.open(row.uri, '_blank')
    },
    onSubmit() {
    },
    handleSizeChange(val) {
    },
    handleCurrentChange(val) {
    },
    // 改变状态
    changeEnabled(data, val) {
    }
  }
}
</script>

