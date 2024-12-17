<template>
  <div
    class="w-[270px] min-h-screen py-4 shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px]"
  >
    <div class="flex items-center justify-center mb-10">
      <img src="/icon.png" alt="" class="h-[60px]" />
    </div>
    <ul>
      <li
        v-for="item in menus"
        :key="item.id"
        class="shadow-[rgba(27,31,35,0.04)_0px_1px_0px,rgba(255,255,255,0.25)_0px_1px_0px_inset] hover:bg-[#ebebeb]"
      >
        <nuxt-link :to="item.link" class="text-[#1c1e21] block p-4">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenuPrivate',
  data() {
    return {
      menus: [
        {
          id: 'categories',
          name: 'Quản lý Danh mục',
          link: '/admin/hh/categories',
        },
        {
          id: 'tags/lists',
          name: 'Quản lý Tags',
          link: '/admin/hh/tags',
        },
        {
          id: 'videos/lists',
          name: 'Quản lý Videos',
          link: '/admin/hh/videos',
        },
        {
          id: 'cookies/lists',
          name: 'Quản Lý Tài khoản',
          link: '/admin/hh/cookies',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active.nuxt-link-active {
  background: #ebebeb;
}
</style>
