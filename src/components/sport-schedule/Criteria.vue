<template>
  <div>
    <div style="display:inline-flex">
      <v-select :items="items" style="width: 20%;margin-left:5px;" label="類型"></v-select>
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
            style="width: 20%;margin-left:5px;"
            label="日期"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker @input="menu2 = false"></v-date-picker>
      </v-menu>

      <v-select style="width: 20%;margin-left:5px;" :items="items" label="注額"></v-select>
      <v-btn style="margin-left:5px;margin-top:10px;">
        <span>查詢</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "sport-schedule-schedule",
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    menu2: false
  }),
  props: {},
  methods: {}
};
</script>
<style scoped>
</style>

