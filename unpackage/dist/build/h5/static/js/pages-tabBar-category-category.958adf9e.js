(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-category-category"],{"08e0":function(t,e,i){var a=i("e519");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("922df414",a,!0,{sourceMap:!1,shadowMode:!1})},"1e8d":function(t,e,i){"use strict";var a=i("08e0"),n=i.n(a);n.a},2254:function(t,e){var i="https://uniapp-interface.herokuapp.com/",a={homeData:i+"api/profiles/mall_list",categoryData:i+"api/profiles/category",goodsList:i+"api/profiles/goodslist",detailList:i+"api/profiles/goods"};t.exports=a},"2e54":function(t,e,i){"use strict";i.r(e);var a=i("387c"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"387c":function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2254")),r=a(i("cb4e")),s={data:function(){return{list:[],currentIndex:0}},components:{"app-header":r.default},onLoad:function(){this.initData()},methods:{itemList:function(t){uni.navigateTo({url:"../../goods/goods?name=".concat(t.name)})},handle:function(t){this.currentIndex=t},initData:function(){var t=this;this.request({url:n.default.categoryData,success:function(e){console.log(e),t.list=e.data}})}}};e.default=s},4183:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"city"},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),t._v(t._s(t.city))],1),i("v-uni-view",{staticClass:"input"},[i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入商品名称","placeholder-style":"color:#c0c0c0"}}),i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")])],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")])],1)],1),i("v-uni-view",{staticClass:"place"})],1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},"5f14":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{city:"深圳"}}};e.default=a},a3ac:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("app-status"),i("app-header"),i("v-uni-view",{staticClass:"list"},[i("v-uni-scroll-view",{staticClass:"left",attrs:{"scroll-y":"true"}},t._l(t.list,(function(e,a){return i("v-uni-view",{key:e.id,staticClass:"row",class:{on:a==t.currentIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handle(a)}}},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"block"}),t._v(t._s(e.title))],1)],1)})),1),i("v-uni-scroll-view",{staticClass:"right",attrs:{"scroll-y":"true"}},t._l(t.list,(function(e,a){return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:a==t.currentIndex,expression:"index==currentIndex"}],key:e.id,staticClass:"category"},[i("v-uni-view",{staticClass:"banner"},[i("v-uni-image",{attrs:{src:e.banner}})],1),i("v-uni-view",{staticClass:"list"},t._l(e.list,(function(e,a){return i("v-uni-view",{key:e.id,staticClass:"box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.itemList(e)}}},[i("v-uni-image",{attrs:{src:"/static/img/category/list/"+e.img}}),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.name))])],1)})),1)],1)})),1)],1)],1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},a445:function(t,e,i){"use strict";var a=i("fa73"),n=i.n(a);n.a},cb4e:function(t,e,i){"use strict";i.r(e);var a=i("4183"),n=i("de7f");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("a445");var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"571eab52",null,!1,a["a"],s);e["default"]=o.exports},de7f:function(t,e,i){"use strict";i.r(e);var a=i("5f14"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},e519:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.list[data-v-57698cca]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex}.list .left[data-v-57698cca]{width:24%;background-color:#f2f2f2}.list .left .row[data-v-57698cca]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list .left .row .text[data-v-57698cca]{width:100%;position:relative;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#3c3c3c}.list .left .row .text .block[data-v-57698cca]{position:absolute;width:%?0?%;left:0}.list .left .row.on[data-v-57698cca]{height:%?100?%;background-color:#fff}.list .left .row.on .text[data-v-57698cca]{font-size:%?30?%;font-weight:600;color:#2d2d2d}.list .left .row.on .text .block[data-v-57698cca]{width:%?10?%;height:80%;top:10%;background-color:#f06c7a}.list .right[data-v-57698cca]{position:absolute;width:76%;left:24%}.list .right .category[data-v-57698cca]{width:94%;padding:%?20?% 3%}.list .right .category .banner[data-v-57698cca]{width:100%;height:28vw;border-radius:%?10?%;overflow:hidden;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.3)}.list .right .category .banner uni-image[data-v-57698cca]{width:100%;height:100%}.list .right .category .list[data-v-57698cca]{margin-top:%?40?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .right .category .list .box[data-v-57698cca]{width:calc(71.44vw / 3);margin-bottom:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .right .category .list .box uni-image[data-v-57698cca]{width:60%;height:calc(71.44vw / 3 * .6)}.list .right .category .list .box .text[data-v-57698cca]{margin-top:%?5?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%}',""]),t.exports=e},edb0:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.header[data-v-571eab52]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;z-index:10;background-color:#fff;top:0}.header .city[data-v-571eab52]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.header .city .icon[data-v-571eab52]{height:%?60?%;margin-right:%?5?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%;color:#ffc50a}.header .input[data-v-571eab52]{width:100%;height:%?60?%;background-color:#f5f5f5;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header .input .icon[data-v-571eab52]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.header .input uni-input[data-v-571eab52]{padding-left:%?28?%;height:%?28?%;font-size:%?28?%}.header .info[data-v-571eab52]{width:%?60?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .info .icon[data-v-571eab52]{width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%}.place[data-v-571eab52]{background-color:#fff;height:%?100?%}',""]),t.exports=e},f56b:function(t,e,i){"use strict";i.r(e);var a=i("a3ac"),n=i("2e54");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("1e8d");var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"57698cca",null,!1,a["a"],s);e["default"]=o.exports},fa73:function(t,e,i){var a=i("edb0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e70e05ca",a,!0,{sourceMap:!1,shadowMode:!1})}}]);