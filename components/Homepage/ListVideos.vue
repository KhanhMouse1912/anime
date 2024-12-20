<template>
  <div>
    <SectionBar name="List videos" />
    <div>
      <ul
        class="grid grid-cols-2 min-[540px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
      >
        <li
          v-for="item in videos"
          :key="item.id"
          class="max-w-[200px] overflow-hidden"
        >
          <VideoVertical :item="item" />
        </li>
      </ul>
    </div>
    <button
      v-if="this.pagination.next_page_url"
      @click="goNext()"
      class="bg-[rgba(255,255,255,.1)] text-[#fff] rounded-full w-full my-4 h-10 hover:bg-[#ffffff1a]"
    >
      View more
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SectionBar from '~/components/SectionBar.vue'
import VideoVertical from '../Common/VideoVertical.vue'
export default {
  name: 'ListVideos',
  components: {
    SectionBar,
    VideoVertical,
  },
  data() {
    return {
      defaultPagination: {
        next_page_url: null,
        prev_page_url: null,
        total: 0,
      },
    }
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
    videos() {
      return this.products?.list?.map((video) => {
        return {
          id: video?.description?.meta_title ?? undefined,
          thumbnail: video.image,
          viewed: video.viewed,
          name: video?.description?.name ?? '',
        }
      })
    },
    pagination() {
      return this.products.pagination ?? this.defaultPagination
    },
  },
  methods: {
    goNext() {
      if (!this.pagination.next_page_url) return
      this.$store.dispatch('getViewMore', this.pagination.next_page_url)
    },
  },
}
</script>

<style lang="scss" scoped></style>
