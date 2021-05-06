<template>
  <div>
    <editor :options="options" :initialValue="text" ref="editor" align="left">
    </editor>
    <viewer v-if="toggle" :initialValue="text"></viewer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '# 이곳에 글을 써주세요! 오른쪽은 미리보기 입니다.',
      toggle: false,
      options: {
        language: "ko",
        hooks: {
          addImageBlobHook: this.addImageBlobHook
        }
      },
    }
  },

};
</script>

<style scoped>

</style>
