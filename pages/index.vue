<template>
  <div>
    <button @click.prevent="increment">increment</button>
    <p>{{ $store.state.example.val }}</p>
    <p>Cookie: {{ this.cookie }}</p>
    <p>
      CookieData : {{ this.cookieData }}
    </p>
    <p>
      CookieParse : {{ this.cookieParse }}
    </p>
  </div>
</template>

<script>
import cookie from "cookie";

export default {
  async fetch({
    req
              }) {
    cookie.parse(req.headers.cookie)
    const parseCookie = cookie.parse(req.headers.cookie)
    console.log("ddd")
    console.log(parseCookie.vuex)
    let parseJson = JSON.parse(parseCookie.vuex)
    console.log(parseJson)
    this.cookieData = await parseJson
    console.log(parseJson.example)
    console.log(parseJson.example.val)

    this.cookieParse = parseJson.example.val

  },

  data() {
    return {
      cookie: cookie,
      cookieData: {},
      cookieParse: 0
    };
  },
  mounted() {

  },
  methods: {
    increment() {
      this.$store.commit("example/increment");
    },
  },
};
</script>

<style scoped>
</style>
