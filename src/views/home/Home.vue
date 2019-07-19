<template>
  <div>
    <h1>This is an Home page</h1>
    <router-link :to="{ name: 'hot-sport'}">hot-sport</router-link>
    <br />
    <router-link :to="{ name: 'running-ball'}">running-ball</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data: () => ({}),
  props: {},
  methods: {}
};
</script>
