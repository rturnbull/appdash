<template>
  <!-- https://materialdesignicons.com/cdn/2.0.46/ -->
  <!-- App.vue -->
  <div>
    <v-app>
      <v-navigation-drawer
        app
        v-model="drawer"
        :dense="this.navDrawerStaticSettings.dense"
        :color="this.navDrawerStaticSettings.color"
        :dark="this.navDrawerStaticSettings.dark"
        :mini-variant-width="this.navDrawerStaticSettings.miniVariantWidth"
        :right="this.navDrawerStaticSettings.right"
        :clipped="this.navDrawerStaticSettings.clipped"
        :key="key"
        :value="this.navDrawerUserSettings.value"
        :mini-variant="this.navDrawerUserSettings.mini"
        :expand-on-hover="this.navDrawerUserSettings.expandOnHover"
        :permanent="this.navDrawerUserSettings.permanent"
        :temporary="this.navDrawerUserSettings.temporary"
        :hide-overlay="this.navDrawerUserSettings.hideOverlay"
      />

      <!--       <v-navigation-drawer
        app
        xv-model="drawer"
        color="secondary"
        mini-variant="true"
        mini-variant-width="60"
        clipped="true"
        value="true"
        xexpand-on-hover="true"
        permanent="true"
        xtemporary="false"
        /> -->
      <v-app-bar color="primary" dark clipped-left app>
        <v-app-bar-nav-icon
          @click.native.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <v-btn href="" icon>
          <v-toolbar-title>
            <v-img
              src="kglogo_100sq.png"
              max-height="45px"
              max-width="45px"
              class="pt-5"
            ></v-img>
          </v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn href="/signup" :disabled="appbar.signupButtonDisabled" icon>
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
        <v-btn href="/signin" icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-container>
        <v-footer color="primary" dark app>
          (c) My App 2020
          <!-- -->
        </v-footer>
      </v-container>
    </v-app>
  </div>
</template>

<script>
/* import NavDrawer1 from "@/components/NavDrawer1.vue"; */
export default {
  name: "App",
  /* components: { NavDrawer1 }, */
  data: function() {
    return {
      drawer: false,
      key: false,
      group: null,
      items: [
        { text: "My Family", icon: "mdi-account-group", divider: false },
        { text: "Appointments", icon: "mdi-calendar", divider: false },
        { text: "", icon: "", divider: true },
        { text: "Settings", icon: "mdi-account-settings", divider: false },
        { text: "Give Feedback", icon: "mdi-message", divider: false },
        { text: "Get Help", icon: "mdi-help-circle", divider: false }
      ],
      appbar: {
        signupButtonDisabled: false
      }
    };
  },
  mounted: function() {
    this.setTheme();
    this.getSignedInUser();
  },
  watch: {
    userCache() {
      if (this.userCache) {
        this.createProfile();
      }
    },
    user() {
      if (this.user) {
        this.loadProfile();
        this.loadUserPreferences();
      }
    },
    activeTheme() {
      this.setTheme();
    },
    navDrawerUserPref() {
      if (this.navDrawerUserPref) {
        this.applyNavDrawerUserPreference();
      }
    }
  },
  computed: {
    userCache: function() {
      return this.$store.getters["userCache"];
    },
    error: function() {
      return this.$store.getters["AppState/error"];
    },
    profiles: function() {
      return this.$store.getters("Profiles/profiles");
    },
    user: function() {
      return this.$store.getters["Auth/user"];
    },
    activeTheme() {
      return this.$store.getters["Themes/activeTheme"];
    },

    /* NAV DRAWER */
    navDrawerUserPref: function() {
      return this.$store.getters["UserPrefs/navDrawerUserPref"];
    },
    navDrawerStaticSettings: function() {
      return this.$store.getters["AppState/navDrawerStaticSettings"];
    },
    navDrawerUserSettings: function() {
      return this.$store.getters["AppState/navDrawerUserSettings"];
    }
  },

  methods: {
    getSignedInUser() {
      this.$store.dispatch("Auth/getSignedInUser");
    },
    createProfile() {
      this.$store.dispatch("Profiles/createProfile", this.userCache);
    },
    loadProfile() {
      this.$store.dispatch("Profiles/loadProfile", this.user);
    },
    async loadUserPreferences() {
      await this.$store.dispatch(
        "UserPrefs/loadUserPreferences",
        this.user.uid
      );
    },
    applyNavDrawerUserPreference: async function() {
      await this.$store.dispatch(
        "AppState/applyNavDrawerUserPreference",
        this.navDrawerUserPref
      );
      /* Forces re-render of the nav drawer component */
      this.key = !this.key;
      this.$forceUpdate();
    },
    setTheme: function() {
      this.$vuetify.theme.themes.light.primary = this.$store.getters[
        "Themes/activeTheme"
      ].primary;
      this.$vuetify.theme.themes.light.secondary = this.$store.getters[
        "Themes/activeTheme"
      ].secondary;
      this.$vuetify.theme.themes.light.accent = this.$store.getters[
        "Themes/activeTheme"
      ].accent;
      this.$vuetify.theme.themes.light.info = this.$store.getters[
        "Themes/activeTheme"
      ].info;
      return null;
    },
    setAppbar() {
      var isDisabled = false;
      if (!this.user) {
        isDisabled = true;
      }
      this.appbar.signupButtonDisabled = isDisabled;
    }
  }
};
</script>
