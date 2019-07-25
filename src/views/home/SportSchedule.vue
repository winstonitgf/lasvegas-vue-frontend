<template>
  <div>
    <criteria></criteria>
    <data-presentation></data-presentation>
  </div>
</template>

<script>
import Criteria from "@/components/sport-schedule/Criteria.vue";
import DataPresentation from "@/components/sport-schedule/DataPresentation.vue";
export default {
  name: "sport-schedule",
  components: {
    Criteria,
    DataPresentation
  },
  data: () => ({}),
  props: {},
  methods: {}
};
</script>
