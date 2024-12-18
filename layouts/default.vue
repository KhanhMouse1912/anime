<template>
  <div class="layout--default">
    <PublicHeader />
    <div class="pb-6 bg-[#202125] min-h-screen">
      <Nuxt :keep-alive-props="{ max: 5 }" />
    </div>
    <PublicFooter />
    <SidebarMenuPublic />
    <div class="opacity-0 h-0 w-0">
      <div id="google_translate_element"></div>
    </div>
    <ScrollToTop />
  </div>
</template>

<script>
import PublicHeader from '~/components/PublicHeader.vue'
import PublicFooter from '~/components/PublicFooter.vue'
import SidebarMenuPublic from '~/components/SidebarMenuPublic.vue'
import ScrollToTop from '~/components/ScrollToTop.vue'
export default {
  name: 'DefaultLayout',
  components: {
    PublicHeader,
    PublicFooter,
    SidebarMenuPublic,
    ScrollToTop,
  },
  mounted() {
    this.loadGoogleTranslate()
  },
  methods: {
    loadGoogleTranslate() {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
          },
          'google_translate_element'
        )
      }
      setTimeout(() => {
        this.selectLanguage()
      }, 3000)
    },
    selectLanguage() {
      const languageCode = navigator?.language ?? 'en'
      // Find the translate widget dropdown
      const selectElement = document.querySelector('.goog-te-combo')

      if (selectElement) {
        // Set the value to the desired language code
        selectElement.value = languageCode

        // Trigger the change event to apply the selection
        const event = new Event('change')
        selectElement.dispatchEvent(event)
      } else {
        console.error('Google Translate dropdown not found.')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.layout--default {
  overflow: hidden;
  max-width: 100vw;
}
</style>
<style>
.skiptranslate {
  display: none !important;
}

body {
  top: 0 !important;
}
</style>
