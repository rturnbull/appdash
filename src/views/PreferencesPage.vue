<template>
  <v-container xclass="grey lighten-5">
    <v-row><h1>Preferences</h1></v-row>
    <v-row no-gutters>
      <!-- LEFT-HAND COLUMN -->
      <v-col cols="3">
        <v-list rounded>
          <!-- <v-subheader>REPORTS</v-subheader> -->
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="9">
        <ThemePicker v-if="item === 0" />
        <NavDrawerPreferences v-else-if="item === 1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import ThemePicker from "@/components/ThemePicker.vue";
import NavDrawerPreferences from "@/components/NavDrawerPreferences.vue";
export default {
  name: "PreferencesPage",
  components: { ThemePicker, NavDrawerPreferences },
  data: () => ({
    item: 0,
    items: [
      { text: "Themes", icon: "mdi-chart-pie" },
      { text: "Navigation", icon: "mdi-menu" },
      { text: "Another One", icon: "mdi-flag" }
    ]
  })
};
</script>
