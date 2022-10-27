export default [
    {
        path:"/kosman/user/signup",
        name:"SIGNUP",
        meta:{authRequired: false},
        component:() => import(/* webpackChunkName: "about" */ '../../views/appAuthView/SignUpView')

    }
]