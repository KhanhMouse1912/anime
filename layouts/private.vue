<template>
  <div class="flex items-start w-full bg-[#f1f1f173] gap-4">
    <div class="flex w-full flex-col flex-1">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { adminTk } from '~/utils/globals'
export default {
  name: 'PrivateLayout',
  methods: {
    checkLogged() {
      if (process.client) {
        const token = localStorage?.getItem('yt-fb-cc-qq')
        if (token && token === adminTk) {
          const currentPath = this.$route.path
          this.$router.push(currentPath ?? '/admin/hh/categories')
        } else {
          this.$router.push('/admin/hh/login')
        }
      }
    },
  },
  created() {
    this.checkLogged()
  },
}
</script>

<style lang="scss" scoped></style>
