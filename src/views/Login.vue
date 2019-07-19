<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      href="https://codepen.io/johnjleider/pen/wyYVVj"
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="loginInfo.email"
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="loginInfo.password"
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    value="12345"
                  ></v-text-field>
                  <v-text-field
                    v-model="otpCode.passcode"
                    prepend-icon="lock"
                    name="otp"
                    label="otp"
                    type="text"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import { apiUserLogin, apiOtpValidate } from "@/utilities/api.js";
export default {
  name: "login",
  components: {},
  data: () => ({
    loginInfo: {
      email: "farmstrong@example.net",
      password: "12345"
    },
    otpCode: {
      passcode: ""
    }
  }),
  props: {},
  methods: {
    login() {
      apiOtpValidate(this.otpCode)
        .then(res => {
          apiUserLogin(this.loginInfo)
            .then(res => {
              localStorage.setItem("api_token", res.data);
              this.$router.push("/home");
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
