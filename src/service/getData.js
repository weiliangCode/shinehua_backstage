import fetch from '../config/fetch'
import * as home from './tempdata/home'


/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

//编译环境使用真实数据
if (process.env.NODE_ENV == 'development') {
	/**
	 * 获取商品列表
	 */
	var getGoodslist = () => fetch('POST', '/api/goods/goodslist',{
	})


	/**
	 * 分页查询软件外包列表
	*/
	var webGetlist = (current_page,page_num) => fetch('POST', '/company/getlist',{
		current_page:current_page,
		page_num:page_num
	})

	/**
	 * 分页查询支付接入列表
	*/
	var payGetlist = (current_page,page_num) => fetch('POST', '/visitor/getlist',{
		current_page:current_page,
		page_num:page_num
	})
	
}else{
	var cityGuess = () => setpromise(home.guesscity);
	var mobileCode = phone => setpromise(login.validate_token);
	var getGoodslist = () => setpromise();
}

/**
 * 以下Api接口不需要进行反向代理
 */

var sendLogin = (code, mobile, validate_token) => setpromise(login.userInfo);

export {cityGuess, mobileCode, getGoodslist, payGetlist, webGetlist}
