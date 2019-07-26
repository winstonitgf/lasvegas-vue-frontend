<template>
  <div>
    <home-layout v-bind="layoutData"></home-layout>
  </div>
</template>

<script>
import HomeLayout from "@/components/Layout.vue";
export default {
  name: "home",
  components: {
    HomeLayout
  },
  data: () => ({
    layoutData: {
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
      ],
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
    }
  }),
  props: {},
  methods: {}
};
</script>
