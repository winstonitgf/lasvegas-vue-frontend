<template>
  <v-dialog :value="informationDialog" max-width="290">
    <v-card>
      <v-card-title class="headline">修改資訊</v-card-title>
      <v-card-text>存檔前請確認資料正確無誤</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="grey darken-1" @click="informationDialogClick">取消修改</v-btn>
        <v-btn text color="red darken-1" @click="confirm">確定修改</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("layout");

export default {
  name: "lasvegas-layout-dialog-information",
  data: () => ({}),
  props: {},
  methods: {
    ...mapActions({
      informationDialogClick: "informationDialogClick"
    }),
    confirm() {
      this.informationDialogClick();
      this.$emit("confirm");
    }
  },
  computed: {
    ...mapGetters({
      informationDialog: "informationDialog"
    })
  }
};
</script>
