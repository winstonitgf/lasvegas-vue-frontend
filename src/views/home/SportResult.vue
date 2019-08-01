<template>
  <div>
    <criteria v-bind:sportList="sportList"></criteria>
    <data-presentation></data-presentation>
  </div>
</template>

<script>
import Criteria from "@/components/home/sport-result/Criteria.vue";
import DataPresentation from "@/components/home/sport-result/DataPresentation.vue";
export default {
  name: "lasvegas-app-layout-sport-result",
  components: {
    Criteria,
    DataPresentation
  },
  data: () => ({
    sportList: [
      {
        text: "足球",
        value: "football",
        selected: false
      },
      {
        text: "藍球",
        value: "basketball",
        selected: false
      },
      {
        text: "網球",
        value: "tennis",
        selected: false
      },
      {
        text: "排球",
        value: "volleyball",
        selected: false
      },
      {
        text: "棒球",
        value: "baseball",
        selected: false
      },
      {
        text: "冠軍",
        value: "changping",
        selected: false
      }
    ]
  }),
  props: {},
  methods: {}
};
</script>
