<template>
  <view>
    <view class="list">

      <view class="empty" v-if="list.length==0">购物车空空如也</view>
      <view class="row" v-else v-for="(item,index) in list" :key='index'>

        <!-- del -->
        <view class="menu" @click="del(item)">
          <view class="icon iconfont">&#xe6a6;</view>
        </view>
        <!-- 商品 -->
        <view class="product" @touchstart='touchstart(index,$event)' @touchmove='touchmove(index,$event)' @touchend='touchend(index,$event)'
          :class="[theindex==index?'open':oldindex==index?'close':'']">
          <!-- checkbox -->
          <view class="container" @click="checkbox(item)">
            <view class="checkbox">
              <view :class="{'on':item.selected}"></view>
            </view>
          </view>
          <!-- 详情 -->
          <view class="goods" @click="goodsInfo(item)">
            <view class="img">
              <image :src="item.img" mode=""></image>
            </view>
            <view class="info">
              <view class=" title">{{item.name}}</view>
              <view class="spec">{{item.spec}}</view>
              <view class="number" :style="{width:'width'}">
                <view class="price">￥{{item.price}}</view>
                <count class="count" :itemInfo='item' @chang='sum'/>
              </view>

            </view>

          </view>
        </view>
      </view>
    </view>
    <!-- footer -->
    <view class="footer" :style="{bottom: footer}">
      <view class="container" @click="cancelAll">
        <view class="checkbox">
          <view :class="{'on':this.list.length>0?all:false}"></view>
        </view>
        <view class="text">
          全选
        </view>
      </view>
      <view class="del" v-if="select.length>0" @click="delAll">删除</view>
      <view class="total">
        <view class="sum">合计:<view class="money">￥{{price}}</view>
        </view>
        <view class="btn" @click="confirm">结算({{select.length}}) </view>
      </view>
    </view>
  </view>
</template>
<script>
  //数量组件
  import count from '../../../components/count.vue'
  export default {
    components: {
      count
    },
    data() {
      return {
        theindex: null, //滑动
        oldindex: null, //滑动
        list: [],
        footer: 0,
        select: [],
        all: false,
        price:'0.00',
        width:''
      }
    },
    methods: {
      // 兼容
      width(){
        //  #ifdef APP-PLUS
       width='40%'
        // #endif
      },
      //结算
      confirm(){
        if(this.select.length==0){
          uni.showToast({
            title:'请勾选相对应商品',
            icon:'none'
          })
          return

        }
        uni.setStorage({
          key:'buy',
          data:this.select,
          success: () => {
            uni.navigateTo({
              url:'../../order/buy'
            })
          }
        })
      },
      //删除选中
      delAll(){
        while (this.select.length>0){
          this.del(this.select[0])
        }
        // 初始化
        this.select=[]
        this.all=false
        this.sum()

      },

      //删除
      del(item){
        // console.log(index)
        uni.getStorage({
          key:'list',
          success:(res)=>{
            res.data.splice(res.data.indexOf(item),1)
            uni.setStorageSync('list',res.data)
          }


        })
        //更新当前数据
        this.list.splice(this.list.indexOf(item),1)
        this.select.splice(this.select.indexOf(item),1)

        this.oldindex=null
        this.theindex=null

        this.sum()
      },

      //合计
      sum(){
        this.price=0
        this.list.forEach((item,index)=>{
          if(item.selected){
            this.price=this.price+(item.number*item.price)
          }
        })
          this.price=this.price.toFixed(2)
      },
      //取消所有选择
      cancelAll(){
        this.all=!this.all
        let arr=[]
        this.list.forEach((item,index)=>{
          item.selected=this.all
          arr.push(item)
        })
        this.select=this.all?arr:[],
        this.sum()

      },
      touchstart(index, event) {
        // console.log(event)
        //不允许多点触控
        if (event.touches.length > 1) {
          return
        }


        this.oldindex = this.theindex
        // this.theindex = null
//         if(this.theindex=index){
// return        }

        this.initXY = [event.touches[0].pageX, event.touches[0].pageY]
      },
      touchmove(index, event) {
        if (event.touches.length > 1) {
          return
        }
        let moveX = event.touches[0].pageX - this.initXY[0]
        let moveY = event.touches[0].pageY - this.initXY[1]

        if(moveX>10){
          this.theindex = null
        }

        // console.log(moveX)

        //判断左滑动作过小
        if (Math.abs(moveX) < 5) {
          // console.log('yes')
          return
        }
        // 判断上下滑动
        if (Math.abs(moveY) > Math.abs(moveX)) {
          return
        }

        //判断左滑
        if (moveX < 0) {
          this.theindex = index
        } else {

        }
      },
      touchend(index, event) {
        // console.log('end')
        console.log(this.theindex)
        console.log(this.oldindex)

        // if(){

        // }
      },
      checkbox(item) {
        // console.log(item)
        item.selected = !item.selected


        let isExist = this.select.indexOf(item)
        if (isExist > -1) {
          this.select.splice(isExist, 1)
        } else {

          this.select.push(item)
        }
        // 全选
        if (this.select.length == this.list.length) {
          this.all = true
        } else {
          this.all = false
        }
        this.sum()
      },
      goodsInfo(item) {
        uni.navigateTo({
          url: '../../goods/detail?goodsInfo=' + JSON.stringify(item)
        })
      }
    },
    onShow() {
      uni.getStorage({
        key: 'list',
        success: (res) => {
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].selected = false
          }
          // console.log(res.data)
          this.list = res.data

          this.select=[]
          this.price='0.00'
          this.all=false
        }
      })
    },
    onLoad() {
      // #ifdef H5
      this.footer = document.getElementsByTagName('uni-tabbar')[0].offsetHeight + 'px'
      //#endif
    }
  }
</script>
<style lang="scss">
  .container {
    display: flex;
    align-items: center;

    .checkbox {
      width: 35upx;
      height: 35upx;
      border-radius: 100%;
      border: solid 2upx #f06c7a;
      display: flex;
      justify-content: center;
      align-items: center;

      .on {
        width: 25upx;
        height: 25upx;
        border-radius: 100%;
        background-color: #f06c7a;
      }
    }

    .text {
      font-size: 28upx;
      margin-left: 10upx;
    }
  }

  .list {
    width: 100%;
    padding: 20upx 0 120upx 0;

    .empty {
      width: 100%;
      height: 60upx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32upx;
      color: #a7a7a7;
    }

    .row {
      width: calc(92%);
      height: calc(22vw + 40upx);
      margin: 20upx auto;
      border-radius: 15upx;
      box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      z-index: 4;
      border: 0;

      .menu {
        .icon {
          color: #fff;
          font-size: 60upx;
        }

        position: absolute;
        width: 30%;
        height: 100%;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
        color: #fff;
        z-index: 2;
      }

      .product {
        @keyframes showMenu {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-30%);
          }
        }

        @keyframes closeMenu {
          0% {
            transform: translateX(-30%);
          }

          100% {
            transform: translateX(0);
          }
        }

        &.open {
          animation: showMenu 0.25s ease both;
        }

        &.close {
          animation: closeMenu 0.25s ease both;
        }

        background-color: #fff;

        .container {
          padding-left: 20upx;
          flex-shrink: 0;
          height: 22vw;
          margin-right: 20upx;
        }

        position: absolute;
        width: 100%;
        padding: 0 0;
        height: 100%;
        z-index: 3;
        display: flex;
        align-items: center;

        .goods {
          width: 100%;
          display: flex;
          // padding-right: 20upx;

          .img {
            width: 22vw;
            height: 22vw;
            border-radius: 10upx;
            overflow: hidden;
            flex-shrink: 0;
            margin-right: 10upx;

            image {
              width: 22vw;
              height: 22vw;
            }
          }

          .info {
            width: 100%;
            height: 22vw;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            position: relative;

            .title {
              width: 100%;
              font-size: 28upx;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              // text-align: justify;
              overflow: hidden;
            }

            .spec {
              font-size: 20upx;
              background-color: #f3f3f3;
              color: #a7a7a7;
              height: 30upx;
              display: flex;
              align-items: center;
              padding: 0 10upx;
              border-radius: 15upx;
              margin-bottom: 20vw;
            }

            .number {
              position: absolute;
               // #ifdef a
                // width: 45%;
               // #endif
              width: 100%;
              // right: -100upx;
              bottom: 0upx;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              font-size: 28upx;
              height: 60upx;
               .count{
                 position: absolute;
                 // top: 0;
                 width: 200upx;
                 right: 30upx;
               }


            }
          }
        }
      }
    }
  }

  .footer {
    width: 92%;
    padding: 0 4%;
    background-color: #fbfbfb;
    height: 100upx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28upx;
    position: fixed;
    bottom: 0upx;
    z-index: 5;

    .del {
      border: solid 1upx #f06c7a;
      color: #f06c7a;
      padding: 0 30upx;
      height: 50upx;
      border-radius: 30upx;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .total {
      width: 60%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .sum {
        width: 50%;
        font-size: 28upx;
        margin-right: 10upx;
        display: flex;
        justify-content: flex-end;

        .money {
          font-weight: 600;
        }
      }

      .btn {
        padding: 0 30upx;
        height: 50upx;
        background-color: #f06c7a;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 30upx;
      }
    }
  }
</style>
