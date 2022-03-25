<template>
  <header class="header d-flex flex-column" :class="{ show: showNavBar }">
    <nav class="header__top-nav" ref="header__top-nav">
      <div class="container d-flex justify-content-between align-items-center">
        <router-link to="/" class="header__logo">
          <img
            src="@/assets/images/logo.svg"
            alt="logo image"
            width="auto"
            height="auto"
          />
        </router-link>

        <div class="d-flex align-items-center">
          <div class="header__options d-none d-lg-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.802"
              height="24.8"
              viewBox="0 0 24.802 24.8"
            >
              <path
                id="contrast"
                d="M26.492,10.965a12.046,12.046,0,0,0-.939-2.223,12.55,12.55,0,0,0-2.134-2.861,12.4,12.4,0,1,0,0,17.537,12.55,12.55,0,0,0,2.134-2.861,12.046,12.046,0,0,0,.939-2.223,12.4,12.4,0,0,0,0-7.369ZM4.022,14.65A10.629,10.629,0,0,1,14.65,4.021V25.279A10.629,10.629,0,0,1,4.022,14.65Z"
                transform="translate(-2.251 -2.25)"
                fill="#fff"
              />
            </svg>

            <div href="#" class="header__options__font-option mx-4">
              <span>A</span>
              <span>A</span>
              <span>A</span>
            </div>
          </div>

          <div class="header__actions d-none d-lg-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                id="Path_58308"
                data-name="Path 58308"
                d="M30.6,29.616,25.15,24.163a10.5,10.5,0,1,0-.987.987L29.616,30.6a.7.7,0,0,0,.987-.987ZM10.861,23.694a9.074,9.074,0,1,1,6.416,2.658,9.016,9.016,0,0,1-6.416-2.658Z"
                transform="translate(-6.808 -6.808)"
                fill="#fff"
              />
            </svg>
            <select>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>

            <button class="header__actions__btn">Sign In</button>
          </div>

          <button
            class="header__toggle-nav-btn"
            :class="{ open: showNavBar }"
            @click="toggleNavBar"
            aria-label="toggle header button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
    <div class="header__container container flex-grow-1 flex-column">
      <div class="d-flex justify-content-between align-items-end pb-0 pb-lg-5">
        <ul
          class="header__nav px-0 m-0 d-flex flex-column justify-content-around"
        >
          <li v-for="(link, index) in headerLinks" :key="index">
            <router-link :to="link.path">{{ link.text }}</router-link>
          </li>
        </ul>
        <div class="text-uppercase">
          <p>Follow us</p>
          <social-icons />
        </div>
      </div>

      <div
        class="header__footer mt-auto d-flex flex-column flex-md-row align-items-center justify-content-md-between pt-4"
      >
        <ul class="d-flex px-0 m-0 mx-2">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
        <p class="mx-0 mt-2 mt-md-0">
          &copy; 2022 Linkdevelopment Sub From A15
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import SocialIcons from "@/components/UI/SocialIcons.vue";
export default {
  components: { SocialIcons },
  name: "AppHeader",
  data() {
    return {
      showNavBar: false,
      headerLinks: [
        {
          text: "Why Invest",
          path: "#",
        },
        {
          text: "About",
          path: "#",
        },
        {
          text: "Industries",
          path: "#",
        },
        {
          text: "Programs & Incentives",
          path: "#",
        },
        {
          text: "Locations",
          path: "#",
        },
        {
          text: "News",
          path: "#",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let headerElement = this.$refs["header__top-nav"];
      let scrollCondition = window.scrollY >= headerElement.clientHeight;
      // add fixed classe if the condition is true
      headerElement.classList.toggle("sticky", scrollCondition);
    });
  },
  methods: {
    toggleNavBar() {
      this.showNavBar = !this.showNavBar;
      document.body.classList.toggle("overflow-hidden");
    },
  },
};
</script>
