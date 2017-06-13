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
	 * 获取首页默认地址
	 */
	var cityGuess = () => fetch('GET', '/v1/cities', {
		type: 'guess'
	});


	/**
	 * 获取短信验证码
	 */
	var mobileCode = phone => fetch('POST', '/v4/mobile/verify_code/send', {
		mobile: phone,
		scene: 'login',
		type: 'sms'
	});

//=================================================
	/**
	 * 获取商品列表
	 */
	var getGoodslist = () => fetch('POST', '/api/goods/goodslist',{
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

export {cityGuess, mobileCode, getGoodslist}
