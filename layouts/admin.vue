<template>
  <div class="flex items-start w-full bg-[#f1f1f173] gap-4">
    <SidebarMenuPrivate />
    <div class="flex w-full flex-col flex-1 px-6 h-screen">
      <div class="flex items-center justify-between mb-10 py-4">
        <h1 class="text-lg">{{ pageAdminName }}</h1>
        <div class="flex items-center gap-2">
          <span>Xin chào Admin...</span>
          <a-button @click="onLogout()">Đăng xuất</a-button>
        </div>
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { adminTk } from '~/utils/globals'
import SidebarMenuPrivate from '~/components/SidebarMenuPrivate.vue'
export default {
  name: 'PrivateLayout',
  components: { SidebarMenuPrivate },
  computed: {
    ...mapState({
      pageAdminName: (state) => state.pageAdminName,
    }),
  },
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
    onLogout() {
      localStorage.removeItem('yt-fb-cc-qq')
      this.$router.push('/admin/hh/login')
    },
  },
  created() {
    this.checkLogged()
  },
}
</script>
