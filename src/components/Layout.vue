<template>
  <div id="app">
    <v-progress-linear
      style="z-index:999;margin:0"
      color="error"
      height="3"
      :indeterminate="$store.state.isLoading"
    ></v-progress-linear>
    <v-app id="inspire">
      <v-navigation-drawer fixed v-model="drawerRight" right clipped app>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="blue-grey" dark fixed app clipped-right clipped-left>
        <v-toolbar-side-icon @click.stop="drawerLeft = !drawerLeft"></v-toolbar-side-icon>
        <v-toolbar-title>娛樂城後台管理系統</v-toolbar-title>
        <v-toolbar-title>{{ userName }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y open-on-hover :nudge-width="150">
          <template v-slot:activator="{ on }">
            <!-- <v-btn icon v-on="on">
              <v-icon>apps</v-icon>
            </v-btn>-->
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
            <v-list-tile v-for="item in toolbarProgramItems" :key="item.id">
              <v-list-tile-content>{{ item.text }}</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ item.count }}</v-list-tile-content>
            </v-list-tile>
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
            <v-list-tile v-for="item in toolbarNotificationItems" :key="item.id">
              <v-list-tile-content>{{ item.text }}</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ item.count }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>person</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-tile v-for="item in toolbarUserItems" :key="item.id">
              <v-btn
                color="primary"
                flat="flat"
                dark
                @click.stop="openDialog(item.type)"
              >{{ item.text }}</v-btn>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
      </v-toolbar>
      <v-navigation-drawer fixed v-model="drawerLeft" clipped app>
        <v-list dense>
          <v-list-tile @click="goRoute('/home')">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>首頁</v-list-tile-title>
          </v-list-tile>
          <v-list-group
            v-for="item in navItems"
            :key="item.id"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile v-for="subItem in item.items" :key="subItem.title">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <v-flex shrink>
              <div>
                <v-breadcrumbs :items="breadcrumbItems" divider=">"></v-breadcrumbs>
              </div>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer color="blue-grey" class="white--text" app>
        <span>Vuetify</span>
        <v-spacer></v-spacer>
        <span>&copy; 2017</span>
      </v-footer>
    </v-app>

    <v-dialog v-model="logoutDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">您確定要退出嗎?</v-card-title>
        <v-card-text>退出前請先確認所有操作都已儲存成功!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" flat="flat" @click="logoutDialog = false">不要退出</v-btn>
          <v-btn color="red darken-1" flat="flat" @click="logout">確定退出</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="infoDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">修改資料</v-card-title>
        <v-card-text>這裡是修改資料的地方</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" flat="flat" @click="infoDialog = false">不要修改</v-btn>
          <v-btn color="red darken-1" flat="flat" @click="infoDialog = false">確定修改</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="passwordDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">修改密碼?</v-card-title>
        <v-card-text>這裡是修改密碼的地方!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" flat="flat" @click="passwordDialog = false">不要修改</v-btn>
          <v-btn color="red darken-1" flat="flat" @click="passwordDialog = false">確定修改</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { apiAuthUser, apiLogout } from "@/services/oauth-api.js";
export default {
  name: "home-layout",
  data: () => ({
    logoutDialog: false,
    infoDialog: false,
    passwordDialog: false,
    drawerLeft: null,
    drawerRight: null,
    userName: null
  }),
  props: {
    toolbarProgramItems: Array,
    toolbarNotificationItems: Array,
    toolbarUserItems: Array,
    navItems: Array,
    breadcrumbItems: Array
  },
  created: function() {
    apiAuthUser()
      .then(res => {
        this.$store.commit("setAuthUser", res.data);
        this.userName = "你好, " + this.$store.state.authUser.name;
      })
      .catch(err => {
        console.log(err.response.statusText);
      });
  },
  methods: {
    openDialog(type) {
      if (type == "logout") {
        this.logoutDialog = true;
      }
      if (type == "info") {
        this.infoDialog = true;
      }
      if (type == "password") {
        this.passwordDialog = true;
      }
    },
    logout() {
      apiLogout(this.$store.state.authUser.id)
        .then(res => {
          localStorage.removeItem("api_token");
          this.logoutDialog = false;
          this.goRoute("login");
          console.log(res);
        })
        .catch(err => {
          console.log(err.response.statusText);
          console.log("登出失敗");
        });
    },
    goRoute(path) {
      this.$router.push(path);
    }
  }
};
</script>
