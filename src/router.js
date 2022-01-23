import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/otf/',
            name: 'home',
            children: [
              {
                path: "/otf/draft-users",
                name: "draft-user-list",
              },
              {
                path: "/otf/users",
                name: "user-list",
              },
            ]
        },
        {
            path: '*',
            name: 'error',
            component: Error
        }
    ]
})