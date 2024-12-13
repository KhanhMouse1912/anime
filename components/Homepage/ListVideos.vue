<template>
  <div>
    <SectionBar name="List videos" />
    <div>
      <ul class="grid grid-cols-2 min-[540px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        <li v-for="item in videos" :key="item.id" class="max-w-[200px] overflow-hidden">
          <VideoVertical :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SectionBar from '~/components/SectionBar.vue';
import VideoVertical from '../Common/VideoVertical.vue';
  export default {
    name: "ListVideos",
    components: {
      SectionBar,
      VideoVertical
    },
    data() {
      return {
        videos: [
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
          {
            id: 14,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
          {
            id: 15,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
          {
            id: 121,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
          {
            id: 2131,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
          {
            id: 141,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
          {
            id: 1412,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
          {
            id: 1414,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
          {
            id: 14156,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
          {
            id: 6451,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
          {
            id: 42341,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung',
            viewed: '9754'
          },
        ]
      }
    },
    methods: {
      onSelectVideo() {
        localStorage.setItem("URLVideo", 'jduasi-ujduyw')
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>