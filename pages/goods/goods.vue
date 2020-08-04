<template>
	<view>
		<view class="header">
			<view class="target" @click="select(index)" v-for="(item,index) in listData" :key='index' :class="{'on':item.selected}">
				{{item.text}}
			</view>
		</view>
		<!-- 站位 -->
		<view class="place"></view>
		<!-- 商品列表 -->
		<view class="goods">
			<view class="goods-list">
				<view class="product" @click="goods(item)" v-for="(item,index) in goodsList" :key='item.goods_id'>
					<image :src="item.img" mode="widthFix"></image>
					<view class="name">{{item.name}}</view>
					<view class="info">
						<view class="price">
							<text>￥{{item.price}}</text>
						</view>
						<view class="collect">
							{{item.slogan}}付款
						</view>
					</view>
				</view>
			</view>
			<view class="loading">{{loadText}}</view>
		</view>
	</view>
</template>

<script>
	import interfaces from '../../utils/network.js'
	export default {
		data() {
			return {
				goodsList: [],
				filter: 'all',
				page: 1,
				size: 6,
				loadText: '正在加载中...',
				listData: [{
						text: '全部',
						selected: true,
						filter: 'all'
					}, {
						text: '口碑',
						selected: false,
						filter: 'public'
					},
					{
						text: '热门',
						selected: false,
						filter: 'hot'
					}
				]
			}
		},
		onLoad(options) {
			// console.log(options)
			uni.setNavigationBarTitle({
				title: options.name
			})
			this.loadData()

		},
		// 下拉刷新
		onPullDownRefresh() {
			setTimeout(()=>{
				this.page=1
				this.loadText='加载中'
				this.goodsList=[]
				this.loadData()
				uni.stopPullDownRefresh()
			},1000)
		},
		// 上拉加载更多
		onReachBottom() {
			console.log(123)
			this.page++
			this.loadData()
		},
		methods: {
			goods(item){
				uni.navigateTo({
					url:'./detail?goodsInfo='+JSON.stringify(item)
				})
			},
			loadData() {
				this.request({
					url: `${interfaces.goodsList}/${this.filter}/${this.page}/${this.size}`,
					success: (res) => {
						// console.log(c)
						// this.goodsList = res.data
						if(res.data.length>0){
							res.data.forEach((item)=>{
								this.goodsList.push(item)
							})
							console.log(this.goodsList)
						}else {
							this.loadText='木有更多数据了^-^'
						}
					}
				})
			},
			
			select(index) {
				// console.log(index)
				for (let i = 0; i < this.listData.length; i++) {
					this.listData[i].selected = false
				}
				this.listData[index].selected = true
				
				this.filter=this.listData[index].filter
				this.page=1
				this.loadText='加载中...'
				this.goodsList=[]
				this.loadData()
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;

		.target {
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;

			&.on {
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}

			.icon {
				font-size: 26upx;
			}
		}
	}

	.place {
		background-color: #ffffff;
		height: 100upx;
	}

	.goods{
		.loading {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}

		.goods-list {
			width: 92%;
			padding: 0 4% 3vw 4%;
			column-count: 1;
			column-gap: 1em;
			//  column-width: 100%;
			
			// margin: 0 auto;
			
			//      width: 92%;
			
			//      column-count: 2;
			
			    
			
			//      column-gap: 0px;
			// break-inside: avoid;
			
			.product {
				// float: left;
				break-inside: avoid;
				border-radius: 20upx;
				background-color: #fff;
				margin: 0 0 15upx 0;
				box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);

				image {
					width: 100%;
					border-radius: 20upx 20upx 0 0;
				}

				.name {
					width: 92%;
					padding: 6upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 30upx;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;

					.price {
						color: #e65339;
						font-size: 30upx;
						font-weight: 600;
					}

					.collect {
						color: #807c87;
						font-size: 24upx;
					}
				}
			}

		}
	}
</style>
