let title = "b站"
let web = "bilibili.com"
// let getWeb = () => {
//     return "www.bilibili.com"
// }
// 可省略 {} 的情况：当箭头函数直接返回单行表达式时
// 必须保留 {} 的情况：
// 函数体包含多行代码
// 需要流程控制（如 if/for）
// 需显式使用 return
let getWeb= () => "www.bilibili.com"
 //export { title, web, getWeb } //将多个变量或函数分别导出
export default{ title, web, getWeb } //将一个对象作为整体导出, 导出的对象包含 title、web、getWeb 三个属性