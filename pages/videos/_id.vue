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
                  v-for="item in tags"
                  :key="item.id"
                  @click="onClickTag(item)"
                >
                  <a-tag color="#108ee9" class="!cursor-pointer">{{
                    item.name
                  }}</a-tag>
                </li>
              </ul>
            </div>
            <div
              class="h-[240px] min-[568px]:h-[300px] md:h-[505px] mx-auto relative"
            >
              <iframe
                id="hello-ad21"
                :src="srcVideo"
                loading="lazy"
                class="h-full w-full border-none"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowfullscreen="true"
                title=""
              ></iframe>
            </div>
            <h1 class="text-[#fff] text-lg mt-4">
              Đấu Phá Thương Khung Phần 5 Tập 125 Thuyết Minh
            </h1>
            <p class="text-sm line-clamp-5 text-[#aaa]">
              Sau hẹn ước 3 năm, Tiêu Viêm cuối cùng cũng gặp được Huân Nhi ở
              học viện Già Nam, sau đó hắn kết giao nhiều bạn bè, thành lập Bàn
              Môn; vì tiếp tục nâng cao thực lực để lên Vân Lam Tông lần 3 báo
              thù cho cha, hắn mạo hiểm đi vào Thiên Phần luyện Khí Tháp thôn
              phệ Vẫn Lạc Tâm
            </p>
            <div class="mt-10">
              <RelatedVideo />
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
  async asyncData({ redirect, params, $http, store  }) {
    const { id } = params
    if (!id || id === 'undefined') redirect('/404')
    console.log('id: ', id)
    store.commit('SET_STATE_VALUE', {
        key: 'relatedVideos',
        value: [
          {
            id: 1,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
          {
            id: 11,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
          {
            id: 12,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
        ],
      })
    // const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
    return { srcVideo: "https://customer-kia89hvfngqmnwh7.cloudflarestream.com/6a79ebf9528678287aa1db15661b5e09/iframe?poster=https%3A%2F%2Fcustomer-kia89hvfngqmnwh7.cloudflarestream.com%2F6a79ebf9528678287aa1db15661b5e09%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600" }
  },
  components: {
    NewVideos,
    RelatedVideo,
  },
  data() {
    return {
      tags: [
        {
          id: '1',
          name: 'hoat-hinh-3d',
          key: 'hoat-hinh',
        },
        {
          id: '2',
          name: 'duyen khoi',
          key: 'duyen-khoi',
        },
        {
          id: '52',
          name: 'huyen thoai',
          key: 'huyen-thoai',
        },
      ],
    }
  },
  methods: {
    onRedirectLogin() {
      this.$router.push('/facebook.com')
    },
    onClickTag(tag) {
      this.$router.push({ name: 'search', query: { tag: tag.key } })
    },
  },
  mounted() {
    const player = Stream(document.getElementById('hello-ad21'))
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
