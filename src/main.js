import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import App from '@/App.vue'
import LayoutOtf from '@/views/shared/LayoutOtf'
import DraftUserList from '@/views/otf/DraftUserList.vue'
import DraftUserCreate from '@/views/otf/DraftUserCreate.vue'
import DraftUserUpdate from '@/views/otf/DraftUserUpdate.vue'
import PublishedUserList from '@/views/otf/PublishedUserList.vue'

const routes = [
  {
      path: '/otf/',
      redirect: "/otf/draft-users",
      component: LayoutOtf,
      children: [
        {
          path: "/otf/draft-users",
          name: "draft-user-list",
          component: DraftUserList
        },
        {
          path: "/otf/draft-users/create",
          name: "draft-user-create",
          component: DraftUserCreate
        },
        {
          path: "/otf/draft-users/update/:id",
          name: "draft-user-update",
          component: DraftUserUpdate
        },
        {
          path: "/otf/draft-users/delete/:id",
          name: "draft-user-delete",
          component: DraftUserList
        },
        {
          path: "/otf/users",
          name: "published-user-list",
          component: PublishedUserList
        },
      ]
  },
  {
    path: "/",
    redirect: "/otf/draft-users",
  },
  {
      path: "/:pathMatch(.*)*",
      name: 'error',
      redirect: "/otf/draft-users"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
