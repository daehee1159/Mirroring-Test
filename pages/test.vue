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
      try {
        this.data1 = await this.$axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log("data1 결과")
        console.log(this.data1)
        this.data2 = await this.$axios.get("https://jsonplaceholder.typicode.com/posts/1")
        console.log("data2 결과")
        console.log(this.data2)
        this.data3 = await this.$axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        console.log("data3 결과")
        console.log(this.data3)
        this.data4 = await this.$axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
        console.log("data4 결과")
        console.log(this.data4)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
