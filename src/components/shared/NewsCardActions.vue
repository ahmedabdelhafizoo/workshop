<template>
  <div
    class="news-card__footer d-flex align-items-center justify-content-between"
  >
    <span class="news-card__date">{{ formatDate(newsItem.published) }}</span>
    <div class="d-flex align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30.494"
        height="26.98"
        viewBox="0 0 30.494 26.98"
        class="love-icon mx-3"
        @click="handleFavoriteClass($event)"
      >
        <path
          d="M27.7,6.617a7.234,7.234,0,0,0-10.233,0L16.07,8.012,14.675,6.617A7.236,7.236,0,1,0,4.442,16.85l1.394,1.394L16.07,28.478,26.3,18.245,27.7,16.85a7.234,7.234,0,0,0,0-10.233Z"
          transform="translate(-0.823 -2.997)"
          fill="none"
          stroke="#b27208"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </svg>
      <div class="news-card__share-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26.399"
          height="29.215"
          viewBox="0 0 26.399 29.215"
        >
          <path
            d="M25,22.65a4.271,4.271,0,0,0-2.875,1.129L11.668,17.693a4.8,4.8,0,0,0,.132-1.027,4.8,4.8,0,0,0-.132-1.027L22.007,9.612A4.39,4.39,0,1,0,20.6,6.4a4.8,4.8,0,0,0,.132,1.027L10.392,13.454a4.4,4.4,0,1,0,0,6.424l10.442,6.1a4.138,4.138,0,0,0-.117.953A4.282,4.282,0,1,0,25,22.65Z"
            transform="translate(-3 -2)"
            fill="#b27208"
          />
        </svg>
        <div class="shadow-sm share-options">TODO: SOON</div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/helpers";
export default {
  name: "NewsCardActions",
  props: {
    newsItem: {
      required: true,
      type: Object,
    },
  },
  methods: {
    handleFavoriteClass(e) {
      e.currentTarget.classList.toggle("active");
    },
    formatDate,
  },
};
</script>
