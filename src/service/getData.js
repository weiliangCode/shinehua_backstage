import fetch from '../config/fetch'


//获取商品列表
var getGoodslist = () => fetch('POST', '/api/goods/goodslist', {})


//分页查询软件外包列表
var webGetlist = (current_page, page_num) => fetch('POST', '/company/getlist', { current_page,page_num })
//删除软件外包订单
var deleteProject = (id) => fetch('POST', '/company/delone', { id })
//更新软件外包订单
var updatProject = (visitor,short_code) => fetch('POST', '/company/updateone', { visitor,short_code })

//分页查询支付接入列表
var payGetlist = (current_page, page_num) => fetch('POST', '/visitor/getlist', { current_page,page_num })
//删除支付接入订单
var deletePay = (id) => fetch('POST', '/visitor/delone', { id })
//更新支付接入订单
var updatPay = (visitor,short_code) => fetch('POST', '/visitor/updateone', { visitor,short_code })


export { getGoodslist, webGetlist, deleteProject, payGetlist, deletePay, updatPay}
