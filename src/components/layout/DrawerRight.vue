<template>
  <v-navigation-drawer :value="drawerRight" app clipped right>
    <v-list dense>
      <v-list-item>
        <v-list-item-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>線上會員數</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("layout");

export default {
  name: "lasvegas-layout-drawer-right",
  data: () => ({}),
  props: {},
  methods: {},
  computed: {
    ...mapGetters({
      drawerRight: "drawerRight"
    })
  }
};
</script>
