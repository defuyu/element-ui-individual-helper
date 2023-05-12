# TableColumn

## Basic

::: warning tips
 用于在el-table中处理枚举值使用组件
:::

 ```js
import { TableColumn } from '@components'
Vue.component(TableColumn.name, TableColumn)
 ```

```html
   <el-table class="mb20" :data="workflowNodeInfoList"  style="width: 100%">
        <table-column prop="nodeName" label="节点" :enu-key="'DATA_STATUS_OPEN_BANK_ACCOUNT'"></table-column>
        <table-column prop="nodeName" label="节点" :options=""></table-column>
        <table-column prop="nodeName" label="金额" is-money></table-column>
        <table-column prop="nodeName" label="账号" is-account></table-column>
        <el-table-column prop="createTime" label="" show-overflow-tooltip></el-table-column>
        <el-table-column prop="remark" label="备注" show-overflow-tooltip></el-table-column>
    </el-table>
```


## TableColumn Attributes 

| 参数            | 说明                                                         | 类型                                    | 可选值                         | 默认值 |
| --------------- | ------------------------------------------------------------ | --------------------------------------- | ------------------------------ | ------ |
| label           | 展示的标签名                                                 | Number，String                          |                                |        |
| prop            | 属性名                                                       | Number，String                          |                                |        |
| enuKey          | prop的在统一枚举值里面的枚举key （isAcc属性仅仅供账务系统使用） | Array                                   |                                |        |
| isMoeny         | 格式化金额使用                                               | Boolean                                 |                                | false  |
| moneyPrefix     | 金额前缀                                                     | String                                  |                                |        |
| isAccount       | 格式化银行账户号使用                                         | Boolean                                 |                                | false  |
| isHiddenAccount | 格式化银行账户号使用，加上***                                | Boolean                                 |                                | false  |
| options         | 如果item的值是一个枚举值。枚举值没有在统一接口返回，需要自定义枚举值列表。[{label:'',value:''}] | Array                                   |                                | []     |
| emptyStr        | 空字符串占位，该属性优先级大于TheBasicTable提供emptyStr属性  | String                                  |                                | ""     |
| formatter       | 用来格式化内容                                               | Function(row, column, cellValue, index) |                                |        |
| type            | 特定类型用于格式化值                                         | String                                  | date/dateTime/percentage/money |        |
| use             | 对标e l-table-column的type属性下的列的类型                   | String                                  | indexColumn/expendColumn       |        |

