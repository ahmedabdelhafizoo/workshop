<template>
  <section class="hero">
    <img
      src="@/assets/images/home/hero-shape.svg"
      alt="hero bg"
      class="hero__bg"
    />

    <div class="hero__container position-relative">
      <div class="d-flex flex-wrap flex-lg-nowrap hero__slider">
        <div
          class="hero__slider__actions d-none d-lg-flex align-items-center justify-content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67.9"
            height="38.208"
            viewBox="0 0 67.9 38.208"
            @click="$refs.carousel.prev()"
          >
            <path
              d="M49.923,8.534l-3.211,3.211L60.335,25.368H1.125v4.541H60.333L46.71,43.531l3.211,3.211,19.1-19.1Z"
              transform="translate(69.025 46.742) rotate(180)"
              fill="#b27208"
            />
          </svg>

          <div class="hero__slider__indicators mx-3 text-center">
            <p>{{ activeSlide }}</p>
            / {{ banner.slider.length }}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67.9"
            height="38.208"
            viewBox="0 0 67.9 38.208"
            @click="$refs.carousel.next()"
          >
            <path
              id="arrow-right"
              d="M49.923,8.534l-3.211,3.211L60.335,25.368H1.125v4.541H60.333L46.71,43.531l3.211,3.211,19.1-19.1Z"
              transform="translate(-1.125 -8.534)"
              fill="#b27208"
            />
          </svg>
        </div>
        <div class="container hero__content">
          <VueSlickCarousel
            v-bind="settings"
            ref="carousel"
            @reInit="updateActiveSlide"
            class="hero__slider__wrapper"
          >
            <div
              class="hero__slider__item text-white"
              v-for="item in banner.slider"
              :key="item.id"
            >
              <h2 class="hero__title">{{ item.title }}</h2>
              <h3 class="hero__desc">{{ item.desc }}</h3>
              <a :href="item.link" class="hero__link button button--circle">
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.635"
                  height="14.425"
                  viewBox="0 0 25.635 14.425"
                >
                  <path
                    d="M19.548,8.534,18.336,9.746l5.143,5.143H1.125V16.6H23.478l-5.143,5.143,1.212,1.212,7.213-7.213Z"
                    transform="translate(-1.125 -8.534)"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
          </VueSlickCarousel>
          <div class="hero__footer">
            <section
              class="investment-sectors d-flex flex-wrap flex-xxl-nowrap"
            >
              <div class="investment-sectors__intro">
                <h2 class="investment-sectors__title">
                  RECENT INVESTMENT ANNOUNCEMENTS
                </h2>
                <div
                  class="d-flex align-items-end justify-content-between mt-3 mt-md-0"
                >
                  <p class="investment-sectors__intro__desc mb-0">
                    Navigating the Opportunities of Africa’s Logistics Sector
                  </p>
                  <a href="#" target="_blank" class="button button--circle">
                    More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.635"
                      height="14.425"
                      viewBox="0 0 25.635 14.425"
                    >
                      <path
                        d="M19.548,8.534,18.336,9.746l5.143,5.143H1.125V16.6H23.478l-5.143,5.143,1.212,1.212,7.213-7.213Z"
                        transform="translate(-1.125 -8.534)"
                        fill="#B27208"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="investment-sectors__list">
                <div
                  class="investment-sectors__list__header d-flex align-items-start justify-content-between"
                >
                  <h2
                    class="investment-sectors__title investment-sectors__title--style-2"
                  >
                    Investment Sectors
                  </h2>
                  <a href="#" target="_blank" class="link">
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
                  </a>
                </div>

                <div class="row">
                  <div
                    class="col-6 col-sm-4 col-md-2 col-lg-4 col-xl-2 mb-4"
                    v-for="sector in banner.sectors"
                    :key="sector.id"
                  >
                    <div class="investment-sectors__list__item text-center">
                      <div
                        class="investment-sectors__list__item__icon"
                        v-html="sector.icon"
                      ></div>
                      <h3
                        class="investment-sectors__list__item__title mb-0 mt-3"
                      >
                        {{ sector.title }}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import banner from "@/API/banner";
export default {
  name: "Hero",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        fade: true,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              autoplay: true,
              autoplaySpeed: 5000,
            },
          },
        ],
      },
      activeSlide: 1,
      banner,
    };
  },
  methods: {
    updateActiveSlide() {
      this.activeSlide = this.$refs.carousel.$children[0]?.currentSlide + 1;
    },
  },
};
</script>
