<template>
  <v-dialog :value="passwordDialog" max-width="290">
    <v-card>
      <v-card-title class="headline">您確定要更改密碼嗎</v-card-title>
      <v-card-text>更改後請記得修改後的密碼</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="grey darken-1" @click="passwordDialogClick">不要更改</v-btn>
        <v-btn text color="red darken-1" @click="confirm">確定更改</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("layout");

export default {
  name: "lasvegas-layout-dialog-password",
  data: () => ({}),
  props: {},
  methods: {
    ...mapActions({
      passwordDialogClick: "passwordDialogClick"
    }),
    confirm() {
      this.passwordDialogClick();
      this.$emit("confirm");
    }
  },
  computed: {
    ...mapGetters({
      passwordDialog: "passwordDialog"
    })
  }
};
</script>
