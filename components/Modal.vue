<template>
	<view v-show="isShow" class="spec" @click.self="hide">
		<view class="mask"></view>
		<view class="layer">
			<view class="content">
				<view class="title">选择规格:</view>
				<view class="sp">
					<view @click.stop="select(item)" v-for="(item,index) in itemData.spec" :key='index' :class="{'on':item==itemInfo.spec}">
						{{item}}
					</view>
				</view>
				<view class="length">
					<view class="text">数量</view>
					<count :itemInfo='itemInfo'/>
				</view>

			</view>
			<view class="btn">
				<view class="button" @click="hide">
					确定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//数量
	import count from './count.vue'
	export default {
		components:{
			count
		},
		methods:{
			select(item){
				// 
        this.$emit('setitem',item)
			},
			hide(){

			this.$emit('hide')
			}
		},
		props: {
			isShow: Boolean,
			itemData: Object,
			itemInfo: Object
		}
	}
</script>

<style lang="scss">
	.spec {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 20;

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			position: fixed;
			z-index: 22;
			bottom: 0;
			width: 92%;
			padding: 0 4%;
			height: 70%;
			border-radius: 20upx 20upx 0 0;
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;

			.content {
				width: 100%;
				padding: 20upx 0;
			}

			.btn {
				width: 100%;
				height: 100upx;

				.button {
					width: 100%;
					height: 80upx;
					border-radius: 40upx;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #f47952;
					font-size: 28upx;
				}
			}
		}

		&.spec {
			.title {
				font-size: 30upx;
				margin: 30upx 0;
			}

			.sp {
				display: flex;

				view {
					font-size: 28upx;
					padding: 5upx 20upx;
					border-radius: 8upx;
					margin: 0 30upx 20upx 0;
					background-color: #f6f6f6;

					&.on {
						padding: 3upx 18upx;
						border: solid 1upx #f47925;
					}
				}
			}

			.length {
				margin-top: 30upx;
				border-top: solid 1upx #aaa;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 20upx;

				.text {
					font-size: 30upx;
				}

			}

		}
	}
</style>
