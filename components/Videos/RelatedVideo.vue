<template>
  <div>
    <SectionBar name="Related Videos" />
    <div>
      <ul class="grid grid-cols-2 min-[540px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <li v-for="item in videos" :key="item.id" class="max-w-[200px] overflow-hidden">
          <VideoVertical :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SectionBar from '~/components/SectionBar.vue';
import VideoVertical from '../Common/VideoVertical.vue';
  export default {
    name: "RelatedVideo",
    components: {
      SectionBar,
      VideoVertical
    },
    props: {
      videos: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>