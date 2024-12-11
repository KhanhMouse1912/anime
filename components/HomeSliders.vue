<template>
  <div class="slider">
    <div class="slider--wrapper">
      <div class="container">
        <client-only>
          <carousel :per-page="itemsPerPage" :pagination-enabled="false" :autoplay="true" :speed="500" loop>
            <slide v-for="item in slides" :key="item.id">
              <img :src="item.imageUrl" title="" alt="" :width="`calc(100% / ${itemsPerPage})`" height="auto" class="image" />
            </slide>
          </carousel>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'HomeSlider',
    data() {
      return {
        itemsPerPage: 7,
      }
    },
    computed: {
      ...mapState({
        slides: (state) => state.slides,
      }),
    },
    methods: {
      handleSlideClick(dataset) {
        console.log(dataset)
      },
      updateItemsPerPage() {
        const width = window.innerWidth;
        if (width < 576) {
          this.itemsPerPage = 3;
        } else if (width < 800) {
          this.itemsPerPage = 4;
        } else {
          this.itemsPerPage = 7;
        }
      },
    },
    mounted() {
      this.updateItemsPerPage();
      window.addEventListener('resize', this.updateItemsPerPage);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateItemsPerPage);
    },
  }
</script>

<style lang="scss" scoped>
.slider {
  background: linear-gradient(0deg,#121315 0,#12131500 99%);
  transition: transform .3s ease-in-out;
  &--wrapper {
    padding: 40px 0;
    background: #202125;
  }
  .image {
    object-fit: cover;
  }
}
</style>