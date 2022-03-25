<template>
  <section
    class="latest-news d-flex flex-column flex-xl-row"
    v-if="latestNews && latestNews.length"
  >
    <div class="section-title section-title--style-2">
      <h2>Latest news</h2>
    </div>
    <div class="section-container pr-0">
      <div class="d-flex justify-content-end mb-4 pb-2 pr-5">
        <router-link to="news-list" class="link link--dark">
          More
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
        </router-link>
      </div>
      <div class="latest-news__slider overflow-hidden" dir="rtl">
        <VueSlickCarousel v-bind="settings" ref="carousel">
          <div
            v-for="newsItem in latestNews"
            :key="newsItem.id"
            class="pr-4 pr-xxxl-5"
          >
            <NewsCard :newsItem="newsItem" />
          </div>
        </VueSlickCarousel>
        <div class="text-center mt-4 pt-2 latest-news__slider__actions">
          <a
            href="#"
            class="link link--dark"
            @click.prevent="$refs.carousel.next()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              class="mx-2 mx-xxxl-3"
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

          <a
            href="#"
            class="link link--dark"
            @click.prevent="$refs.carousel.prev()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              class="mx-2 mx-xxxl-3"
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
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import NewsCard from "@/components/shared/NewsCard.vue";
export default {
  components: { VueSlickCarousel, NewsCard },
  name: "LatestNews",
  created() {
    this.$store.dispatch("news/getNewsDetails");
  },
  computed: {
    latestNews() {
      return this.$store.getters["news/getHomeNewsList"];
    },
  },
  data() {
    return {
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3.2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
