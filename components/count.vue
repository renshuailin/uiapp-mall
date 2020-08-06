<template>
	<view class="">
		<view class="number">
			<view class="sub" @click.stop="sub">
				<button class="icon iconfont" :disabled="itemInfo.number<=1">&#xe768;</button>
			</view>
			<view class="input">
				<input type="number" value="" v-model="itemInfo.number" />
			</view>
			<view class="add" @click.stop="add">
				<button class="icon iconfont" >&#xe767;</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			sub(){
				if(this.itemInfo.number<=1){
					return
				}else{
					this.itemInfo.number--
				}
         this.$emit('chang')
			},
			add(){
				this.itemInfo.number++
        this.$emit('chang')
			}
		},
		props: {
			itemInfo: Object
		}
	}
</script>

<style lang="scss">
	.number {
		display: flex;
		justify-content: center;
		align-items: center;

		.input {
			width: 80upx;
			height: 60upx;
			margin: 0 10upx;
			background-color: #f3f3f3;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;

			input {
				width: 80upx;
				height: 60upx;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				font-size: 26upx;
			}
		}

		.sub,
		.add {
			width: 60upx;
			height: 60upx;
			background-color: #f3f3f3;
			border-radius: 5upx;
			border: none;

			.icon {
				font-size: 30upx;
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
