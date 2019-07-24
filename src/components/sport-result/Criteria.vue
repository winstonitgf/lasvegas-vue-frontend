<template>
  <div>
    <v-btn
      v-for="(value, index) in sportList"
      v-bind:key="index"
      outlined
      @click="SportResult(value)"
    >{{ value.text }}</v-btn>

    <v-card height="200px" flat>
      <div class="headline text-xs-center pa-5">Active: {{ bottomNav }}</div>
      <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
        <v-btn color="teal" flat value="recent">
          <span>Recent</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="favorites">
          <span>Favorites</span>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="nearby">
          <span>Nearby</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "dashboard-criteria",
  data: () => ({
    bottomNav: "recent"
  }),
  props: {
    sportList: Array
  },
  methods: {
    SportResult(data) {
      data.selected = true;
    }
  }
};
</script>
<style scoped>
</style>

