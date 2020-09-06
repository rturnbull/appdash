<template>
  <v-list nav>
    <!-- NavDrawerHeader begins -->
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
    <!-- NavDrawerHeader ends -->

    <v-list-item v-for="item in items" :key="item.text" link :to="item.to">
      <v-divider v-if="item.divider" :key="item.divider" inset></v-divider>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "NavDrawerItems",
  data() {
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
  },
  computed: {
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
      }
    }
  }
};
</script>
