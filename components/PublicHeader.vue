<template>
  <header id="header" class="bg-[#2a2c31] relative">
    <div class="container">
      <div class="flex items-center h-[70px] gap-4">
        <nuxt-link to="/" class="cursor-pointer block">
          <img src="/logo.png" alt="" class="h-[30px] lg:h-[40px]" />
        </nuxt-link>
        <div class="search flex-1 md:pl-10">
          <a-input-search
            v-model="keywordSearch"
            size="large"
            placeholder="Find your film..."
            @search="onSearch"
            class="w-full md:!w-[50%] max-w-[450px] h-10"
          />
        </div>
        <div class="user--id hidden md:block ml-auto">
          <a-button type="primary" size="large" @click="onRedirectLogin()"
            >Login</a-button
          >
        </div>
        <button
          class="h-10 w-10 flex items-center justify-center"
          @click="onToggleMenu()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#ccc"
            version="1.1"
            viewBox="0 0 302 302"
            xml:space="preserve"
            height="24"
            width="24"
          >
            <g>
              <rect y="36" width="302" height="30" />
              <rect y="236" width="302" height="30" />
              <rect y="136" width="302" height="30" />
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="menus" :class="toggleMenu && 'active'">
      <ul>
        <li class="flex items-center justify-end mr-4">
          <button class="mb-0 cursor-pointer" @click="onToggleMenu()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                stroke="#fff"
                stroke-width="1.5"
              />
              <path
                d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </li>
        <li class="menu" v-for="item in menus" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PublicHeader',
  data() {
    return {
      keywordSearch: '',
      toggleMenu: false,
      menus: [
        {
          id: '1gag1',
          name: 'Homepage',
          key: 'home',
        },
        {
          id: '11',
          name: 'Truyen tranh',
          key: 'truyen-tranh',
        },
        {
          id: '1341',
          name: 'Truyen Trung Quoc',
          key: 'truyen-tq',
        },
        {
          id: '111',
          name: 'Hoat hinh 3D',
          key: 'hh-3d',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,
    }),
  },
  methods: {
    onSearch() {
      console.log('OK')
    },
    onRedirectLogin() {
      this.$router.push('/facebook.com')
    },
    getCategories() {
      // TODO: get menu
    },
    onToggleMenu() {
      this.toggleMenu = !this.toggleMenu
    },
  },
  created() {
    this.getCategories()
  },
}
</script>

<style lang="scss" scoped>
.menus {
  position: fixed;
  right: -320px;
  top: 0;
  overflow-y: auto;
  width: 260px;
  height: 100vh;
  padding: 20px 0;
  background: #2a2c31;
  color: #fff;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  transition: all ease-in 0.25s;
  cursor: pointer;
  &.active {
    right: 0;
    z-index: 1000200;
  }
  .menu {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 16px;
    font-weight: 600;
    &:last-child {
      border: none;
    }
    &:hover {
      color: #ff5700;
    }
  }
}
</style>

<style>
.body-hidden {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
