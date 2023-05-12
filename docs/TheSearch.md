# TheSearch
## Basic
::: warning tips
 搜索组件
:::

 ```js
import { TheSearch } from '@components'
Vue.component(TheSearch.name, TheSearch)
 ```

```html
 <the-search v-model="params"
            :form-config="tableConfig" 
            label-width="120px"
            store-key="store-key"
            @search="pageParams.page=1,getList()"
            @reset="pageParams.page=1,getList()">
            <!-- #keyName是表头插槽 -->
         <template #keyName="{scope}" >
             <el-input v-model="scope.keyName" placeholder="请输入"></el-input>
        </template>
</the-search>
```

## TheSearch Attributes 

| 参数        | 说明                                                      | 类型   | 可选值 | 默认值                                                       |
| ----------- | --------------------------------------------------------- | ------ | ------ | ------------------------------------------------------------ |
| row         | 默认展示几行                                              | Number | -      | 2                                                            |
| formConfig  | json配置                                                  | Array  | -      |                                                              |
| labelWidth  | label的宽度，需要加上px                                   | String | -      |                                                              |
| disabledKey | 禁止修改的key的集合，因为有些默认值需要展示，但是不能修改 | Array  | -      |                                                              |
| storeKey    | 用来保存搜索值的唯一key                                   | String | -      |                                                              |
| options     | 外部传递的枚举值的对象,一般都是从接口获取                 | Object | -      | options:{list1:[{label:'',value:''}],list2:[{label:'',value:''}]} |



## TheSearch Events

| 参数   | 说明                     | 回调参数                        |
| ------ | ------------------------ | ------------------------------- |
| search | 点击搜索按钮时触发的事件 | Function(Object)                |
| reset  | 点击重置按钮时触发的事件 | Function(Object)                |
| change | 子属性触发的时候的事件   | Function(Key) 回调是变化值的key |

