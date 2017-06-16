import fetch from '../config/fetch'


/**
 * 获取商品列表
 */
var getGoodslist = () => fetch('POST', '/api/goods/goodslist', {
})

/**
 * 分页查询软件外包列表
*/
var webGetlist = (current_page, page_num) => fetch('POST', '/company/getlist', {
	current_page: current_page,
	page_num: page_num
})

/**
 * 分页查询支付接入列表
*/
var payGetlist = (current_page, page_num) => fetch('POST', '/visitor/getlist', {
	current_page: current_page,
	page_num: page_num
})


export { getGoodslist, webGetlist, payGetlist}
