<template>
  <main class="main">
    <HomeSlider />
    <div class="container">
      <div class="flex items-start gap-4 lg:gap-8 w-full">
        <div class="w-full xl:w-[70%]">
          <ListVideos />
          <div id="google_translate_element"></div>
        </div>
        <div class="w-full xl:w-[30%]">
          <NewVideos />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import HomeSlider from "~/components/HomeSliders.vue"
  import ListVideos from "~/components/Homepage/ListVideos.vue"
  import NewVideos from "~/components/Homepage/NewVideos.vue"
  export default {
    name: 'IndexPage',
    components: {
      HomeSlider,
      ListVideos,
      NewVideos
    },
    mounted() {
      const browserLanguage = navigator?.language ?? 'en';
      console.log("browserLanguage", browserLanguage);
      // Đảm bảo rằng Google Translate được khởi tạo khi component được mount
      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en', // Ngôn ngữ của trang
          includedLanguages: 'en,fr,es,de,ja,zh-CN, ko', // Ngôn ngữ bạn muốn hỗ trợ
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: true
        }, 'google_translate_element');
      };
    }
  }
</script>

<style lang="scss" scoped>
.main {
  background: #202125;
  min-height: 100vh;
}
</style>
