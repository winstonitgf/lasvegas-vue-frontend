<template>
  <v-footer color="blue-grey" class="white--text" app>
    <span>Vuetify</span>
    <v-spacer></v-spacer>
    <span>&copy; 2017</span>
  </v-footer>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("layout");

export default {
  name: "lasvegas-layout-footer",
  data: () => ({}),
  props: {},
  methods: {},
  computed: {}
};
</script>
