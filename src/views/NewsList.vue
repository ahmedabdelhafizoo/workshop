<template>
  <div>
    <InnerHero title="News">
      <div class="">
        <!-- <p>Filter by:</p> -->
        <div class="d-flex">
          <input
            type="text"
            placeholder="Search..."
            class="inner-hero__input"
            v-model.trim="search"
            @keyup="handleSearch"
          />
        </div>
      </div>
    </InnerHero>

    <h3 class="text-muted text-center py-5 my-5" v-if="isLoading">
      Loading...
    </h3>
    <div v-else>
      <div
        class="container py-5"
        v-if="currentNewsList && currentNewsList.length"
      >
        <div class="px-xxxl-4">
          <div class="row">
            <div
              class="col-sm-6 col-lg-4 mb-5"
              v-for="newsItem in currentNewsList"
              :key="newsItem.id"
            >
              <news-card :newsItem="newsItem" />
            </div>
          </div>
          <div class="text-center">
            <a
              href="#"
              @click.prevent="handlePaging"
              to="news-list"
              class="link link--dark"
              v-if="loadMoreCondition"
            >
              Load More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <g fill="none" stroke="#fff" stroke-width="1">
                  <circle cx="18" cy="18" r="18" stroke="none" />
                  <circle cx="18" cy="18" r="17.5" fill="none" />
                </g>
                <path
                  d="M10.414,8.534,9.8,9.145,12.4,11.739H1.125V12.6H12.4L9.8,15.2l.611.611,3.637-3.637Z"
                  transform="translate(10.512 5.929)"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <h3 class="text-muted text-center py-5 my-5" v-else>
        No Results Found :)
      </h3>
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/shared/NewsCard.vue";
import InnerHero from "@/components/layout/InnerHero.vue";
export default {
  components: { NewsCard, InnerHero },
  name: "NewsList",
  created() {
    this.$store.dispatch("news/getNewsDetails");
  },
  computed: {
    isLoading() {
      return this.$store.getters["getLoadingStatus"];
    },
    newsList() {
      // return this.$store.getters["news/getNewsListWithPaging"](this.page);
      return this.$store.getters["news/getNewsList"];
    },
    currentNewsList() {
      return this.newsList
        ?.filter((item) =>
          item.title.toLowerCase().includes(this.search.toLowerCase())
        )
        .slice(0, this.page * this.perPage);
    },
    loadMoreCondition() {
      return (
        this.currentNewsList.length <
        this.newsList?.filter((item) =>
          item.title.toLowerCase().includes(this.search.toLowerCase())
        ).length
      );
    },
  },
  data() {
    return {
      page: 1,
      perPage: 6,
      search: "",
    };
  },
  methods: {
    handleSearch() {
      this.page = 1;
    },
    handlePaging() {
      this.page++;
    },
  },
};
</script>
