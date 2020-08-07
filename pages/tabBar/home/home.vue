<template>
	<view>
		<!-- 状态遮罩 -->
		<app-status/>
		<app-header />
		<!-- swiper -->
		<view class="swiper">
			<view class="swiper-box">
				<swiper autoplay="true" interval="3000" duration="1000" circular="true" @change="dots">
					<swiper-item v-for="item in swiper" :key='item.id'>
						<image :src="item.img" mode=""></image>
					</swiper-item>

				</swiper>
				<view class="indicator">
					<view :class="{'on':currentIndex>=index}" class="dots" v-for="(item,index) in swiper" :key='item.id'>

					</view>
				</view>
			</view>
		</view>
		<!-- list -->
		<view class="list">
			<view class="category" v-for="(item,index) in categoty" :key='item.id'>
				<view @click="check(item)" class="img">
					<image :src="item.img"></image>
				</view>
				<view class="text">{{item.name}}</view>
			</view>
		</view>
		<!-- banner -->
		<view class="banner" v-if="promotion.length>0">
			<image src="/static/img/category/ad.jpg" mode=""></image>
		</view>
		<!-- activty -->
		<view class="promotion">
			<view class="text">优惠活动</view>
			<view class="list">
				<view class="column" @click="handl(item)" v-for="(item,index) in promotion" :key='index'>
					<view class="top">
						<view class="title">{{item.title}}</view>
					</view>
					<view class="left">
						<view class="ad">{{item.ad}}</view>
						<view class="info">点击进入</view>
					</view>
					<view class="right">
						<image :src="item.img" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//头部
	import header from "./header.vue"
	// 导入请求地址
	import interfaces from "../../../utils/network.js"

	export default {
		data() {
			return {
				swiper: [],
				categoty: [],
				promotion: [],
				currentIndex: 0
			}
		},
		components: {
			'app-header': header
		},
		onLoad() {
			this.initData()
		},
		methods: {
			handl(item){
				uni.showToast({
					title:item.title,
					icon:'none'
				})
			},
			check(item) {
				uni.navigateTo({
					url:`../../goods/goods?name=${item.name}`
				})
			},
			initData() {
				this.request({
					url: interfaces.homeData,
					success: (res) => {
						console.log(res)
						this.swiper = res.data.swiperList
						this.categoty = res.data.categoryList
						this.promotion = res.data.promotion
					}
				})
			},
			dots(e) {
				// console.log(e)
				this.currentIndex = e.detail.current
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		// height: 1000upx;
		width: 100%;
		margin-top: 10upx;
		display: flex;
		justify-content: center;

		.swiper-box {
			width: 92%;
			height: 45vw;
			overflow: hidden;
			border-radius: 15upx;
			box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;

			swiper {
				width: 100%;
				height: 45vw;

				swiper-item {
					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.indicator {
				position: absolute;
				bottom: 20upx;
				left: 20upx;
				background-color: rgba(255, 255, 255, 0.4);
				width: 150upx;
				height: 5upx;
				border-radius: 3upx;
				overflow: hidden;
				display: flex;

				.dots {
					width: 0upx;
					background-color: rgba(255, 255, 255, 1);
					transition: all 0.3s ease-out;

					&.on {
						width: (100%/3);
					}
				}
			}
		}
	}

	.list {
		width: 92%;
		margin: 0 4%;
		padding: 0 0 30upx 0;
		border-bottom: solid 2upx #f6f6f6;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.category {
			width: 25%;
			margin-top: 50upx;
			display: flex;
			flex-wrap: wrap;

			.img {
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width: 15vw;
					height: 15vw;
				}
			}

			.text {
				margin-top: 16upx;
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 24upx;
				color: #3c3c3c;
			}
		}
	}

	.banner {
		width: 92%;
		margin: 40upx 4%;

		image {
			width: 100%;
			height: 36vw;
			border-radius: 4upx;
			box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.3);
		}
	}

	.promotion {
		width: 92%;
		margin: 10upx 4% 30upx 4%;

		.text {
			width: 100%;
			height: 60upx;
			font-size: 34upx;
			font-weight: 600;
			margin: 10upx;
		}

		.list {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin: 0 auto;

			.column {
				width: 43%;
				padding: 15upx 3%;
				background-color: #ebf9f9;
				border-radius: 10upx;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.top {
					width: 100%;
					height: 40upx;
					display: flex;
					align-items: center;
					margin-bottom: 5upx;

					.title {
						font-size: 30upx;
					}
				}

				.left {
					width: 50%;
					height: 18.86vw;
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;

					.ad {
						margin-top: 5upx;
						width: 100%;
						font-size: 22upx;
						color: #acb0b0;
					}

					.info {
						width: 100%;
						font-size: 24upx;
						color: #aaa;
						margin-bottom: 5upx;
					}
				}

				.right {
					width: 18.86vw;
					height: 18.86vw;

					image {
						width: 18.86vw;
						height: 18.86vw;
					}
				}
			}
		}
	}
</style>
