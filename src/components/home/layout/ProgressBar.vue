<template>
  <v-progress-linear style="z-index:999" v-if="loading" indeterminate color="cyan"></v-progress-linear>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("layout");

export default {
  name: "lasvegas-layout-progress-bar",
  data: () => ({}),
  props: {},
  methods: {},
  mounted: function() {},
  computed: {
    ...mapGetters({
      loading: "loading"
    })
  }
};
</script>
