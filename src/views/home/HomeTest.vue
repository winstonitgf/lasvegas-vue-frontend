<template>
  <v-app>
    <progress-bar></progress-bar>
    <app-bar :userName="userName" :toolbarItems="toolbarItems"></app-bar>
    <app-content></app-content>
    <drawer-right></drawer-right>
    <drawer-left></drawer-left>
  </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar.vue";
import AppContent from "@/components/layout/Content.vue";
import DrawerRight from "@/components/layout/DrawerRight.vue";
import DrawerLeft from "@/components/layout/DrawerLeft.vue";
import ProgressBar from "@/components/layout/ProgressBar.vue";
export default {
  name: "hometest",
  components: {
    AppBar,
    DrawerRight,
    DrawerLeft,
    ProgressBar,
    AppContent
  },
  data: () => ({
    userName: "Winston",
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
    }
  }),
  props: {},
  methods: {}
};
</script>
