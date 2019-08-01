<template>
  <v-navigation-drawer :value="drawerLeft" clipped app>
    <v-list shaped>
      <v-list-item @click="goRoute('/home')">
        <v-list-item-icon>
          <v-icon>home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group
        v-for="item in navItems"
        :key="item.id"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </template>
        <v-list-item
          v-for="subItem in item.items"
          @click="goRoute(subItem.path)"
          :key="subItem.title"
          link
        >
          <v-list-item-title>{{ subItem.title }}</v-list-item-title>
          <v-list-item-icon>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("layout");

export default {
  name: "lasvegas-layout-drawer-left",
  data: () => ({}),
  props: {
    navItems: Array
  },
  methods: {},
  computed: {
    ...mapGetters({
      drawerLeft: "drawerLeft"
    })
  }
};
</script>
