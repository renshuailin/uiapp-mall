module.exports = (param) => {
	let url = param.url
	let method = param.method
	let header = param.header || {}
	let data = param.data || {}
	//请求方式
	if (method) {
		method = method.toUpperCase()
		if (method == 'POST') {
			header = {
				"content-type": "application/x-www-from-urlencoded"
			}

		}
	}
	//请求动画
	if (!param.hideLoading) {
		uni.showLoading({
			title: '加载中'
		})
	}
	// 发起请求
	uni.request({
		url: url,
		header: header,
		method: method || "GET",
		data: data,
		success: res => {
			if (res.statusCode && res.statusCode != 200) { //api错误
				uni.showModal({
					content: res.msg
				})
				return
			}

			typeof param.success == 'function' && param.success(res.data)

		},
		fail: (e) => {
			uni.showModal({
				content: res.msg
			})
			typeof param.fail == 'function' && param.fail(e.data)
		},
		complete: () => {
			// console.log('123')
			uni.hideLoading()
			typeof param.complete == 'function' && param.complete(e.data)
			return
		}
	})

}
