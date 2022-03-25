<template>
  <footer class="footer">
    <div class="container py-5">
      <div class="row">
        <div class="col-sm-6 col-lg-4 d-flex flex-column">
          <h2 class="footer__title">Browse</h2>
          <ul class="footer__links px-0 mx-0 mb-0">
            <li v-for="(link, index) in footerLinks" :key="index">
              <router-link :to="link.path">{{ link.text }}</router-link>
            </li>
          </ul>
        </div>

        <div class="col-sm-6 col-lg-4 mt-5 mt-sm-0 d-flex flex-column">
          <h2 class="footer__title">Contact Us</h2>
          <ul class="footer__links px-0 mx-0 text-lowercase">
            <li>
              <router-link to="mailto:mail@linkdevelopment.com"
                >mail@linkdevelopment.com</router-link
              >
            </li>
            <li>
              <router-link to="tel:+02-12-14490877"
                >+02-12-14490877
              </router-link>
            </li>
          </ul>
          <p class="footer__desc mb-3">
            Please drop an email or call us, our representative will connect
            with you soon.
          </p>
          <div class="text-uppercase d-flex align-items-center mt-auto">
            <p class="mb-0 mr-3 mr-md-5">Follow us</p>
            <social-icons />
          </div>
        </div>
        <div class="col-lg-4 mt-5 mt-md-0 d-flex flex-column">
          <h2 class="footer__title">Newsletter</h2>
          <p class="footer__desc">Subscribe to our newsletter</p>
          <form class="footer__form mb-3">
            <input
              type="email"
              class="footer__form__input"
              placeholder="E-mail"
            />
            <button class="footer__form__btn">Send</button>
          </form>

          <p class="footer__copyrights mb-0 mt-auto">
            &copy; 2022 Linkdevelopment Sub From A15
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import SocialIcons from "@/components/UI/SocialIcons.vue";
export default {
  name: "AppFooter",
  components: { SocialIcons },
  data() {
    return {
      footerLinks: [
        {
          text: "Why Invest",
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
        {
          text: "About",
          path: "#",
        },
      ],
    };
  },
};
</script>
