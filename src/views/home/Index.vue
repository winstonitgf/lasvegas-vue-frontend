<template>
  <div>
    <dashboard v-bind:dashboardDatas="dashboardDatas"></dashboard>
  </div>
</template>

<script>
import Dashboard from "@/components/home/dashboard/Dashboard.vue";
export default {
  name: "lasvegas-app-index",
  components: {
    Dashboard
  },
  data: () => ({
    dashboardDatas: [
      {
        id: 1,
        title: "會員統計",
        contents: [
          {
            id: 1,
            text: "注冊會員人數",
            value: 13
          },
          {
            id: 2,
            text: "登入會員人數",
            value: 18
          },
          {
            id: 3,
            text: "有效會員人數",
            value: 7
          }
        ]
      },
      {
        id: 2,
        title: "體育報表[當日]",
        contents: [
          {
            id: 1,
            text: "投注額[已結]",
            value: 100
          },
          {
            id: 2,
            text: "投注額[未結]",
            value: 0
          },
          {
            id: 3,
            text: "盈利額[已結]",
            value: -100
          },
          {
            id: 4,
            text: "返水額[已結]",
            value: 0
          }
        ]
      },
      {
        id: 2,
        title: "財務統計[昨天]",
        contents: [
          {
            id: 1,
            text: "在線第三方入款會員人數",
            value: 100
          },
          {
            id: 2,
            text: "銀行轉帳會員人數",
            value: 0
          },
          {
            id: 3,
            text: "取款會員人數",
            value: 100
          }
        ]
      }
    ]
  }),
  props: {},
  methods: {}
};
</script>
