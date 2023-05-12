# TheTable

## Basic
::: warning tips
 表格组件，
:::


 ```js
import { TheTable,TheTableSet } from '@components'
import { getConfig } from '@utils'


// TheTableSet 是用来做表头设置的
Vue.component(TheTable.name, TheTable)
Vue.component(TheTableSet.name, TheTableSet)


//getConfig是用来获取tableConfig的配置数据的
// 当使用set插槽的时候不用手动调用getConfig方法，
getConfig(configKey).then(res=>{
    console.log(res.data)
})
 ```

```html
<the-table :columns="tableConfig"
           :table-data="tableData"
            need-select
            :pages.sync="pageParams"
            btn-width="100"
            store-key="store-key"
            :selectable="selectableFun"
            :page-fix="false"
            @pageChange="getList">

        <!-- #selectHandler用来放表格操作按钮的 插槽 -->
        <template #selectHandler="{rows,keys}">
            <el-row class="mb10">
                <el-button type="blue" size="medium" icon="el-icon-circle-plus-outline" @click="addItem">新增</el-button>
            </el-row>
        </template>

        <!-- #handler表格最后面操作按钮的插槽 -->
        <template #handler="{scope,index}">
            <el-button v-rights="'agentBankManage-whiteList-delete'" type="danger" plain @click="deleteItem(scope)">删除</el-button>
        </template>

        
        <!-- #set 表头设置的插槽 -->
        <template #set="{scope,index}">
              <the-table-set :personal-config.sync="tableConfig" :field-scene="configKey" :config-key="configKey"></the-table-set>
        </template>

        <!-- #dataStatus是表头插槽 -->
         <template #dataStatus="{scope}" >
             <el-input v-model="scope.dataStatus" placeholder="请输入"></el-input>
        </template>
</the-table>
```


## TheTable Attributes 

| 参数             | 说明                                                         | 类型     | 可选值 | 默认值                                                       |
| ---------------- | ------------------------------------------------------------ | -------- | ------ | ------------------------------------------------------------ |
| columns          | table的json配置                                              | Array    |        |                                                              |
| pages            | 分页参数暴露的对象 ，需要配合.sync使用                       | Object   |        | pageParams: {page: 1,size: 10,total: 0}                      |
| tableData        | table的数据                                                  | Array    |        |                                                              |
| btnWidth         | 最后操作按钮的宽度                                           | String   |        | 120px                                                        |
| reserveSelection | 是否需要记住分页的勾选                                       | Boolean  |        | true                                                         |
| selectkey        | 默认是id，配合needSelect使用                                 | Boolean  |        | id                                                           |
| needSelect       | 是否需要多选                                                 | Boolean  |        | true                                                         |
| needSingleSelect | 是否需要单选                                                 | Boolean  |        | false                                                        |
| selectable       | Function 的返回值用来决定这一行的 CheckBox 是否可以勾选。仅对 type=selection 的列有效，使用方法同el-table的selectable | Function |        |                                                              |
| hasPage          | 是否需要显示分页                                             | Boolean  |        | True                                                         |
| pageFix          | 分页是否需要固定在页面底部                                   | Boolean  |        | true                                                         |
| options          | 外部传递的枚举值的对象,一般都是从接口获取                    | Object   |        | options:{key1:[{label:'',value:''}],key2:[{label:'',value:''}]} |
| storeKey         | 用来保存搜索值的唯一key                                      | String   |        |                                                              |
| @pageChange      | page，size变化的时候触发的事件                               | Function |        |                                                              |

## TheTable Methods

| 参数    | 说明                      | 类型             |
| ------- | ------------------------- | ---------------- |
| getKeys | 获取勾选的项目的key值集合 | Function(Object) |
| getRows | 获取勾选的项目的rows集合  | Function(Object) |

## TheTable Scoped Slot

| 参数          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| selectHandler | 表格头部作用域插槽，可获取到多选的keys，和rows，keys是selectkey的集合数组，rows是整个行的数据的集合数组 |
| handler       | 尾部操作栏作用域插槽 。固定在右侧 ，可以获取到该行的 scope值和index的值 |
