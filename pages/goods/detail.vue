<template>
  <view class="">
    <!-- 状态遮罩 -->
    <app-status />
    <detailHeader />
    <!-- swiper -->
    <view class="swiper">
      <swiper @change="swiperchange" indicator-dots="true" autoplay="true" :interval="3000" :duration="1000" circular="true">
        <swiper-item v-for="item in itemData.swiperList" :key='item.id'>
          <image :src="item.img" mode=""></image>
        </swiper-item>

      </swiper>
      <view class="indicator">
        {{currentIndex+1}}/{{itemData.swiperList.length}}
      </view>
    </view>
    <!-- title&price -->
    <view class="detail-info box">
      <view class="price" >￥{{itemInfo.price}}</view>
      <view class="title">{{itemInfo.name}}</view>
    </view>
    <!-- specifications -->
    <view class="box ">
      <view class="row" @click="isShow=true">
        <view class="text">选择</view>
        <view class="content">
          <view>选择规格:</view>
          <view class="sp">
            <view :class="{'on':item==itemInfo.spec}" v-for="(item,index) in itemData.spec" :key=' index'>
              {{item }}
            </view>
          </view>
        </view>
        <view class="arrow">
          <view class="icon iconfont">&#xe6a3;</view>
        </view>
      </view>
    </view>
    <!-- 模态框 -->
    <modal @setitem='setitem' @hide='hide' :itemData='itemData' :itemInfo='itemInfo' :isShow='isShow' />
    <!-- comment -->
    <view class="box comment">
      <view class="row">
        <view class="text">商品评价({{itemData.comment.length}})</view>
        <view class="arrow" @click="allcomment">
          <view class="show">
            查看全部
            <view class="icon iconfont">&#xe6a3;</view>
          </view>

        </view>
      </view>
      <view class="comment">
        <view class="user-info">
          <view class="face">
            <image :src="itemData.comment[0].face"></image>
          </view>
          <view class="username">{{itemData.comment[0].username}}</view>
        </view>
        <view class="content">
          {{itemData.comment[0].content}}
        </view>
      </view>
    </view>
    <!-- 商品详情 -->
    <view class="des">
      <view class="title">商品详情</view>
      <view class="content">
        <rich-text :nodes="itemData.descriptionStr"></rich-text>
      </view>
    </view>
    <!-- footer -->
    <view class="footer">
      <view class="icons">
        <view class="box">
          <view class="icon iconfont">&#xe7e0;</view>
          <view class="text">
            分享
          </view>

        </view>
        <view class="box" @click="keep">
         	<view class="icon iconfont" v-if="isKeep">&#xe64b;</view>
          <view class="icon iconfont" v-else>&#xe64c;</view>
          <view class="text">{{isKeep?"已":''}}收藏</view>
        </view>
      </view>
      <view class="btn">
        <view class="cart" @click="cart">
          加入购物车
        </view>
        <view class="buy" @click="buy">
          立即购买
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  //头部返回
  import detailHeader from './detailHeader.vue'
  //封装网络请求
  import interfaces from '../../utils/network.js'
  // 模态框
  import modal from '../../components/Modal.vue'
  export default {
    components: {
      detailHeader,
      modal
    },
    data() {
      return {
        isKeep:false,
        itemData: {
          swiperList: [],
          comment: [{
            face: "",
            content: "",
            username: ""
          }]

        },
        itemInfo: {
          name: '',
          price: '',
          number: 1,
          spec: ''
        },
        currentIndex: 0,
        isShow: false
      }
    },
    onLoad(options) {
      // console.log(JSON.parse(options.goodsInfo))
      this.itemInfo = JSON.parse(options.goodsInfo)
      this.initData()
    },
    methods: {
      setitem(item){
        this.itemInfo.spec=item
      },
      buy(){
        let list=[]
        list.push(this.itemInfo)
        uni.setStorage({
          key:'buy',
          data:list,
          success: () => {
            uni.navigateTo({
              url:'../order/buy'
            })
          }
        })
      },
      cart(){
        console.log(this.itemInfo)
        //本地存储
        uni.getStorage({
          key:'list',
          success:(res)=>{
            // console.log('成功')
            // console.log(res.data)
            // 遍历存储中的数据 比对数据
            let isExist=false
            res.data.forEach((item)=>{
              if(item.goods_id==this.itemInfo.goods_id &&item.spec==this.itemInfo.spec) {
                //已有相同商品id 及 规格 将增加商品的数量
                item.number+=this.itemInfo.number
                isExist=true
              }
            })
            if(!isExist){
              res.data.push(this.itemInfo)
              this.setList(res.data)
            }
          },
          fail: (err) => {
             console.log('失败')
            let list=[]
            list.push(this.itemInfo)
            // 存储数据
            this.setList(list)
          }
        })
      },
      setList(list){
        uni.setStorage({
          key:'list',
          data:list,
          success: (res) => {
            uni.showToast({
              icon:'success,',
              title:'添加购物车成功'
            })
          }
        })
      },
      keep(){
        this.isKeep=!this.isKeep
        if(this.isKeep){
          uni.showToast({
            icon:'success',
            title:'收藏成功'
          })
        }
      },
      allcomment() {
        console.log(222)
        uni.setStorage({
          key: 'comment',
          data: this.itemData.comment
        })
        uni.navigateTo({
          url: "./comment"
        })
      },
      hide() {
        this.isShow = false
      },
      swiperchange(e) {
        // console.log(e)
        this.currentIndex = e.detail.current
      },
      initData() {
        this.request({
          url: interfaces.detailList,
          success: (res) => {
            // console.log(res.data)
            this.itemData = res.data
            console.log(this.itemData)
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .status {
    /*  #ifdef  APP-PLUS  */
    opacity: 0;
    /* #endif */
  }

  .swiper {
    position: relative;
    width: 100%;
    height: 100vw;

    swiper {
      width: 100%;
      height: 100vw;

      swiper-item {
        image {
          width: 100%;
          height: 100vw;
        }
      }
    }

    .indicator {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 25upx;
      height: 40upx;
      border-radius: 40upx;
      font-size: 22upx;
      position: absolute;
      bottom: 20upx;
      right: 20upx;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .box {
    width: 92%;
    padding: 20upx 4%;
    background-color: #fff;
    margin-bottom: 20upx;
  }

  .detail-info {
    .price {
      font-size: 46upx;
      font-weight: 600;
      color: #f47925;
    }

    .title {
      font-size: 30upx;
    }
  }

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 0 30upx 0;

    .text {
      font-size: 28upx;
      color: #a2a2a2;
      margin-right: 20upx;
    }

    .content {
      font-size: 28upx;
      display: flex;
      flex-wrap: wrap;

      .serviceitem {
        margin-right: 10upx;
      }

      .sp {
        width: 100%;
        display: flex;

        view {
          background-color: #f6f6f6;
          padding: 15upx;
          color: #999;
          margin-right: 10upx;
          font-size: 20upx;
          border-radius: 5upx;

          &.on {
            border: solid 1upx #f47952;
            // padding: 4upx 8upx;
          }
        }
      }
    }

    .arrow {
      position: absolute;
      right: 4%;

      .icon {
        color: #ccc;
      }
    }
  }

  .comment {
    .row {
      width: 100%;
      height: 40upx;
      display: flex;
      align-items: center;
      margin: 0 0 30upx 0;

      .text {
        font-size: 30upx;
      }

      .arrow {
        font-size: 28upx;
        position: absolute;
        right: 4%;
        color: #17e6a1;

        .show {
          display: flex;
          align-items: center;

          .icon {
            color: #17e6a1;
          }
        }
      }
    }

    .comment {
      width: 100%;

      .user-info {
        width: 100%;
        height: 40upx;
        display: flex;
        align-items: center;
        // justify-content: center;
        // flex-direction: column;

        .face {
          width: 40upx;
          height: 40upx;
          margin-right: 8upx;

          image {
            width: 40upx;
            height: 40upx;
            border-radius: 100%;
          }
        }

        .username {
          font-size: 24upx;
          color: #999;
        }
      }

      .content {
        margin-top: 10upx;
        font-size: 26upx;
      }
    }
  }

  .des {
    .title {
      width: 100%;
      height: 80upx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 26upx;
      color: #999;
    }
  }

  .footer {
  		position: fixed;
  		bottom: 0upx;
  		width: 92%;
  		padding: 0 4%;
  		height: 99upx;
  		border-top: solid 1upx #eee;
  		background-color: #fff;
  		z-index: 2;
  		display: flex;
  		justify-content: space-between;
  		align-items: center;

  		.icons {
  			display: flex;
  			height: 99upx;
  			margin-left: -4%;

  			.box {
  				width: 80upx;
  				height: 80upx;
  				display: flex;
  				justify-content: center;
  				flex-wrap: wrap;

  				.icon {
  					font-size: 40upx;
  					color: #828282;
  				}

  				.text {
  					display: flex;
  					justify-content: center;
  					width: 100%;
  					font-size: 22upx;
  					color: #666;
  				}
  			}
  		}

  		.btn {
  			height: 80upx;
  			border-radius: 40upx;
  			overflow: hidden;
  			display: flex;
  			margin-right: -2%;

  			.cart,
  			.buy {
  				height: 80upx;
  				padding: 0 40upx;
  				color: #fff;
  				display: flex;
  				align-items: center;
  				font-size: 28upx;
  			}

  			.cart {
  				background-color: #f0b46c;
  			}

  			.buy {
  				background-color: #f06c7a;
  			}
  		}
  	}

</style>
