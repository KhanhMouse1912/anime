<template>
  <main class="main">
    <HomeSlider />
    <div class="container">
      <div class="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 w-full">
        <div class="w-full lg:w-[calc(100%-300px)] xl:w-[calc(100%-350px)]">
          <ListVideos />
        </div>
        <div class="w-full lg:w-[300px] xl:w-[350px]">
          <NewVideos />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HomeSlider from '~/components/Homepage/HomeSliders.vue'
import ListVideos from '~/components/Homepage/ListVideos.vue'
import NewVideos from '~/components/Homepage/NewVideos.vue'
export default {
  name: 'IndexPage',
  components: {
    HomeSlider,
    ListVideos,
    NewVideos,
  },
}
</script>

<style lang="scss" scoped>
.main {
  background: #202125;
  min-height: 100vh;
}
</style>
