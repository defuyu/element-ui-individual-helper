# TheBasicTable

## Basic 

::: warning tips
 搜索组件，可用于不对接动态表头的场景，或者选项比较少的情况，通常与table-column组件一起使用
 :::


  ```js
 // 在大运营平台下，子项目引入公共组件方式
import { TheBasicTable,TableColumn} from '@components'

Vue.component(TheBasicTable.name, TheBasicTable)
Vue.component(TableColumn.name, TableColumn)
...
  ```

```html
   <the-basic-table class="mb20" :data="workflowNodeInfoList"  style="width: 100%">
        <table-column prop="nodeName" label="节点" :enu-key="'DATA_STATUS_OPEN_BANK_ACCOUNT'"></table-column>
        <table-column prop="nodeName" label="节点" :options=""></table-column>
        <table-column prop="nodeName" label="金额" is-money></table-column>
        <table-column prop="nodeName" label="账号" is-account></table-column>
        <el-table-column prop="createTime" label="" show-overflow-tooltip></el-table-column>
        <el-table-column prop="remark" label="备注" show-overflow-tooltip></el-table-column>
    </the-basic-table>
```

## TheBasicTable Attributes 

| 参数              | 说明                                                         | 类型    | 可选值 | 默认值                     |
| ----------------- | ------------------------------------------------------------ | ------- | ------ | -------------------------- |
| havePagination    | 是否展示分页组件                                             | Boolean |        |                            |
| pagination        | 展示分页组件时必传，total为列表当前页总个数。当页面改变时，会动态改变page和size的值，因此需要以:pagination.async的方式使用 | Object  |        | {page:1,size:10, total: 0} |
| paginationAttrs   | e l-pagination组件的拓展属性                                 |         |        |                            |
| emptyStr          | 给table-column的provider，空字符串占位                       | String  |        | ""                         |
| isLoading         | 表格局部更新的控制属性                                       | Boolean |        | false                      |
| haveIndex         | 是否有序号列                                                 | Boolean |        | true                       |
| indexColProps     | 序号列el-table-column的拓展属性                              | Object  |        |                            |
| ...el-table的属性 |                                                              |         |        |                            |

## TheBasicTable Events

| 参数              | 说明                                                         | 回调参数                                    |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------- |
| pageChange        | 当el-pagination的size-change、current-change事件触发时的回调 | 变化后的pagination属性，{page, size, total} |
| ...el-table的事件 |                                                              |                                             |

