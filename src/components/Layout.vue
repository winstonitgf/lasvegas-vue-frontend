<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar color="blue-grey" dark fixed app clipped-right>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>System Management</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-menu offset-y open-on-hover :nudge-width="150">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>apps</v-icon>
              </v-btn>
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
              <v-btn icon v-on="on">
                <v-icon>info</v-icon>
              </v-btn>
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
                <v-btn color="primary" flat="flat" dark @click.stop="dialog = true">{{ item.text }}</v-btn>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn @click.stop="right = !right" icon v-on="on">
            <v-icon>person</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-navigation-drawer fixed v-model="drawer" app>
        <v-list>
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
      <v-navigation-drawer right temporary v-model="right" fixed></v-navigation-drawer>
      <v-footer color="blue-grey" class="white--text" app>
        <span>Vuetify</span>
        <v-spacer></v-spacer>
        <span>&copy; 2017</span>
      </v-footer>
    </v-app>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">您確定要退出嗎?</v-card-title>
        <v-card-text>退出前請先確認所有操作都已儲存成功!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" flat="flat" @click="dialog = false">不要退出</v-btn>
          <v-btn color="red darken-1" flat="flat" @click="dialog = false">確定退出</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "home-layout",
  data: () => ({
    dialog: false,
    drawer: true,
    right: null
  }),
  props: {
    toolbarProgramItems: Array,
    toolbarNotificationItems: Array,
    toolbarUserItems: Array,
    navItems: Array,
    breadcrumbItems: Array
  }
};
</script>
