<template>
  <div>
    <HomeSlider />
  </div>
</template>

<script>
  import HomeSlider from "~/components/HomeSliders.vue"
  export default {
    name: 'IndexPage',
    components: {
      HomeSlider
    },
    mounted() {
    // Đảm bảo rằng Google Translate được khởi tạo khi component được mount
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en', // Ngôn ngữ của trang
        includedLanguages: 'en,fr,es,de,ja,zh-CN', // Ngôn ngữ bạn muốn hỗ trợ
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };
  }
  }
</script>
