<template>
  <v-app>
    <progress-bar></progress-bar>
    <app-bar :userName="userName" :toolbarItems="toolbarItems"></app-bar>
    <app-content :breadcrumbItems="breadcrumbItems"></app-content>
    <drawer-right></drawer-right>
    <drawer-left :navItems="navItems"></drawer-left>
    <app-footer></app-footer>
    <information-dialog></information-dialog>
    <logout-dialog @logout="logout"></logout-dialog>
    <password-dialog></password-dialog>
  </v-app>
</template>

<script>
import AppBar from "@/components/home/layout/AppBar.vue";
import AppContent from "@/components/home/layout/Content.vue";
import AppFooter from "@/components/home/layout/Footer.vue";
import DrawerRight from "@/components/home/layout/DrawerRight.vue";
import DrawerLeft from "@/components/home/layout/DrawerLeft.vue";
import ProgressBar from "@/components/home/layout/ProgressBar.vue";

import InformationDialog from "@/components/home/layout/dialog/Information.vue";
import LogoutDialog from "@/components/home/layout/dialog/Logout.vue";
import PasswordDialog from "@/components/home/layout/dialog/Password.vue";

import { apiAuthUser, apiLogout } from "@/apis/oauth-api.js";

import { goRoute } from "@/utilities/common.js";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

export default {
  name: "lasvegas-app-layout",
  components: {
    AppBar,
    DrawerRight,
    DrawerLeft,
    ProgressBar,
    AppContent,
    AppFooter,
    InformationDialog,
    LogoutDialog,
    PasswordDialog
  },
  data: () => ({
    userName: "",
    toolbarItems: {
      toolbarProgramItems: [
        {
          id: 1,
          text: "入款提示",
          count: 2
        },
        {
          id: 2,
          text: "公司入款提示",
          count: 1
        },
        {
          id: 3,
          text: "出款提示",
          count: 1
        },
        {
          id: 4,
          text: "系統消息提示",
          count: 1
        },
        {
          id: 5,
          text: "黑名單下注提示",
          count: 1
        }
      ],
      toolbarNotificationItems: [
        {
          id: 1,
          text: "在線人數",
          count: 2
        },
        {
          id: 2,
          text: "充值",
          count: 1
        },
        {
          id: 3,
          text: "人工充值",
          count: 1
        },
        {
          id: 4,
          text: "公司入款",
          count: 1
        },
        {
          id: 5,
          text: "提現",
          count: 1
        },
        {
          id: 6,
          text: "待出款",
          count: 1
        }
      ],
      toolbarUserItems: [
        {
          id: 1,
          text: "資訊",
          type: "info"
        },
        {
          id: 2,
          text: "密碼",
          type: "password"
        },
        {
          id: 3,
          text: "退出",
          type: "logout"
        }
      ]
    },
    navItems: [
      {
        id: 1,
        action: "local_activity",
        title: "體育賽事",
        active: true,
        items: [
          { title: "賽程", path: "/home/sport-schedule" },
          { title: "賽果(比分)", path: "/home/sport-result" },
          { title: "注單(按注單)", path: "/home/sport-order" },
          { title: "注單(按用戶)", path: "/home/sport-schedule" },
          { title: "報表", path: "/home/sport-schedule" }
        ]
      },
      {
        id: 2,
        action: "autorenew",
        title: "額度轉移",
        items: [{ title: "轉入轉出", path: "/home/sport-schedule" }]
      }
    ],
    breadcrumbItems: [
      {
        id: 1,
        text: "首頁",
        disabled: false,
        href: "breadcrumbs_dashboard"
      },
      {
        id: 2,
        text: "體育賽事",
        disabled: false,
        href: "breadcrumbs_link_1"
      },
      {
        id: 3,
        text: "賽程",
        disabled: true,
        href: "breadcrumbs_link_2"
      }
    ]
  }),
  beforeCreate: function() {
    apiAuthUser()
      .then(res => {
        this.setAuthUser(res.data);
        this.userName = this.authUser.name;
      })
      .catch(err => {
        console.log(err.response.statusText);
      });
  },
  timers: {
    log: { time: 10000, autostart: true, repeat: true }
  },
  computed: {
    ...mapGetters({
      authUser: "authUser"
    })
  },
  methods: {
    ...mapActions({
      setAuthUser: "setAuthUser"
    }),
    logout() {
      apiLogout(this.authUser.id)
        .then(res => {
          localStorage.removeItem("api_token");
          goRoute("/login");
          console.log(res);
        })
        .catch(err => {
          console.log(err.response.statusText);
          console.log("登出失敗");
        });
    },
    log() {
      console.log("Hello world");
    }
  }
};
</script>
