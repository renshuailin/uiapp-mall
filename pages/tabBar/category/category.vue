<template>
	<view>
		<app-status />
		<app-header />
		<view class="list">
			<!-- 左 -->
			<scroll-view scroll-y="true" class="left">
				<view @click="handle(index)" :class="{'on':index==currentIndex}" class="row" v-for="(item,index) in list" :key='item.id'>
					<view class="text">
						<view class="block"></view>
						{{item.title}}
					</view>
				</view>
			</scroll-view>
			<!-- 右 -->
			<scroll-view scroll-y="true" class="right">
				<view class="category" v-for="(item,index) in list" :key='item.id' v-show="index==currentIndex">
					<view class="banner">
						<image :src="item.banner"></image>
					</view>
					<view class="list">
						<view @click="itemList(item)" class="box" v-for="(item,index) in item.list" :key='item.id'>
							<image :src="'/static/img/category/list/'+item.img" ></image>
							<view class="text">{{item.name}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import interfaces from '../../../utils/network.js'
	//头部
	import header from "../home/header.vue"
	export default {
		data() {
			return {
				list: [],
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
			itemList(item){
				// console.log(item)
				uni.navigateTo({
					url:`../../goods/goods?name=${item.name}`
				})
			},
			handle(index) {
				this.currentIndex = index
			},
			initData() {
				this.request({
					url: interfaces.categoryData,
					success: (res) => {
						console.log(res)
						this.list = res.data
					}
				})
			}
		}

	}
</script>

<style lang="scss">
	.list {
		width: 100%;
		background-color: #fff;
		display: flex;

		.left {
			width: 24%;
			background-color: #f2f2f2;

			.row {
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;

				.text {
					width: 100%;
					position: relative;
					font-size: 28upx;
					display: flex;
					justify-content: center;
					color: #3c3c3c;

					.block {
						position: absolute;
						width: 0upx;
						left: 0;
					}
				}

				&.on {
					height: 100upx;
					background-color: #fff;

					.text {
						font-size: 30upx;
						font-weight: 600;
						color: #2d2d2d;

						.block {
							width: 10upx;
							height: 80%;
							top: 10%;
							background-color: #f06c7a;
						}
					}
				}
			}
		}

		.right {
			position: absolute;
			width: 76%;
			left: 24%;

			.category {
				width: 94%;
				padding: 20upx 3%;

				.banner {
					width: 100%;
					height: 28vw;
					border-radius: 10upx;
					overflow: hidden;
					box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.3);

					image {
						width: 100%;
						height: 100%;
					}
				}

				.list {
					margin-top: 40upx;
					width: 100%;
					display: flex;
					flex-wrap: wrap;

					.box {
						width: calc(71.44vw / 3);
						margin-bottom: 30upx;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;

						image {
							width: 60%;
							height: calc(71.44vw / 3 * 0.6);
						}

						.text {
							margin-top: 5upx;
							width: 100%;
							display: flex;
							justify-content: center;
							font-size: 26upx;
						}
					}
				}
			}
		}
	}
</style>
