<template>
  <div>
    <v-card
      class="dashboard-card"
      hover
      v-for="(value, index) in dashboardDatas"
      v-bind:key="index"
    >
      <v-card-title>{{ value.title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text
        style="padding:5px;"
        v-for="(value, index) in value.contents"
        v-bind:key="index"
      >{{ value.text }} : {{ value.value }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data: () => ({}),
  props: {
    dashboardDatas: Array
  },
  methods: {}
};
</script>
<style scoped>
.dashboard-card {
  background-color: rgb(249, 249, 249);
  width: 250px;
  height: 200px;
  margin: 1em;
  display: inline-table;
}
</style>

