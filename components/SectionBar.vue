<template>
  <div>
    <div class="section-bar clearfix">
      <h3 class="section-title">
        <span>{{ name }}</span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionBar",
  props: {
    name: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section-bar {
  position: relative;
  margin: 15px 0;
  .section-title {
    font-size: 16px;
    line-height: 11px;
    margin: 0;
    position: relative;
    text-transform: uppercase;
    display: flow-root;
    &::before {
      content: '';
      border-bottom: 1px solid #1e2732 !important;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    span {
      float: left;
      font-size: 15px;
      padding: 10px 0;
      color: #a5cbef;
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#ff8a00),
        to(#da1b60)
      );
      background: linear-gradient(to right, #ff8a00, #ff2070);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      font-weight: 700;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(#ff8a00),
          to(#da1b60)
        );
        background: linear-gradient(to right, #ff8a00, #ff2070);
        padding: 0.5px;
      }
    }
  }
}
.clearfix {
  &::before {
    content: ' ';
    display: table;
  }
}
</style>
