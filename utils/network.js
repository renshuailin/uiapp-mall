const baseUrl = 'https://uniapp-interface.herokuapp.com/'

const interfaces = {
	homeData: baseUrl + 'api/profiles/mall_list',
	// 分类
	categoryData:baseUrl+'api/profiles/category',
	//商品列表
	goodsList:baseUrl+'api/profiles/goodslist',
	// 商品详情
	detailList:baseUrl+'api/profiles/goods'
	
}
module.exports=interfaces
