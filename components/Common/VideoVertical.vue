<template>
  <nuxt-link :to="`/videos/${item.id}`" class="flex h-full flex-col text-inherit">
    <div class="video--thumb">
      <img
        :src="item.thumbnail"
        title=""
        alt=""
        :style="`height: 27vh; width: 100%`"
        class="object-cover rounded-t overflow-hidden"
        @error="setDefaultImage($event)"
      />
      <span class="view text-[10px] absolute flex items-center top-1 left-1 text-[#dedede] gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_15_200)">
            <circle
              cx="12"
              cy="13"
              r="2"
              stroke="#fff"
              stroke-linejoin="round"
            />
            <path
              d="M12 7.5C7.69517 7.5 4.47617 11.0833 3.39473 12.4653C3.14595 12.7832 3.14595 13.2168 3.39473 13.5347C4.47617 14.9167 7.69517 18.5 12 18.5C16.3048 18.5 19.5238 14.9167 20.6053 13.5347C20.8541 13.2168 20.8541 12.7832 20.6053 12.4653C19.5238 11.0833 16.3048 7.5 12 7.5Z"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_200">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {{ formatView(item.viewed ?? '123456') }}
      </span>
    </div>
    <div class="bg-[#2a2c31] rounded-b grow">
      <p class="video--title overflow-hidden text-[#aaa] text-sm text-center p-2 mb-0">
        <span class="mx-2 line-clamp-2 capitalize">
          {{ item.name ?? '' }}
        </span>
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'VideoVertical',
  props: {
    item: {
      type: Object,
      default: {
        id: '',
        thumbnail: '',
        name: '',
        viewed: '',
      },
    },
  },
  data() {
    return {
      defaultImageError: "/default.webp"
    }
  },
  methods: {
    formatView(value) {
      if (!value && value !== 0) return 0
      return value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        .replace('.00', '')
    },
    setDefaultImage(event) {
      event.target.src = this.defaultImageError;
    },
  },
}
</script>

<style lang="scss" scoped>
.video--thumb {
  position: relative;
  cursor: pointer;
  transition: 0.2s;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    z-index: 2;
    background: url('~/assets/images/play.svg') no-repeat;
    opacity: 0;
    transform: scale(0);
    transition: 0.2s;
  }
  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }
  &:hover::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
  }
}
</style>
