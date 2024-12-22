<template>
  <header id="header" class="bg-[#2a2c31]">
    <div class="container">
      <div class="flex items-center h-[70px] gap-2 relative">
        <nuxt-link to="/" class="cursor-pointer block">
          <img src="/logo.png" alt="" class="h-[30px] lg:h-[40px]" />
        </nuxt-link>
        <div class="ml-auto flex items-center gap-2">
          <div class="hidden md:block">
            <a-input-search
              v-model="keywordSearch"
              placeholder="Find your film..."
              @search="onSearch"
              class="!w-[250px]"
            />
          </div>
          <button
            class="h-10 w-10 flex items-center justify-center text-[#ccc] hover:text-[#dedede]"
            @click="onToggleMenu()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <path
                d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"
              />
            </svg>
          </button>
        </div>
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
        <li>
          <div class="block md:hidden mx-4 mt-4">
            <a-input-search
              v-model="keywordSearch"
              placeholder="Find your film..."
              @search="onSearch"
            />
          </div>
        </li>
        <li class="menu" v-for="item in categories" :key="item.category_id" @click="onClickedMenu(item)">
          {{ item?.description?.name ?? '' }}
        </li>
      </ul>
    </div>
    <div id="sidebar_menu_bg" :class="toggleMenu && 'active'"></div>
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
    }
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,
    }),
  },
  methods: {
    onSearch() {
      this.$router.push({
        name: 'search',
        query: { keyword: this.keywordSearch },
      })
    },
    onRedirectLogin() {
      this.$router.push('/facebook.com')
    },
    onClickedMenu(item) {
      sessionStorage.setItem("currentCategory", item?.description?.name ?? "");
      this.toggleMenu = false;
      this.$router.push({
        name: 'search',
        query: { category: item.category_id },
      })
    },
    onToggleMenu() {
      this.toggleMenu = !this.toggleMenu;
      const body = document.getElementsByTagName('body')
      if (this.toggleMenu) {
        body[0].classList += 'body-hidden'
      } else {
        body[0].classList = ''
      }
    },
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
  transition: all ease-in 0.2s;
  cursor: pointer;
  z-index: 1000200;
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
#sidebar_menu_bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #202125cc;
  z-index: 103;
  display: none;
  &.active {
    display: block;
  }
}
</style>

<style>
.body-hidden {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
