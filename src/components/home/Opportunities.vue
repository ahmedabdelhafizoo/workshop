<template>
  <section class="opportunities d-flex flex-column flex-xl-row">
    <div class="section-title">
      <h2>Opportunities</h2>
    </div>
    <div class="section-container">
      <div class="row align-items-center">
        <div class="col-lg-8 order-2 order-lg-1">
          <div class="overflow-auto">
            <table class="opportunities__table w-100">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Sectors</th>
                  <th>Opportunities</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="opportunity in opportunities" :key="opportunity.id">
                  <td>
                    <strong class="d-lg-none">Country</strong>
                    {{ opportunity.country }}
                  </td>
                  <td>
                    <strong class="d-lg-none">Sectors</strong>
                    {{ opportunity.sectors }}
                  </td>
                  <td>
                    <strong class="d-lg-none">Opportunities</strong>
                    {{ opportunity.opportunities }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="#" class="link">
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
        <div class="col-lg-4 order-1 order-lg-2 text-center mb-5 mb-lg-0">
          <img
            src="@/assets/images/home/map.svg"
            alt="map image"
            width="auto"
            height="auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import opportunities from "@/API/opportunities";
export default {
  name: "Opportunities",

  data() {
    return {
      opportunities,
    };
  },
};
</script>
