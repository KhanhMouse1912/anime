<template>
  <div id="sidebar_menu">
    <button class="flex items-center text-sm py-1 pl-1 pr-2 rounded-full bg-[#4a4b51] hover:opacity-80">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        enable-background="new 0 0 24 24"
      >
        <path
          d="M11.3,12l3.5-3.5c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-4.2,4.2l0,0c-0.4,0.4-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3l0,0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L11.3,12z"
        />
      </svg>
      Close
    </button>
    <div class="sb-setting">
      <div class="header-setting">
        <div class="hs-toggles">
          <a
            href="https://hhtm.site/user/bookmark"
            class="hst-item"
            data-toggle="tooltip"
            title="Watch with friends"
          >
            <div class="hst-icon"><i class="fas fa-heart mr-2"></i></div>
            <div class="name"><span>Phim yêu thích</span></div>
          </a>
          <a
            href="https://hhtm.site/user/history"
            class="hst-item"
            data-toggle="tooltip"
            data-original-title="Watch random anime"
          >
            <div class="hst-icon"><i class="fas fa-history mr-2"></i></div>
            <div class="name"><span>Lịch sử xem</span></div>
          </a>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>

    <ul class="nav sidebar_menu-list">
      <li class="nav-item active">
        <a class="nav-link" href="https://hhtm.site" title="Home"
          >Trang chủ</a
        >
      </li>
      <li class="nav-item active">
        <a
          class="nav-link"
          href="https://hhtm.site/moi-cap-nhat"
          title="Mới cập nhật"
          >Mới cập nhật</a
        >
      </li>
      <li class="nav-item active">
        <a
          class="nav-link"
          href="https://hhtm.site/hoan-thanh"
          title="Đã hoàn thành"
          >Đã hoàn thành</a
        >
      </li>
      <li class="nav-item active">
        <a
          class="nav-link"
          href="https://hhtm.site/dang-chieu"
          title="Đang chiếu"
          >Đang chiếu</a
        >
      </li>
      <li class="nav-item active">
        <a
          class="nav-link"
          href="https://hhtm.site/phim-le"
          title="Phim lẻ | Ova"
          >Phim lẻ | Ova</a
        >
      </li>
      <li class="nav-item active">
        <a
          class="nav-link"
          href="https://animetq.com/"
          title="Hoạt Hình Vietsub"
          target="_blank"
          >Hoạt Hình Vietsub</a
        >
      </li>

      <li class="nav-item">
        <div class="nav-link" title="Genre"><strong>Thể loại</strong></div>
        <div class="sidebar_menu-sub show" id="sidebar_subs_genre">
          <ul class="nav color-list sub-menu">
            <li class="nav-item">
              <a
                class="nav-link"
                title="Huyền Huyễn"
                href="https://hhtm.site/huyen-huyen"
                >Huyền Huyễn</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                title="Xuyên Không"
                href="https://hhtm.site/xuyen-khong"
                >Xuyên Không</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                title="Trùng Sinh"
                href="https://hhtm.site/trung-sinh"
                >Trùng Sinh</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                title="Tiên Hiệp"
                href="https://hhtm.site/tien-hiep"
                >Tiên Hiệp</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                title="Cổ Trang"
                href="https://hhtm.site/co-trang"
                >Cổ Trang</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                title="Hài Hước"
                href="https://hhtm.site/hai-huoc"
                >Hài Hước</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                title="Kiếm Hiệp"
                href="https://hhtm.site/kiem-hiep"
                >Kiếm Hiệp</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                title="Hiện Đại"
                href="https://hhtm.site/hien-dai"
                >Hiện Đại</a
              >
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
      </li>
    </ul>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenuPublic',
}
</script>

<style lang="scss" scoped>
#sidebar_menu {
  position: fixed;
  z-index: 1000200;
  left: 0;
  opacity: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  width: 260px;
  padding: 20px 16px;
  background: #2a2c31;
  color: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  transform: translate(-100%);
  &.active {
    opacity: 1;
    z-index: 1000200;
    transform: translate(0);
  }
}
</style>
