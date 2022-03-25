<template>
  <div id="app">
    <AppHeader />
    <LoadingSpinner />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import LoadingSpinner from "@/components/layout/LoadingSpinner.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    LoadingSpinner,
  },
};
</script>
