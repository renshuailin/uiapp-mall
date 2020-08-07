<template>
  <view>
    <!-- 商品列表 -->
    <view class="buy-list">
      <view class="row" v-for="(item,index) in buyList" :key="index">
        <view class="goods-info">
          <view class="img">
            <image :src="item.img"></image>
          </view>
          <view class="info">
            <view class="title">{{item.name}}</view>
            <view class="spec">选择: {{item.spec}} 数量: {{item.number}}</view>
            <view class="price-number">
              <view class="price">￥{{item.price * item.number}}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 商品总计 -->
    <view class="detail">
      <view class="row">
        <view class="amount">商品金额</view>
        <view class="content">￥{{price|toFixed}}</view>
      </view>
      <view class="row">
        <view class="amount">运费</view>
        <view class="content">￥{{delivery|toFixed}}</view>
      </view>
    </view>
    <!-- 占 -->
    <!-- <view class="position"></view> -->
    <!-- 确认 -->
    <view class="footer">
      <view class="settlement">
        <view class="sum">合计: <view class="money">￥{{totalPrice | toFixed}}</view>
        </view>
        <view class="btn">提交订单</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        buyList: [],
        price: 0.0,
        totalPrice: 0.0,
        delivery: 12.0
      }
    },
    filters:{
      toFixed(x){
        return parseFloat(x).toFixed(2)
      }
    },
    onBackPress() {
      this.clear()
    },
    methods:{
      clear(){
        uni.removeStorage({
          key:'buy',
          success: () => {
            this.buyList=[]
          }
        })
      }
    },
    onShow() {
      uni.getStorage({
        key: 'buy',
        success: (res) => {
          this.buyList = res.data
          for (let i = 0; i < this.buyList.length; i++) {
            this.price = this.price + (this.buyList[i].number * this.buyList[i].price)
          }
          this.totalPrice = this.price + this.delivery
        }

      })
    }
  }
</script>

<style lang="scss">
  .buy-list {
    width: 86%;
    padding: 10upx 3%;
    margin: 30upx auto 20upx auto;
    box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
    border-radius: 20upx;

    .row {
      margin: 30upx 0;

      .goods-info {
        width: 100%;
        display: flex;

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
            font-size: 22upx;
            background-color: #f3f3f3;
            color: #a7a7a7;
            height: 40upx;
            display: flex;
            align-items: center;
            padding: 0 10upx;
            border-radius: 20upx;
            margin-bottom: 20vw;
          }

          .price-number {
            position: absolute;
            width: 100%;
            bottom: 0upx;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 28upx;
            height: 40upx;

            .price {
              color: #f06c7a;
            }

            .number {
              display: flex;
              justify-content: center;
              align-items: center;

            }
          }
        }
      }
    }
  }

  .detail {
    width: 86%;
    padding: 10upx 3%;
    margin: 30upx auto 20upx auto;
    box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
    border-radius: 20upx;

    .row {
      height: 60upx;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .amount {
        font-size: 28upx;
      }

      .content {
        font-size: 26upx;
        color: #f06c7a;
      }
    }
  }

  .position {
    width: 100%;
    height: 100upx;
  }

  .footer {
  		width: 92%;
  		padding: 0 4%;
  		background-color: #fbfbfb;
  		height: 100upx;
  		display: flex;
  		justify-content: flex-end;
  		align-items: center;
  		font-size: 28upx;
  		position: fixed;
  		bottom: 0upx;
  		z-index: 5;

  		.settlement {
  			width: 80%;
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
  				height: 60upx;
  				background-color: #f06c7a;
  				color: #fff;
  				display: flex;
  				justify-content: center;
  				align-items: center;
  				font-size: 30upx;
  				border-radius: 40upx;
  			}
  		}
  	}

</style>
