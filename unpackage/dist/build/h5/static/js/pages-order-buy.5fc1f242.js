(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-buy"],{"2c6f":function(t,i,e){"use strict";var n=e("f154"),a=e.n(n);a.a},"58c1":function(t,i,e){"use strict";e.r(i);var n=e("5ad1"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"5ad1":function(t,i,e){"use strict";e("b680"),e("acd8"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{buyList:[],price:0,totalPrice:0,delivery:12}},filters:{toFixed:function(t){return parseFloat(t).toFixed(2)}},onBackPress:function(){this.clear()},methods:{clear:function(){var t=this;uni.removeStorage({key:"buy",success:function(){t.buyList=[]}})}},onShow:function(){var t=this;uni.getStorage({key:"buy",success:function(i){t.buyList=i.data;for(var e=0;e<t.buyList.length;e++)t.price=t.price+t.buyList[e].number*t.buyList[e].price;t.totalPrice=t.price+t.delivery}})}};i.default=n},9319:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.buy-list[data-v-0275d56c]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%}.buy-list .row[data-v-0275d56c]{margin:%?30?% 0}.buy-list .row .goods-info[data-v-0275d56c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.buy-list .row .goods-info .img[data-v-0275d56c]{width:22vw;height:22vw;border-radius:%?10?%;overflow:hidden;-webkit-flex-shrink:0;flex-shrink:0;margin-right:%?10?%}.buy-list .row .goods-info .img uni-image[data-v-0275d56c]{width:22vw;height:22vw}.buy-list .row .goods-info .info[data-v-0275d56c]{width:100%;height:22vw;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;position:relative}.buy-list .row .goods-info .info .title[data-v-0275d56c]{width:100%;font-size:%?28?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.buy-list .row .goods-info .info .spec[data-v-0275d56c]{font-size:%?22?%;background-color:#f3f3f3;color:#a7a7a7;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?10?%;border-radius:%?20?%;margin-bottom:20vw}.buy-list .row .goods-info .info .price-number[data-v-0275d56c]{position:absolute;width:100%;bottom:%?0?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;font-size:%?28?%;height:%?40?%}.buy-list .row .goods-info .info .price-number .price[data-v-0275d56c]{color:#f06c7a}.buy-list .row .goods-info .info .price-number .number[data-v-0275d56c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.detail[data-v-0275d56c]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%}.detail .row[data-v-0275d56c]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.detail .row .amount[data-v-0275d56c]{font-size:%?28?%}.detail .row .content[data-v-0275d56c]{font-size:%?26?%;color:#f06c7a}.position[data-v-0275d56c]{width:100%;height:%?100?%}.footer[data-v-0275d56c]{width:92%;padding:0 4%;background-color:#fbfbfb;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;position:fixed;bottom:%?0?%;z-index:5}.footer .settlement[data-v-0275d56c]{width:80%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.footer .settlement .sum[data-v-0275d56c]{width:50%;font-size:%?28?%;margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.footer .settlement .sum .money[data-v-0275d56c]{font-weight:600}.footer .settlement .btn[data-v-0275d56c]{padding:0 %?30?%;height:%?60?%;background-color:#f06c7a;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;border-radius:%?40?%}',""]),t.exports=i},abd1:function(t,i,e){"use strict";e.r(i);var n=e("dc68"),a=e("58c1");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("2c6f");var o,r=e("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"0275d56c",null,!1,n["a"],o);i["default"]=c.exports},dc68:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"buy-list"},t._l(t.buyList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"row"},[e("v-uni-view",{staticClass:"goods-info"},[e("v-uni-view",{staticClass:"img"},[e("v-uni-image",{attrs:{src:i.img}})],1),e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"spec"},[t._v("选择: "+t._s(i.spec)+" 数量: "+t._s(i.number))]),e("v-uni-view",{staticClass:"price-number"},[e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(i.price*i.number))])],1)],1)],1)],1)})),1),e("v-uni-view",{staticClass:"detail"},[e("v-uni-view",{staticClass:"row"},[e("v-uni-view",{staticClass:"amount"},[t._v("商品金额")]),e("v-uni-view",{staticClass:"content"},[t._v("￥"+t._s(t._f("toFixed")(t.price)))])],1),e("v-uni-view",{staticClass:"row"},[e("v-uni-view",{staticClass:"amount"},[t._v("运费")]),e("v-uni-view",{staticClass:"content"},[t._v("￥"+t._s(t._f("toFixed")(t.delivery)))])],1)],1),e("v-uni-view",{staticClass:"footer"},[e("v-uni-view",{staticClass:"settlement"},[e("v-uni-view",{staticClass:"sum"},[t._v("合计:"),e("v-uni-view",{staticClass:"money"},[t._v("￥"+t._s(t._f("toFixed")(t.totalPrice)))])],1),e("v-uni-view",{staticClass:"btn"},[t._v("提交订单")])],1)],1)],1)},s=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}))},f154:function(t,i,e){var n=e("9319");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("7687caa8",n,!0,{sourceMap:!1,shadowMode:!1})}}]);