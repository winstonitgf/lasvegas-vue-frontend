<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex>
          <div>
            <v-breadcrumbs :items="breadcrumbItems" divider=">"></v-breadcrumbs>
          </div>
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("layout");

export default {
  name: "lasvegas-layout-content",
  data: () => ({
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
  props: {},
  methods: {},
  computed: {}
};
</script>
