<template>
  <div class="search">
    <div class="container">
      <h1 class="text-[#fff] text-lg py-4 flex items-center gap-2 text--search">
        <span v-if="keyword || tag">Search results</span>
        <span class="line-clamp-1 text-base">"{{ tag ?? keyword ?? category }}"</span>
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
    </div>
  </div>
</template>

<script>
import VideoVertical from '~/components/Common/VideoVertical.vue'
export default {
  async asyncData({ redirect, query }) {
    const { tag, category, keyword } = query
    if (!tag && !category && !keyword) redirect('/404');
    return { 
      tag,
      category,
      keyword
    }
  },
  components: {
    VideoVertical,
  },
  data() {
    return {
      videos: [
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
        {
          id: 14,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
        {
          id: 15,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
        {
          id: 121,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
        {
          id: 2131,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
        {
          id: 141,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
        {
          id: 1412,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
        {
          id: 1414,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
        {
          id: 14156,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
        {
          id: 6451,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
        {
          id: 42341,
          imageUrl:
            'https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj',
          title: 'Dau pha thuong khung',
          viewed: '9754',
        },
      ],
    }
  },
  created() {
    console.log(this.$route)
  },
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