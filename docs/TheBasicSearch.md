# TheBasicSearch

## Basic

 ::: warning tips
 搜索组件，可用于不对接动态表头的场景，或者选项比较少的情况
 :::

 ```js
 // 在大运营平台下，子项目引入公共组件方式
import { TheBasicSearch, SearchItem} from '@components'

Vue.component(TheBasicSearch.name, TheBasicSearch)
Vue.component(SearchItem.name, SearchItem)
...
 ```

```html
<the-basic-search v-model="params" label-width="145px" @search="searchFun" @reset="resetFun"  store-key="store-key">
    <search-item label="文本输入必填" prop="text" required></search-item>
    <search-item label="文本输入禁用" prop="text" disabled></search-item>
    <search-item label="单选下拉框" prop="selectVal" type="select" enu-key="reversalAdjustStatus" is-acc></search-item>
    <search-item label="接口获取的枚举" prop="selectVal2" type="select" :options="hahoptions"></search-item>
    <search-item label="多选下拉框" prop="multipleSelectVal" type="select" enu-key="ADJUST_INTEREST_TYPE" multiple></search-item>
    <search-item label="数字" prop="number" type="number"></search-item>
    <search-item label="cascader" prop="aaa" type="cascader" :options="arr"></search-item>
    <search-item label="日期" prop="date" type="date"></search-item>
    <search-item label="日期区间" prop="applyDate" type="daterange" :range-key="['applyStartDate', 'applyEndDate']"></search-item>
    <search-item label="时间区间" prop="applyTimes" type="datetimerange" :range-key="['applyStartTime', 'applyEndTime']"></search-item>
    <search-item label="数字区间" type="numberRange" :range-key="['startNum', 'endNum']" ></search-item>
</the-basic-search>
```

## TheBasicSearch Attributes 

| 参数       | 说明                                                         | 类型   | 可选值 | 默认值 |
| ---------- | ------------------------------------------------------------ | ------ | ------ | ------ |
| params     | SearchItem的值会根据类型自己去初始化，也可以写初始化的默认值，如param:{name:'troye'} | Object |        | {}     |
| labelWidth | 宽度                                                         | String |        | 120px  |
| storeKey   | 用来保存搜索值的唯一key                                      | String |        |        |


## TheBasicSearch Methods

| 参数   | 说明                                                         | 类型             |
| ------ | ------------------------------------------------------------ | ---------------- |
| search | 点击搜索按钮时触发的事件                                     | Function(Object) |
| reset  | 点击重置按钮时触发的事件，不需要写重置params的代码，组件内部已经处理，如果需要触发其他事件时才需要写 | Function()       |

