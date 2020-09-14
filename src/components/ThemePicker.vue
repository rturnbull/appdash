<template>
  <div>
    <!-- <v-container> -->
    <v-layout row>
      <v-flex xs12 md8 lg10>
        <v-card class="grey lighten-5" elevation="0">
          <v-card-text>
            <p xclass="display-1 text--success" class="headline mb-0">
              Themes
            </p>
          </v-card-text>
          <v-select
            label="Choose your favorite theme"
            width="44px"
            :value="theme.selected.name"
            :items="themeNames"
            @change="onSelect"
          ></v-select>

          <v-card
            :class="themeLayout.colorClass"
            :color="this.theme.selected.primary"
            text
            tile
            dark
            :height="themeLayout.height"
            :elevation="themeLayout.elevation"
          >
            Primary
          </v-card>

          <v-card
            :class="themeLayout.colorClass"
            :color="this.theme.selected.secondary"
            text
            tile
            dark
            :height="themeLayout.height"
            :elevation="themeLayout.elevation"
          >
            Secondary
          </v-card>

          <v-card
            :class="themeLayout.colorClass"
            :color="this.theme.selected.accent"
            text
            tile
            dark
            :height="themeLayout.height"
            :elevation="themeLayout.elevation"
          >
            Accent
          </v-card>
          <!-- BUTTONS -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="apply" color="accent">
              Apply
            </v-btn>
            <v-btn :to="navigate.to" text color="accent">
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "ThemePicker",
  data() {
    return {
      navigate: { to: "" },
      theme: {
        selected: {}
      },
      themeLayout: {
        cols: "8",
        colorClass: "pa-2",
        class: "grey lighten-5",
        sm: "4",
        height: "40",
        elevation: "0"
      }
    };
  },
  mounted: function() {
    this.preselect();
  },
  computed: {
    themeNames: function() {
      return this.getThemeNames();
    },
    themes: function() {
      return this.$store.getters["Themes/themes"];
    },
    user: function() {
      return this.$store.getters["Auth/user"];
    }
  },
  methods: {
    getThemeNames() {
      var list = [];
      for (var theme of this.themes) {
        list.push(theme.name);
      }
      return list;
    },
    apply() {
      const payload = {
        themeName: this.theme.selected.name,
        uid: this.user.uid
      };
      this.$store.commit("Themes/setActiveTheme", this.theme.selected.name);
      this.$store.dispatch("UserPrefs/saveThemeUserPreferences", payload);
    },
    preselect() {
      this.theme.selected = this.$store.getters["Themes/activeTheme"];
    },
    onSelect(selected) {
      for (var theme of this.themes) {
        if (theme.name === selected) {
          this.theme.active = true;
          this.theme.selected = theme;
        } else {
          if (this.theme.active != false) {
            this.theme.active = false;
          }
        }
      }
    }
  }
};
</script>
