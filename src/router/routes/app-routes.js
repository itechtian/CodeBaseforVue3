export default [
    {
        path: '/',
        name: 'HOME',
        meta: {authRequired:false},
        component:() => import(/* webpackChunkName: "about" */ '../../views/appView/HomeView')
    },
]