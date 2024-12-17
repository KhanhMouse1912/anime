<template>
  <div>
    <SectionBar name="Newly updated" />
    <div class="bg-[#2a2c31] px-4">
      <ul class="flex flex-col newly">
        <li v-for="(item, i) in videos" :key="item.id" class="overflow-hidden">
          <VideoHorizontal :item="{...item, i: i + 1}" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SectionBar from '~/components/SectionBar.vue';
import VideoHorizontal from '~/components/Common/VideoHorizontal.vue';
  export default {
    name: "NewVideos",
    components: {
      SectionBar,
      VideoHorizontal
    },
    data() {
      return {
        videos: [
          {
            id: 1,
            imageUrl: "https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj",
            title: 'Dau pha thuong khung thuong khung',
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
        ]
      }
    },
    computed: {
      ...mapState({
        newlyUpdated: (state) => state.newlyUpdated,
      }),
    }
  }
</script>

<style lang="scss">
.newly {
  li:last-child .content--newly {
    border: 0;
  }
}
</style>