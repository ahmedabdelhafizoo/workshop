<template>
  <div class="news-card">
    <router-link
      :to="{ name: 'NewsDetails', params: { id: newsItem.id } }"
      class="news-card__img"
    >
      <img
        :src="newsItem.urlToImage"
        alt="news image"
        @error="(e) => (e.target.src = 'https://via.placeholder.com/300x150')"
        loading="lazy"
      />
    </router-link>
    <router-link :to="{ name: 'NewsDetails', params: { id: newsItem.id } }">
      <h3 class="news-card__title mt-2 mb-3 mb-xxxl-4">
        {{ newsItem.title }}
      </h3>
    </router-link>
    <NewsCardActions :newsItem="newsItem" />
  </div>
</template>

<script>
import NewsCardActions from "@/components/shared/NewsCardActions.vue";
export default {
  components: { NewsCardActions },
  name: "NewsCard",
  props: {
    newsItem: {
      required: true,
      type: Object,
    },
  },
};
</script>
