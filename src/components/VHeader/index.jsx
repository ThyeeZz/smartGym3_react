import React,{Component} from "react"
import "./item.scss"

export default class VHeader extends Component{
    constructor(props){
        super(props);
        this.state ={
            timeStr : new Date(),
            dateObj : {}
        }
    }
    timeFormat = (timeStap=new Date())=>{
        let time = new Date(timeStap);
        let year = time.getFullYear()<10?`0${time.getFullYear()}`:time.getFullYear();
        let month = time.getMonth() <9?`0${time.getMonth()+1}`:time.getMonth()+1;
        let day = time.getDate()<10?`0${time.getDate()}`:time.getDate();
        let week;
        switch(time.getDay()){
            case 1:
                week = "周一"
                break;
            case 2:
                week = "周二"
                break;
            case 3:
                week = "周三"
                break;
            case 4:
                week = "周四"
                break;
            case 5:
                week = "周五"
                break;
            case 6:
                week = "周六"
                break;
            case 7:
                week = "周日"
                break;
            default:
                return null
        }
        let hour = time.getHours()<10?`0${time.getHours()}`:time.getHours();
        let minute = time.getMinutes()<10?`0${time.getMinutes()}`:time.getMinutes();
        let second = time.getSeconds()<10?`0${time.getSeconds()}`:time.getSeconds();
        this.setState({
            dateObj: {
                        date: `${year}年${month}月${day}日`,
                        week: week,
                        time: `${hour}:${minute}:${second}`
                    }
        })
        // console.log(this.state.dateObj)
    }
    componentDidMount(){
        this.timer2 = setInterval(() => {
            this.timeFormat();
        }, 1000);
    }
    componentWillUnmount(){
        if(this.timer2){
            clearInterval(this.timer2);
            this.timer2 = null
        }
    }
    render(){
        return (
            <div className="header_wrap">
                <div className="left">
                    <div className="img_wrap">
                        <img src={require("../../assets/images/admin.gif")} alt=""/>
                    </div>
                    <p>hicing智慧运动场馆</p>
                </div>
                <div className="right">
                    <div className="right_top">
                        <div className="week">{this.state.dateObj.week}</div>
                        <div className="date">{this.state.dateObj.date}</div>
                    </div>
                    <div className="time">{this.state.dateObj.time}</div>
                </div>
            </div>
        )
    }
}