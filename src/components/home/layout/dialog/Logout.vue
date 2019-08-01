<template>
  <v-dialog :value="logoutDialog" max-width="290">
    <v-card>
      <v-card-title class="headline">您確定要退出嗎?</v-card-title>
      <v-card-text>退出前請先確認所有操作都已儲存成功!</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="grey darken-1" @click="logoutDialogClick">不要退出</v-btn>
        <v-btn text color="red darken-1" @click="logout">確定退出</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("layout");

export default {
  name: "lasvegas-layout-dialog-logout",
  data: () => ({}),
  props: {},
  methods: {
    ...mapActions({
      logoutDialogClick: "logoutDialogClick"
    }),
    logout() {
      this.logoutDialogClick();
      this.$emit("logout");
    }
  },
  computed: {
    ...mapGetters({
      logoutDialog: "logoutDialog"
    })
  }
};
</script>
