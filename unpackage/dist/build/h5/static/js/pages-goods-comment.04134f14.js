(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-comment"],{"1f42":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{isshow:!0,videoContext:null,videoSrc:"",commentList:[],labelList:[{name:"全部",number:25,type:"all"},{name:"好评",number:23,type:"good"},{name:"中评",number:1,type:"secondary"},{name:"差评",number:1,type:"poor"},{name:"有图",number:12,type:"img"},{name:"视频",number:2,type:"video"},{name:"追加",number:2,type:"append"}],currentIndex:0}},onReady:function(){this.videoContext=uni.createVideoContext("video"),console.log(this.videoContext)},methods:{change:function(t){this.currentIndex=t},showBigImg:function(t,i){uni.previewImage({current:t,urls:i})},play:function(t){var i=this;console.log(t),this.videoSrc=t,this.$nextTick((function(){i.videoContext.requestFullScreen({direction:0})}))},control:function(t){console.log(t),t.detail.fullScreen||this.videoContext.pause()}},onLoad:function(){try{var t=uni.getStorageSync("comment");t&&(this.commentList=t,console.log(this.commentList))}catch(i){console.log(i)}}};i.default=n},2383:function(t,i,e){var n=e("9ecd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("5ab08cdd",n,!0,{sourceMap:!1,shadowMode:!1})},"4c7f":function(t,i,e){"use strict";e.r(i);var n=e("1f42"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},9339:function(t,i,e){"use strict";e.r(i);var n=e("ba17"),a=e("4c7f");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("a40c");var s,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"5897c092",null,!1,n["a"],s);i["default"]=c.exports},"9ecd":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-5897c092]{width:94%;padding:0 3%}.content uni-view[data-v-5897c092]{display:-webkit-box;display:-webkit-flex;display:flex}.content .label[data-v-5897c092]{width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.content .label uni-view[data-v-5897c092]{padding:0 %?20?%;height:%?50?%;border-radius:%?40?%;border:solid %?1?% #ddd;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#555;font-size:%?26?%;background-color:#f9f9f9;margin:%?10?% %?20?% %?10?% 0}.content .label uni-view.on[data-v-5897c092]{border:solid %?1?% #f06c7a;color:#f06c7a}.list[data-v-5897c092]{width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.list .rating[data-v-5897c092]{width:100%;margin-top:%?30?%}.list .rating .left[data-v-5897c092]{width:10vw;-webkit-flex-shrink:0;flex-shrink:0;margin-right:%?10?%}.list .rating .left .face[data-v-5897c092]{width:100%}.list .rating .left .face uni-image[data-v-5897c092]{width:10vw;height:10vw;border-radius:100%}.list .rating .right[data-v-5897c092]{width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .rating .right .date[data-v-5897c092]{width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}.list .rating .right .date .username[data-v-5897c092]{font-size:%?32?%;color:#555}.list .rating .right .date .datenow[data-v-5897c092]{font-size:%?28?%;color:#aaa}.list .rating .right .spec[data-v-5897c092]{width:100%;color:#aaa;font-size:%?26?%}.list .rating .right .media[data-v-5897c092]{width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .rating .right .media .content[data-v-5897c092]{font-size:%?30?%}.list .rating .right .media .video[data-v-5897c092]{width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .rating .right .media .video .box[data-v-5897c092]{width:calc((84.6vw - %?50?%)/4);height:calc((84.6vw - %?50?%)/4);margin:%?5?% %?5?%;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list .rating .right .media .video .box uni-image[data-v-5897c092]{position:absolute;width:100%;height:100%;border-radius:%?10?%}.list .rating .right .media .video .box .playbtn[data-v-5897c092]{position:absolute}.list .rating .right .media .video .box .playbtn .icon[data-v-5897c092]{font-size:%?80?%;color:hsla(0,0%,100%,.9)}#video[data-v-5897c092]{position:fixed;top:50%;right:100%}',""]),t.exports=i},a40c:function(t,i,e){"use strict";var n=e("2383"),a=e.n(n);a.a},ba17:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-video",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{id:"video",src:t.videoSrc,autoplay:!0},on:{fullscreenchange:function(i){arguments[0]=i=t.$handleEvent(i),t.control.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"label"},t._l(t.labelList,(function(i,n){return e("v-uni-view",{key:n,class:{on:n==t.currentIndex},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.change(n)}}},[t._v(t._s(i.name)+"("+t._s(i.number)+")")])})),1),e("v-uni-view",{staticClass:"list"},t._l(t.commentList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"rating"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"face"},[e("v-uni-image",{attrs:{src:i.face,mode:""}})],1)],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"date"},[e("v-uni-view",{staticClass:"username"},[t._v(t._s(i.username))]),e("v-uni-view",{staticClass:"datenow"},[t._v("2020-8-23")])],1),e("v-uni-view",{staticClass:"spec"},[t._v(t._s(i.spec))]),e("v-uni-view",{staticClass:"media"},[e("v-uni-view",{staticClass:"content"},[t._v(t._s(i.content))]),e("v-uni-view",{staticClass:"video"},[t._l(i.video,(function(i){return e("v-uni-view",{key:i.path,staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.play(i.path)}}},[e("v-uni-image",{attrs:{src:i.img,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"playbtn"},[e("v-uni-view",{staticClass:"icon iconfont"},[t._v("")])],1)],1)})),t._l(i.img,(function(n,a){return e("v-uni-view",{key:a,staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showBigImg(n,i.img)}}},[e("v-uni-image",{attrs:{src:n,mode:"aspectFill"}})],1)}))],2)],1)],1)],1)})),1)],1)],1)},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}))}}]);