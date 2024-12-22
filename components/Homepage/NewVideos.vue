<template>
  <div>
    <SectionBar name="Newly updated" />
    <div class="bg-[#2a2c31] px-4">
      <ul class="flex flex-col newly">
        <li v-for="item in videos" :key="item.id" class="overflow-hidden">
          <VideoHorizontal :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SectionBar from '~/components/SectionBar.vue';
import VideoHorizontal from '~/components/Common/VideoHorizontal.vue';
  export default {
    name: "NewVideos",
    components: {
      SectionBar,
      VideoHorizontal
    },
    computed: {
      ...mapState({
        newlyUpdated: (state) => state.newlyUpdated,
      }),
      videos() {
        return this.newlyUpdated.map((video, i) => {
          return {
            id: video?.description?.meta_keyword ?? undefined,
            thumbnail: video.image,
            viewed: video.viewed,
            name: video?.description?.name ?? "",
            i: i + 1
          }
        })
      }
    }
  }
</script>

<style lang="scss">
.newly {
  li:last-child .content--newly {
    border: 0;
  }
}
</style>