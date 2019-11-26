import Loadable from "react-loadable";

const Loading = ()=> null; //加载是不实现loading

const Login = Loadable({
    loader: ()=> import ("./Login"), //按需加载 点击时之家子啊一个页面
    loading: Loading
})
const Smartgym = Loadable({
    loader: ()=> import ("./Smartgym"),
    loading: Loading
})
const Notfound = Loadable({
    loader: ()=> import ("./Notfound"),
    loading: Loading
})
const Manage = Loadable({
    loader: ()=> import ("./Manage"),
    loading: Loading
})
const Content = Loadable({
    loader: ()=> import ("./Content"),
    loading: Loading
})
export {Login,Notfound,Content,Smartgym,Manage} //将页面导出