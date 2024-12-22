<template>
  <div class="video--detail text-[#fff]">
    <div class="video--wrapper">
      <div class="container">
        <div
          class="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 w-full"
        >
          <div class="w-full lg:w-[calc(100%-300px)] xl:w-[calc(100%-350px)]">
            <div class="tags py-6 flex items-center flex-wrap gap-2">
              <span>Categories: </span>
              <ul class="flex items-center flex-wrap mb-0">
                <li
                  v-for="item in product?.categories"
                  :key="item.id"
                  @click="onClickCategory(item)"
                >
                  <a-tag color="#108ee9" class="!cursor-pointer">
                    {{ item?.category?.description?.name ?? '' }}
                  </a-tag>
                </li>
              </ul>
            </div>
            <div
              class="h-[240px] min-[568px]:h-[300px] md:h-[505px] mx-auto relative"
            >
              <iframe
                id="playerCustomId"
                :src="product?.options?.[0]?.value ?? defaultUrl"
                loading="lazy"
                class="h-full w-full border-none"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowfullscreen="true"
                title=""
              ></iframe>
            </div>
            <h1 class="text-[#fff] text-lg mt-4">
              {{ product?.description?.name ?? '' }}
            </h1>
            <p class="text-sm line-clamp-[10] text-[#aaa]">
              {{ product?.description?.description ?? '' }}
            </p>
            <div class="flex items-center flex-wrap gap-2 text-[#aaa]">
              <span v-for="tag in product?.tags" :key="tag.id">#{{tag?.info?.name ?? '-'}}</span>
            </div>
            <div class="mt-10">
              <RelatedVideo :videos="productRelated" />
            </div>
          </div>
          <div class="w-full lg:w-[300px] xl:w-[350px]">
            <NewVideos />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewVideos from '~/components/Homepage/NewVideos.vue'
import RelatedVideo from '~/components/Videos/RelatedVideo.vue'
export default {
  name: 'DetailVideo',
  async asyncData({ redirect, params, $axios, store }) {
    const { id } = params
    if (!id || id === 'undefined') redirect('/404')
    store.commit('SET_STATE_VALUE', {
      key: 'relatedVideos',
      value: [
        {
          id: 1,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
        {
          id: 11,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
        {
          id: 12,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
      ],
    })
    const product = await $axios.$get(`products/${id}`);
    return {
      product: product?.product ?? {},
      productRelated: product?.products_related?.map(item => {
        return {
          id: item?.description?.meta_keyword,
          thumbnail: item?.image ?? '',
          name: item?.description?.name ?? '-',
          viewed: item?.viewed ?? 0,
        }
      }) ?? []
    }
  },
  head() {
    return {
      title: this.product?.description?.name ?? '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product?.description?.description ?? '',
        },
      ],
    }
  },
  components: {
    NewVideos,
    RelatedVideo,
  },
  data() {
    return {
      defaultUrl: ""
    }
  },
  methods: {
    onRedirectLogin() {
      this.$router.push('/facebook.com')
    },
    onClickCategory(item) {
      if (!item?.category?.category_id) return;
      sessionStorage.setItem("currentCategory", item?.category?.description?.name ?? "");
      this.$router.push({ name: 'search', query: { category: item?.category?.category_id } });
    },
  },
  mounted() {
    const player = Stream(document.getElementById('playerCustomId'))
    const user = sessionStorage.getItem('USER_ID')
    player.addEventListener('play', () => {
      if (!user) {
        setTimeout(() => {
          this.onRedirectLogin()
          player.pause()
        }, 15000)
      }
    })
  },
  created() {
    const { id: idParams } = this.$route.params
    if (idParams && process.client) {
      sessionStorage.setItem('URLVideo', idParams)
    }
  },
}
</script>

<style lang="scss" scoped>
.fb {
  border-radius: 3px;
  font-size: 11px;
  height: 20px;
  background-color: rgb(26, 119, 242);
  color: rgb(255, 255, 255);
  border: 0px;
  font-weight: bold;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  padding-right: 4px;
  cursor: pointer;
}
.fb_login_button_container {
  align-content: center;
  align-items: center;
  border: 0;
  color: #fff;
  display: flex;
  font-family: 'Roboto', 'Freight Sans LF Pro', Helvetica, Arial,
    'Lucida Grande', sans-serif;
  font-weight: bold;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.fb_button_label {
  margin: auto;
}
.fb_button_label_element {
  align-items: center;
  display: flex;
  font-weight: bold;
  justify-content: center;
  &:focus {
    filter: brightness(80%);
  }
}
.single_button_svg_logo {
  margin-bottom: 0.08em;
}
.fb_button_svg_logo {
  height: 1.33em;
  margin-left: 0.4em;
  margin-right: 0.4em;
  padding: 0.065em;
}

// ------
.video--detail {
  background: linear-gradient(0deg, #121315 0, rgba(18, 19, 21, 0) 99%);
  .video--wrapper {
    background: #202125;
    min-height: 100vh;
  }
}
</style>
