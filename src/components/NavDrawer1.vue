<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      :color="this.navDrawerStaticSettings.color"
      :dense="this.navDrawerStaticSettings.dense"
      :dark="this.navDrawerStaticSettings.dark"
      :mini-variant-width="this.navDrawerStaticSettings.miniVariantWidth"
      :right="this.navDrawerStaticSettings.right"
      :xabsolute="this.navDrawerStaticSettings.absolute"
      :clipped="this.navDrawerStaticSettings.clipped"
      :mini-variant="this.navDrawerUserSettings.mini"
      :expand-on-hover="this.navDrawerUserSettings.expandOnHover"
      :permanenet="this.navDrawerUserSettings.permanent"
      :temporary="this.navDrawerUserSettings.temporary"
    >
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavDrawer1",
  /* props: ["drawer"], */
  data: function() {
    return {
      drawer: false
    };
  },
  watch: {
    navDrawerState() {
      this.drawer = this.navDrawerState;
    }
  },
  computed: {
    user: function() {
      return this.$store.getters["Auth/user"];
    },
    navDrawerStaticSettings: function() {
      return this.$store.getters["AppState/navDrawerStaticSettings"];
    },
    navDrawerUserSettings: function() {
      return this.$store.getters["AppState/navDrawerUserSettings"];
    },
    navDrawerState: function() {
      return this.$store.getters["AppState/navDrawerUserSettings"].drawer;
    }
  }
};
</script>
