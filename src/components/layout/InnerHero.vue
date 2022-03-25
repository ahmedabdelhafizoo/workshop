<template>
  <section class="inner-hero">
    <div class="container">
      <div
        class="px-xxxl-4 d-flex flex-column flex-md-row justify-content-md-between align-items-center"
      >
        <h1 class="inner-hero__title mb-3 mb-md-0">{{ title }}</h1>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InnerHero",
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>
