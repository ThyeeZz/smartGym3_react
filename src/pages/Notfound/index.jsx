import React, { Component} from "react"
import "./notfound.scss"

class NotFound extends Component{
    constructor(props){
        super(props)
        this.state = {
            countDown : 5
        }
    }
    goBack = ()=>{
        window.history.back();
    }
    autoGoBack=()=>{
        this.timer1 = setInterval(() => {
            if(this.state.countDown > 0){
                this.setState(state=>({
                    countDown: state.countDown -1
                }))
            }else{
                this.goBack()
            }
        }, 1000);
    }
    componentDidMount(){
        this.autoGoBack()
    }
    componentWillUnmount(){
        if(this.timer1){
            clearInterval(this.timer1);
            this.timer1 = null;
        }
    }
    render(){
        return (
            <div className="notFound">
            <div className="tip">
                <h3>您的页面好像丢了...</h3>
                <p>将在{this.state.countDown}s后：</p>
                <div onClick={this.goBack} className="myBtn">返回上一页面</div>
            </div>
                
            </div>
        )
    }
}
export default NotFound