import {Login,Manage,Smartgym,Notfound,Content} from "../pages"
// import Loadable from "react-loadable";
const routes = [
    {
        path: "/login",
        component: Login,
        key: "/login"
    },
    {
        path: "/content",
        component: Content,
        key: "/content",
        children: [
            {
                path: "/content/smartgym",
                component: Smartgym,
                key: "/content/smartgym"
            },
            {
                path: "/content/manage",
                component: Manage,
                key: "/content/manage"
            },
        ]
    },
    {
        path: "/404",
        component: Notfound,
        key: "/404"
    }
]
export default routes