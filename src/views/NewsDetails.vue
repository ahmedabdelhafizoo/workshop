<template>
  <div>
    <InnerHero title="News" />
    <h3 class="text-muted text-center py-5 my-5" v-if="isLoading">
      Loading...
    </h3>
    <div v-else>
      <div class="container py-5" v-if="newsItem">
        <div class="px-xxxl-4 news-details">
          <div class="row">
            <div class="col-xl-6 mb-4 mb-xl-0">
              <div class="news-details__img">
                <img
                  :src="newsItem.urlToImage"
                  alt="news details image"
                  class="w-100"
                  @error="
                    (e) =>
                      (e.target.src = 'https://via.placeholder.com/800x400')
                  "
                />
              </div>
            </div>

            <div class="col-xl-6">
              <div>
                <h2 class="news-details__title mb-3">
                  {{ newsItem.title }}
                </h2>
                <NewsCardActions :newsItem="newsItem" />
                <p class="news-details__desc mt-3">
                  {{ newsItem.description }}
                </p>
              </div>
            </div>
          </div>

          <p
            class="news-details__desc mt-4"
            v-html="newsItem.content.replaceAll('\n\r', '<br/><br/>')"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InnerHero from "@/components/layout/InnerHero.vue";
import NewsCardActions from "@/components/shared/NewsCardActions.vue";
export default {
  components: { InnerHero, NewsCardActions },
  name: "NewsList",
  props: {
    id: {
      required: true,
    },
  },
  created() {
    this.$store.dispatch("news/getNewsItem", this.id);
  },
  computed: {
    isLoading() {
      return this.$store.getters["getLoadingStatus"];
    },
    newsItem() {
      return this.$store.getters["news/getNewsDetails"];
    },
  },
};
</script>
