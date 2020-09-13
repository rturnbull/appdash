<template>
  <v-list nav>
    <!-- NavDrawerHeader begins -->
    <v-list-item-group>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />

          <span class="white--text headline"></span>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>StartApp</v-list-item-title>

          <v-list-item-subtitle>Douglas Green</v-list-item-subtitle>
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
      drawer: true,
      group: null,
      items: [
        { text: "Item 1", icon: "mdi-flag", divider: false },
        { text: "Item 2", icon: "mdi-flag", divider: false },
        { text: "Item 3", icon: "mdi-flag", divider: false },
        {
          text: "Preferences",
          icon: "mdi-account-settings",
          divider: false,
          to: "/preferences"
        }
      ]
    };
  }
};
</script>
