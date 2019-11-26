// react 这个包是专门用来创建react组件、组件生命周期等
import React from "react"
// react-dom 里面主要封装了和 DOM 相关的包，比如要把组件渲染到页面上
import ReactDom from "react-dom"
// 再react中要创建DOM元素 只能使用react提供的 js api 来创建，不能直接手写html元素

//React.createElement() 方法用于创建虚拟DOM对象，他接收3个及以上参数，
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import "./style/common.scss"



ReactDom.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)
