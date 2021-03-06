<template>
  <v-row justify="center">
    <v-col xs="12" md="10" lg="6">
      <v-card>
        <v-card-title>
          <span class="headline accent--text">Please sign up!</span>
        </v-card-title>
        <v-card-text id="signup">
          <v-form id="form1" ref="signupForm">
            <v-text-field
              type="text"
              id="text0"
              label="Name*"
              :rules="signupRules.name"
              v-model="user.name"
              autocomplete="off"
            ></v-text-field>
            <v-text-field
              type="email"
              id="text1"
              label="Email*"
              :rules="signupRules.email"
              v-model="user.email"
              autocomplete="off"
            ></v-text-field>
            <v-text-field
              id="text2"
              label="Password*"
              type="password"
              :rules="signupRules.pwd"
              v-model="user.password"
              autocomplete="off"
            ></v-text-field>
            <small>*indicates required field</small>
          </v-form>

          <!-- BEGIN ERROR -->
          <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
              <app-error
                type="info"
                @dismissed="onDismissed"
                :text="error.message"
              ></app-error>
            </v-flex>
          </v-layout>
          <!-- END ERROR -->

          <!-- BEGIN ALERT -->
          <v-layout row v-if="alert">
            <v-flex xs12 sm6 offset-sm3>
              <app-alert
                :type="alert.type"
                @dismissed="onDismissed"
                :text="alert.message"
              ></app-alert>
            </v-flex>
          </v-layout>
          <!-- END ALERT -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="clearForm">Clear</v-btn>
          <v-btn text @click="onSignup" :loading="loading">Sign Up</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      signupRules: {
        name: [
          v => (v ? v.length >= 3 || "Minimum length is 3 characters." : false)
        ],
        email: [
          v => (v ? v.length >= 1 || "Email is required." : false),
          v =>
            v
              ? this.validateEmail(v) || "Email is incorrectly formatted."
              : false
        ],
        pwd: [
          v => (v ? v.length >= 6 || "Minimum length is 6 characters." : false)
        ]
      },
      user: {
        email: "",
        name: "",
        password: ""
      }
    };
  },
  computed: {
    getUser() {
      return this.$store.getters["Auth/user"];
    },
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters.error;
    },
    alert() {
      return this.$store.getters.alert;
    }
  },
  watch: {
    getUser(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onSignup() {
      if (this.$refs.signupForm.validate) {
        this.$store.dispatch("Auth/signUserUp", {
          email: this.user.email,
          password: this.user.password,
          name: this.user.name
        });
      }
    },
    validateEmail(email) {
      const re = /^(?=.{1,64}@)(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(?=.{1,255}$)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
      return re.test(email);
    },
    onDismissed() {
      this.$store.dispatch("clearError");
      this.$store.dispatch("clearAlert");
    },
    clearForm() {
      this.$refs.signupForm.reset();
      if (this.alert) {
        this.$store.dispatch("clearError");
        this.$store.dispatch("clearAlert");
        this.$refs.signupForm.resetValidation();
      }
    }
  }
};
</script>
