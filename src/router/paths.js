import NotFound from "@/views/common/NotFound.vue";
import Deny from "@/views/common/Deny.vue";
import ErrorPage from "@/views/common/Error.vue";
import Home from "@/views/common/Home.vue";
import Profile from "@/views/common/Profile.vue";
import Icon from "@/views/FROM_TEMPLATE/ui/Icon.vue";

export default [
  {
    path: "/404",
    meta: {
      public: true
    },
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/403",
    meta: {
      public: true
    },
    name: "AccessDenied",
    component: Deny
  },
  {
    path: "/500",
    meta: {
      public: true
    },
    name: "ServerError",
    component: ErrorPage
  },
  {
    path: "/",
    meta: {},
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    meta: {},
    name: "Profile",
    component: Profile
  },
  {
    path: "/icons",
    meta: { breadcrumb: true },
    name: "Icons",
    component: Icon
  },
];
