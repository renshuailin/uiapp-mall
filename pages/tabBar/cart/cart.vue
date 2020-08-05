<template>
  <view>
    <view class="list">
      <view class="empty" v-if="list.length==0">购物车空空如也</view>
      <view class="row" v-else v-for="(item,index) in list" :key='index'>
        <!-- 商品 -->
        <view class="product">
          <!-- checkbox -->
          <view class="container">
            <view class="checkbox">
              <view class=""></view>
            </view>
          </view>
          <!-- 详情 -->
          <view class="goods">
            <view class="img">
              <image :src="item.img" mode=""></image>
            </view>
            <view class="info">
              <view class=" title">{{item.name}}</view>
              <view class="spec">{{item.spec}}</view>
              <view class="number">
                <view class="price">￥{{item.price}}</view>

              </view>

            </view>

          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        list: []
      }
    },
    onShow() {
      uni.getStorage({
        key: 'list',
        success: (res) => {
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].selected = false
          }
          console.log(res.data)
          this.list = res.data
        }
      })
    }
  }
</script>
<style lang="scss">
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
          animation: showMenu 0.25s linear both;
        }

        &.close {
          animation: closeMenu 0.15s linear both;
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
          padding-right: 20upx;

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
              width: 100%;
              bottom: 0upx;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              font-size: 28upx;
              height: 60upx;

              .price {}

            }
          }
        }
      }
    }
  }
</style>
