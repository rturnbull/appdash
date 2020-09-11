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

          <v-radio-group v-model="selected">
            <v-radio
              v-for="(option, index) in this.navDrawerUserOptions"
              :key="index"
              :label="option.name"
              :value="option.key"
            ></v-radio>
          </v-radio-group>

          <v-card-subtitle>
            <v-switch dense label="Expand on hover" v-model="expandOnHover">
            </v-switch>
            Applies to the mini variant. Expands the drawer when you hover over
            it, or tap it, if on a mobil device.
          </v-card-subtitle>

          <v-card-subtitle>
            <v-switch dense label="Dense" v-model="dense"> </v-switch>
            Sets the navigation items closer together
          </v-card-subtitle>

          <v-card-subtitle>
            <v-switch dense label="Right" v-model="right"> </v-switch>
            Displays the navigation drawer on the right of the screen
          </v-card-subtitle>

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
"use strict";
export default {
  name: "NavDrawerPreferences",
  data: function() {
    return {
      selected: null,
      dense: true,
      right: true,
      expandOnHover: true
    };
  },
  mounted: function() {
    this.selected = this.$store.getters["AppState/navDrawerUserSettings"].key;
  },
  computed: {
    navDrawerUserOptions: function() {
      return this.$store.getters["UserPrefs/navDrawerUserOptions"];
    }
  },
  methods: {
    onApply: function() {
      var uid = this.$store.getters["Auth/user"].uid;
      var prefs = {
        navDrawerPreference: this.selected,
        navDrawerExpandOnHover: this.expandOnHover,
        navDrawerDense: this.dense,
        navDrawerRight: this.right
      };
      this.$store.dispatch(
        "UserPrefs/saveNavDrawerUserPreferences",
        prefs,
        uid
      );
      //saveNavDrawerUserPreferences
    },
    onReset: function() {
      return null;
    }
  }
};
</script>
