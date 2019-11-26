import React, {
    Component
} from "react"
import "./login.scss"
// import postRequest from  "../../utils/postRequest.js"
// import md5 from "md5"
// import axios from "axios"

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "admin",
            password: "1234qwer"
        };
    }

    login = ()=>{
        // axios.post("api/login",{
        //     username: this.state.username,
        //     password: this.state.password
        // }).then(res=>{
        //     console.log(res)
        // })
        this.props.history.push('/content')
    }
    getUsername=(e)=>{
        let target = e.target
        let val = target.value
        this.setState(state=>({
            username: val
        }))
    }
    getUsername=(e)=>{
        let target = e.target
        let val = target.value
        this.setState(state=>({
            password: val
        }))
    }
    getInput=(e)=>{
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name

        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    render(){
        return (
            <div className="login">
                <form action="" className="login_wrap">
                    <input className="login_input" autoComplete="off" type="text" name="username" placeholder="请输入用户名" defaultValue={this.state.username} onChange={this.getInput} />
                    <input className="login_input" autoComplete="off" type="password" name="password" placeholder="请输入用密码" defaultValue={this.state.password} onChange={this.getInput} />
                    <button className="login_btn" onClick={this.login}>登录</button>
                </form>
            </div>
        )
    }
}
