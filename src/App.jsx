import { Route, Redirect,Switch} from "react-router-dom";
import React,{Component} from "react"
import routes from "./route"


// import VHeader from "./components/VHeader"
// import VFooter from "./components/VFooter"
const Appstyle = {
    width: "100%",
    // height: "100%",
}

export default class App extends Component{

    render(){
        return (
            <div className="App" style={Appstyle}>
                {
                    routes.map(item=>{
                        return (
                            <Switch key={item.key}>
                                <Route path={item.path} component={item.component} />
                                <Redirect exact from="/" to={routes[0].path} />
                            </Switch>
                        )
                    })
                }
            </div>
        )
    }
}

