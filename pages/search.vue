<template>
  <div class="search">
    <div class="container">
      <h1 class="text-[#fff] text-lg py-4 flex items-center gap-2 text--search">
        <p class="mb-0 flex items-center gap-0.5" v-if="keyword">
          <span>Search results </span>
          <span class="line-clamp-1 text-base">"{{ keyword }}"</span>
        </p>
        <p v-else class="mb-0 flex items-center gap-0.5">
          <span>Categories: </span>
          <span class="line-clamp-1 text-base">{{ categoryName }}</span>
        </p>
      </h1>
      <ul
        class="grid grid-cols-2 min-[540px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
      >
        <li
          v-for="item in videos"
          :key="item.id"
          class="max-w-[220px] overflow-hidden"
        >
          <VideoVertical :item="item" />
        </li>
      </ul>
      <button @click="viewMoreProducts()">View More</button>
    </div>
  </div>
</template>

<script>
import VideoVertical from '~/components/Common/VideoVertical.vue'
export default {
  async asyncData({ redirect, $axios, query }) {
    const {category, keyword } = query
    if (!category && !keyword) redirect('/404');

    let params = [];
    if (category) params.push(`categories[]=${encodeURIComponent(category)}`);
    if (keyword) params.push(`keyword=${encodeURIComponent(keyword)}`);

    let url = params.length ? '?' + params.join('&') : '';

    const searchList = await $axios.$get(`products${url}`);
    const { products } = searchList;
    if (!products) redirect('/404');
    if (searchList.status === 404) redirect('/404');
    return { 
      keyword,
      category: "category",
      videos: products?.data?.map((video) => {
        return {
          id: video?.description?.meta_keyword ?? undefined,
          thumbnail: video.image,
          viewed: video.viewed,
          name: video?.description?.name ?? '',
        }
      }) ?? [],
      pagination: {
        current_page: products.current_page,
        last_page: products.last_page,
      }
    }
  },
  components: {
    VideoVertical,
  },
  data() {
    return {
      keyword: "",
      category: "",
      videos: [],
      pagination: {
        current_page: 1,
        last_page: 1,
      },
      categoryName: ""
    }
  },
   watch: {
    '$route.query': 'fetchData',
  },
  methods: {
    viewMoreProducts() {
      console.log("product", this.pagination, this.videos)
    },
    setCategoryName() {
      if (process.client) {
        const currentCategory = sessionStorage.getItem("currentCategory")
        if (currentCategory) this.categoryName = currentCategory;
      }
    },
    async fetchData() {
      const { category, keyword } = this.$route.query;
      console.log("category: ", category, "--keyword--", keyword);

      let params = [];
      if (category) params.push(`categories[]=${encodeURIComponent(category)}`);
      if (keyword) params.push(`keyword=${encodeURIComponent(keyword)}`);

      let url = params.length ? '?' + params.join('&') : '';
      const searchList = await this.$axios.$get(`products${url}`);

      const { products } = searchList;
      if (!products) redirect('/404');
      if (searchList.status === 404) redirect('/404');

      this.setCategoryName();
      this.keyword = keyword;
      this.category = category;
      this.videos = products?.data?.map((video) => {
        return {
          id: video?.description?.meta_keyword ?? undefined,
          thumbnail: video.image,
          viewed: video.viewed,
          name: video?.description?.name ?? ''
        }
      }) ?? [],
      this.pagination = {
        current_page: products.current_page,
        last_page: products.last_page
      }
    }
  },
  mounted() {
    this.setCategoryName();
  }
}
</script>

<style lang="scss" scoped>
.text--search {
  background: linear-gradient(to right, #ff8a00, #ff2070);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  text-transform: capitalize;
}
</style>