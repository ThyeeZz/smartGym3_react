import React,{ Component } from "react"
import "./footer.scss"

export default class VFooter extends Component{
    constructor(props){
        super(props);
        this.state = {
            footerList: [
                {
                    title: "热身运动",
                    imgUrl: require("../../assets/images/reshen.png"),
                    requirement: "<59%"
                },
                {
                    title: "耐力训练",
                    imgUrl: require("../../assets/images/ranzhi.png"),
                    requirement: "60-69%"
                },
                {
                    title: "燃脂运动",
                    imgUrl: require("../../assets/images/naili.png"),
                    requirement: "70-79%"
                },
                {
                    title: "强化训练",
                    imgUrl: require("../../assets/images/qianghua.png"),
                    requirement: "80-89%"
                },
                {
                    title: "有氧冲刺",
                    imgUrl: require("../../assets/images/chongci.png"),
                    requirement: ">90%"
                },
            ]
        }
    }
    render(){
        return(
            <div className="myFooter">
                <ul className="footerList">
                    {
                        this.state.footerList.map(item=>{
                            return(
                                <li className="listItem" key={item.title}>
                                    <img src={item.imgUrl} alt=""/>
                                    <div className="desc">
                                        <p className="title">{item.title}</p>
                                        <p className="require">{item.requirement}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                
            </div>
        )
    }
}