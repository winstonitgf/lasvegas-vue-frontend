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
  data: () => ({}),
  props: {
    breadcrumbItems: Array
  },
  methods: {},
  computed: {}
};
</script>
