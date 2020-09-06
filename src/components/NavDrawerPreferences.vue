<template>
  <div>
    <v-row justify="center">
      <v-col :cols="8">
        <!-- COMPONENT MAIN CARD -->
        <v-card class="grey lighten-5" elevation="0">
          <v-card-text>
            <p class="display-1 text--success">
              Navigation Drawer
            </p>
          </v-card-text>

          <v-radio-group v-model="navDrawerPref" column>
            <v-radio
              label="Default, slide-out"
              value="DEFAULT_SLIDE_OUT"
            ></v-radio>
            <v-radio
              label="Default, permanent"
              value="DEFAULT_PERMANENT"
            ></v-radio>
            <v-radio label="Mini, slide-out" value="MINI_SLIDE_OUT"></v-radio>
            <v-radio label="Mini, permanent" value="MINI_PERMANENT"></v-radio>
          </v-radio-group>

          <!-- BUTTONS -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="onApply" color="accent">
              Apply
            </v-btn>
            <v-btn text color="accent">
              Reset
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "NavDrawerPreferences",
  data: function() {
    return {
      navDrawerPref: null
    };
  },
  computed: {
    /*     navDrawerPreference: function() {
      return this.$state.getters["AppState/navDrawerPreference"];
    }, */
    /*     navDrawerSettings: function() {
      return this.$state.getters["AppState/navDrawerSettings"];
    } */
  },
  watch: {
    navDrawerPref: function() {
      this.setNavDrawerPreference();
    }
  },
  methods: {
    onApply: function() {
      return null;
    },
    onReset: function() {
      return null;
    },
    setNavDrawerPreference: function() {
      this.$store.dispatch(
        "AppState/setNavDrawerPreference",
        this.navDrawerPref
      );
    }
  }
};
</script>
