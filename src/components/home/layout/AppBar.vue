<template>
  <div>
    <v-app-bar app clipped-right clipped-left color="blue-grey" dark>
      <v-app-bar-nav-icon @click.stop="leftMenuClick"></v-app-bar-nav-icon>
      <v-toolbar-title>娛樂城後台管理系統</v-toolbar-title>
      <v-toolbar-title style="margin-left:20px;">歡迎回來 {{ userName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y open-on-hover :nudge-width="150">
        <template v-slot:activator="{ on }">
          <v-badge overlap color="red">
            <template v-slot:badge>
              <span>1</span>
            </template>
            <v-btn icon v-on="on">
              <v-icon>apps</v-icon>
            </v-btn>
          </v-badge>
        </template>
        <v-list>
          <v-list-item v-for="item in toolbarItems.toolbarProgramItems" :key="item.id">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
            <v-list-item-action>{{ item.count }}</v-list-item-action>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y open-on-hover :nudge-width="100">
        <template v-slot:activator="{ on }">
          <!-- <v-btn icon v-on="on">
              <v-icon>info</v-icon>
          </v-btn>-->
          <v-badge overlap color="red">
            <template v-slot:badge>
              <span>1</span>
            </template>
            <v-btn icon v-on="on">
              <v-icon>info</v-icon>
            </v-btn>
          </v-badge>
        </template>
        <v-list>
          <v-list-item v-for="item in toolbarItems.toolbarNotificationItems" :key="item.id">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
            <v-list-item-action>{{ item.count }}</v-list-item-action>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>person</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in toolbarItems.toolbarUserItems" :key="item.id">
            <v-btn color="primary" text dark @click.stop="openDialog(item.type)">{{ item.text }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-app-bar-nav-icon @click.stop="rightMenuClick"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("layout");
export default {
  name: "lasvegas-layout-app-bar",
  data: () => ({}),
  props: {
    userName: String,
    toolbarItems: Object
  },
  methods: {
    ...mapActions({
      leftMenuClick: "leftMenuClick",
      rightMenuClick: "rightMenuClick",
      logoutDialogClick: "logoutDialogClick",
      informationDialogClick: "informationDialogClick",
      passwordDialogClick: "passwordDialogClick"
    }),
    openDialog(type) {
      if (type == "logout") {
        this.logoutDialogClick();
      }
      if (type == "info") {
        this.informationDialogClick();
      }
      if (type == "password") {
        this.passwordDialogClick();
      }
    }
  }
};
</script>
