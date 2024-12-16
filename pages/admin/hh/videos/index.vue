<template>
  <div class="px-10">
    <h3>Form Danh muc</h3>
    <a-form
      :model="formState"
      layout="vertical"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Tên danh mục"
        name="danhmuc"
      >
        <a-input v-model="formCategories.username" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formCategories: {
        username: "",
        password: "",
        remember: false
      }
    }
  },
  methods: {
    onFinish() {},
    onFinishFailed() {},
  }
}
</script>

