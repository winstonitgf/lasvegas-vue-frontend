<template>
  <div>
    <criteria></criteria>
    <data-presentation></data-presentation>
  </div>
</template>

<script>
import Criteria from "@/components/home/sport-schedule/Criteria.vue";
import DataPresentation from "@/components/home/sport-schedule/DataPresentation.vue";
export default {
  name: "lasvegas-app-layout-sport-schedule",
  components: {
    Criteria,
    DataPresentation
  },
  data: () => ({}),
  props: {},
  methods: {}
};
</script>
