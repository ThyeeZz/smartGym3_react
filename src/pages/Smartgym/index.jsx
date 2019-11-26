import React,{ Component } from "react"
import "./smartgym.scss"

import ActiveItem from "./ActiveItem"

const Mock = require('mockjs');

class SmartGym extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataList: [],
            count: 0
        }
    }
    

    getData =()=>{
        const arrSort = require('arr-sort');
        let mr = Mock.Random;//提取mock的随机对象

        let dataArr = [];
        for(let i=0;i<50;i++){
            dataArr.push({
                hr: mr.integer(50,120),
                cal: mr.integer(0,5000),
                name: mr.name(),
                st: mr.integer(0,10000), //steps
                birthday: mr.integer(1939,2010),
                gender: mr.integer(0,1)
            })
        }
        dataArr.forEach(member=>{
            let age = 2019- member.birthday;
            member.hp = member.gender===0?Math.round(member.hr/(226-age)*100):Math.round(member.hr/(220-age)*100);
        })
        dataArr = arrSort(dataArr,[{attr: "hp", asc: false},{attr: "cal", asc: false}])
        dataArr.forEach((item,index)=>{
            item.index = index + 1
        })
        return dataArr
    }

    autoPage = (arr,n)=>{
        let tempArr = [],
            index = 0;
        while (index<arr.length) {
            tempArr.push(arr.slice(index,index += n))
        }
        this.setState(state=>({
            dataList: tempArr
        }))
    }

    autoCount = ()=>[
        this.timer3 = setInterval(()=>{
            let len = this.state.dataList.length - 1;
            this.setState({
                count: this.state.count < len?this.state.count+=1:0
            })
        },60000)
    ]

    render(){
        let count = this.state.count
        let dataArr = this.state.dataList[count];
        if(dataArr){
            return(
            <div className="smartGym">
               {    
                    dataArr.map(item=>{
                        return(
                            <ActiveItem key={item.index} member={item} />
                        )
                    })
               }
            </div>
        )
        }else{
            return null
        }
        
    }

    componentDidMount(){
        this.autoPage(this.getData(),16);
        this.autoCount()
        
    }
    
    componentWillUnmount() {
        if(this.timer3){
            clearInterval(this.timer3);
            this.timer3 = null;
        }
    }
    
}
export default SmartGym