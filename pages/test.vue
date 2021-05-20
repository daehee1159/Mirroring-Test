<template>
  <div>
    <button class="btn btn-primary" @click="testMethod">
      TEST BUTTON
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1 : [],
      data2 : {},
      data3 : [],
      data4 : [],
    }
  },
  methods: {
    async testMethod() {
      // 이 값들은 async await 를 빼고도 해보고 .then을 써서도 해보면서 테스트
      await this.$axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.data1 = res
        console.log("data1 결과")
      })
      await this.$axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        this.data2 = res
        console.log("data2 결과")
      })
      await this.$axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(res => {
        this.data3 = res
        console.log("data3 결과")
      })
      await this.$axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then(res => {
        this.data4 = res
        console.log("data4 결과")
      })
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
