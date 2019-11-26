import React,{ Component } from "react"
import "./item.scss"

 export default class ActiveItem extends Component{
     constructor(props){
         super(props);
         this.state = {

         }
     }
     
     render(){
         let member = this.props.member;
         return (
             <div className="item_wrap" ref="itemBg">
                <div className="item_left">
                    <div className="index_wrap">
                        <span>{member.index}</span>
                    </div>
                    <div className="hp_wrap">
                        <div className="hp">{member.hp}</div>
                        <div className="hp_icon">%</div>
                    </div>
                    <div className="cal_wrap">
                        <div className="cal_icon"></div>
                        <div className="cal">{member.cal}</div>
                    </div>
                </div>
                <div className="item_mid">
                    <div className="ava_wrap">
                        <img src={require("../../../assets/images/timg.jpg")} alt=""/>
                    </div>
                </div>
                <div className="item_right">
                    <div className="name">{member.name}</div>
                    <div className="hr_wrap">
                        <div className="hr">{member.hr}</div>
                        <div className="hr_icon">
                            <span></span>
                        </div>
                    </div>
                    <div className="st_wrap">
                        <div className="st_icon"></div>
                        <div className="st">{member.st}</div>
                    </div>
                </div>
             </div>
         ) 
     }
     componentDidMount() {
         let hp = this.props.member.hp;
         let itemBg = this.refs.itemBg
         if(hp >=60 && hp <=69){
            itemBg.setAttribute('class',"item_wrap bg3")
         }else if(hp >=70 && hp <=79){
            itemBg.setAttribute('class',"item_wrap bg2")
         }else if(hp >=80 && hp <=89){
            itemBg.setAttribute('class',"item_wrap bg1")
         }else if(hp >=90){
            itemBg.setAttribute('class',"item_wrap bg0")
         }
     }
     
 }