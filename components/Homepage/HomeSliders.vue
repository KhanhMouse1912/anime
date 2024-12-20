<template>
  <div class="slider">
    <div class="slider--wrapper py-4 md:py-6 lg:py-10">
      <div class="container">
        <div v-if="!videos.length" :style="`height: 27vh;`" class="text-center">
          Đang cập nhật...
        </div>
        <div v-else>
          <client-only>
            <carousel :per-page="itemsPerPage" :pagination-enabled="false" :autoplay="!!(itemsPerPage < 4)" :speed="2000" :navigationEnabled="itemsPerPage > 3" loop>
              <slide v-for="item in videos" :key="item.id">
                <VideoTemp :item="item" />
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import VideoTemp from "~/components/Common/Video.vue";
  export default {
    name: 'HomeSlider',
    components: { VideoTemp },
    data() {
      return {
        itemsPerPage: 7,
      }
    },
    computed: {
      ...mapState({
        slides: (state) => state.slides,
      }),
      videos() {
        return this.slides.map((video, i) => {
          return {
            id: video?.description?.meta_title ?? undefined,
            thumbnail: video.image,
            viewed: video.viewed,
            name: video?.description?.name ?? "",
            i: i + 1
          }
        })
      }
    },
    methods: {
      updateItemsPerPage() {
        const width = window.innerWidth;
        if (width < 481) {
          this.itemsPerPage = 2;
        } else if (width < 640) {
          this.itemsPerPage = 3;
        } else if (width < 1201) {
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
}
</style>

<style lang="scss">
.VueCarousel-navigation {
  position: relative;
  width: 100%;
  height: 100%;
  .VueCarousel-navigation-prev {
    background: rgba(255, 152, 0, 0.75);
    color: #fff !important;
    border-radius: 3px;
    padding: 8px 5px !important;
    position: absolute;
    top: -14vh !important;
    background-size: 300% 100%;
    background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);
    box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
    transition: .7s;
    border: none !important;
    width: 27px;
    left: 32px;
    &:hover {
      background-position: right center;
    }
    &:focus {
      outline: none;
    }
  }
  .VueCarousel-navigation-next {
    background: rgba(255, 152, 0, 0.75);
    color: #fff !important;
    border-radius: 3px;
    padding: 8px 5px !important;
    position: absolute;
    top: -14vh !important;
    background-size: 300% 100%;
    background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);
    box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
    transition: .7s;
    border: none !important;
    width: 27px;
    right: calc(100% - 32px);
    &:hover {
      background-position: right center;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>