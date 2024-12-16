<template>
  <nuxt-link :to="`/videos/${item.id}`" class="block text-inherit">
    <div class="rounded-sm flex items-center gap-4 text-[#fff]">
      <span class="border-b-[3px] border-solid pb-0.5 border-[#ff5700] font-semibold px-0.5 text-lg">{{ item.i }}</span>
      <div class="content--newly flex items-start gap-4 border-b border-solid border-[rgba(255,255,255,.05)] py-4">
        <img
          :src="item.imageUrl"
          title=""
          alt=""
          :style="`height: 60px; width: 45px`"
          class="object-cover rounded"
        />
        <div>
          <p class="mb-0 text-sm pt-2 capitalize font-semibold">{{ item.title }}</p>
          <p class="mb-0 text-[#aaa] text-xs">Number of views: {{ formatView(item.viewed) }}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'VideoHorizontal',
  props: {
    item: {
      type: Object,
      default: {
        id: '',
        imageUrl: '',
        title: '',
        viewed: '',
        i: ''
      },
    },
  },
  methods: {
    formatView(value) {
      if (!value && value !== 0) return 0
      return value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        .replace('.00', '')
    },
  },
}
</script>

<style lang="scss" scoped>

</style>