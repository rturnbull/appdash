<template>
  <div>
    <!-- NAV DRAWER ACTUATOR BEGINS-->
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <!-- NAV DRAWER ACTUATOR ENDS -->
    <v-navigation-drawer
      app
      v-model="drawer"
      :dense="this.navDrawerPreferences.dense"
      :color="this.navDrawerPreferences.color"
      :dark="this.navDrawerPreferences.dark"
      :mini-variant="this.navDrawerPreferences.mini"
      :mini-variant-width="navDrawerPreferences.miniVariantWidth"
      :expand-on-hover="navDrawerPreferences.expandOnHover"
      :permanenet="this.navDrawerPreferences.permanent"
      :temporary="this.navDrawerPreferences.temporary"
      :xabsolute="this.navDrawerPreferences.absolute"
      :right="this.navDrawerPreferences.right"
      :clipped="this.navDrawerPreferences.clipped"
    >
      <!--       <v-list nav>
        <v-list-item-group>
          <v-list-item two-line>
            <v-list-item-avatar xcolor="accent">
              <span
                class="white--text headline"
                :value="this.signedInProfileInitials"
                >{{ signedInProfileInitials }}</span
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Kērgiva</v-list-item-title>

              <v-list-item-subtitle>{{
                this.signedInProfileName
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-item v-for="item in items" :key="item.text" link :to="item.to">
          <v-divider v-if="item.divider" :key="item.divider" inset></v-divider>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>
/********************************************************************************
/////////////////////////////////////////////////////////////////////////////////
SCRIPT STARTS HERE
/////////////////////////////////////////////////////////////////////////////////
********************************************************************************/

<script>
export default {
  name: "NavDrawer",
  /*   data() {
    return {
      profile: {},
      drawer: true,
      group: null,
      items: [
        { text: "My Family", icon: "mdi-account-group", divider: false },
        { text: "Appointments", icon: "mdi-calendar", divider: false },
        { text: "", icon: "", divider: true },
        {
          text: "Preferences",
          icon: "mdi-account-settings",
          divider: false,
          to: "/preferences"
        },
        { text: "Give Feedback", icon: "mdi-message", divider: false },
        { text: "Get Help", icon: "mdi-help-circle", divider: false }
      ]
    };
  } */
  computed: {
    profiles: function() {
      const profiles = this.$store.getters["Profiles/profiles"];
      console.log(
        "NavDrawer computed 'profiles': Returning " + JSON.stringify(profiles)
      );
      return profiles;
    },

    signedInProfileName: function() {
      if (this.profiles.length != 0) {
        const name = this.profiles[0].name;
        console.log(
          "NavDrawer computed 'signedInProfileName': Returning " + name
        );
        return name;
      } else {
        console.log(
          "NavDrawer computed 'signedInProfileName': Returning NULL."
        );
        return null;
      }
    },
    /* 
      signedInProfileInitials
      Purloined the following from a post by "Shanoor", here:
      https://stackoverflow.com/questions/33076177/getting-name-initials-using-js
    */
    signedInProfileInitials: function() {
      if (this.signedInProfileName) {
        const name = this.signedInProfileName; //name or null
        var initials = name.match(/\b\w/g) || [];
        initials = (
          (initials.shift() || "") + (initials.pop() || "")
        ).toUpperCase();
        return initials;
      } else {
        console.log(
          "NavDrawer computed 'signedInProfileInitials': Computed 'signedInProfileName' returned NULL."
        );
        return null;
      }
    },
    navDrawerPreferences: function() {
      return this.$store.getters["AppState/navDrawerPreferences"];
    }
  }
};
</script>
