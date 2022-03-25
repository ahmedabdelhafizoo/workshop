<template>
  <div class="home">
    <Hero />
    <Opportunities />
    <LatestNews />
  </div>
</template>

<script>
import Hero from "@/components/home/Hero.vue";
import Opportunities from "@/components/home/Opportunities.vue";
import LatestNews from "@/components/home/LatestNews.vue";
export default {
  name: "Home",
  components: { Hero, Opportunities, LatestNews },
};
</script>
