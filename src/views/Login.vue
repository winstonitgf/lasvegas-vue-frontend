<template>
  <app-form @login="login"></app-form>
</template>


<script>
import { apiUserLogin, apiOtpValidate } from "@/apis/oauth-api.js";
import AppForm from "@/components/login/Form.vue";

export default {
  name: "login",
  components: {
    AppForm
  },
  data: () => ({
    loginInfo: {
      account: "skyheart",
      password: "12345"
    },
    otpCode: {
      passcode: ""
    }
  }),
  props: {},
  methods: {
    login(loginInfo, otpCode) {
      apiOtpValidate(otpCode)
        .then(res => {
          apiUserLogin(loginInfo)
            .then(res => {
              localStorage.setItem("api_token", res.data);
              this.$router.push("/home");
            })
            .catch(err => {
              alert(err.response.statusText);
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
          alert(err.response.statusText);
        });
    }
  }
};
</script>
