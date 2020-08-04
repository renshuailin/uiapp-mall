<template>
	<view class="">
		<!-- 状态遮罩 -->
		<app-status/>
		<detailHeader/>
		123
	</view>
</template>

<script>
	//头部返回
	import detailHeader from './detailHeader.vue'
	export default {
		components:{
			detailHeader
		},
		data(){
			return {
				itemInfo:{
					name:'',
					price:'',
					number:1,
					spec:''
				}
			}
		},
		onLoad(options) {
			// console.log(JSON.parse(options.goodsInfo))
			this.itemInfo=JSON.parse(options.goodsInfo)
		}
	}
</script>

<style>
</style>
