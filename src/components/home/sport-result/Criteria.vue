<template>
  <div>
    <div>
      <v-btn style="margin:2px;" v-for="(value, index) in sportList" v-bind:key="index">
        <span>{{ value.text }}</span>
      </v-btn>
    </div>
    <div style="display:flex; align-items: center;">
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            style="flex:initial; margin-right:5px;"
            v-model="date"
            label="日期"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
      <v-btn color="primary" style="flex:initial;">
        <span>查詢</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "sport-result-criteria",
  data: () => ({
    menu2: false,
    date: new Date().toISOString().substr(0, 10)
  }),
  props: {
    sportList: Array
  },
  methods: {}
};
</script>
<style scoped>
</style>
