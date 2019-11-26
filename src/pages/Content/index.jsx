import React,{ Component } from "react"
import { Route} from "react-router-dom";
import "./item.scss"
import VFooter from "../../components/VFooter"
import VHeader from "../../components/VHeader"
import Smartgym from "../Smartgym"
import Manage from "../Manage"



export default class Content extends Component{
    render(){
        return(
            <div className="content">
                <VHeader/>
                <div className="content_wrap">
                    <Route exact path="/content/" component={Smartgym} />
                    <Route exact path="/content/manage" component={Manage} />
                </div>
                <VFooter/>
            </div> 
        )
    }
}