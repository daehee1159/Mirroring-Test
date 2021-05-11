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
    <div>
      <input type="text" v-model="bizNum">
      <button @click="bizNumCheck">
        btn
      </button>
    </div>
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
      cookie     : cookie,
      cookieData : {},
      cookieParse: 0,
      bizNum : ''
    };
  },
  mounted() {

  },
  methods: {
    increment() {
      this.$store.commit("example/increment");
    },
    bizNumCheck() {
      this.checkCorporateRegiNumber(this.bizNum)
      alert(this.checkCorporateRegiNumber(this.bizNum))
    },

    checkCorporateRegiNumber(number) {
      // 코드 참조 https://myhappyman.tistory.com/129
      var numberMap = number.replace(/-/gi, '').split('').map(function (d) {
        return parseInt(d, 10);
      });

      if (numberMap.length === 10) {
        var keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
        var chk    = 0;

        keyArr.forEach(function (d, i) {
          chk += d * numberMap[i];
        });

        chk += parseInt((keyArr[8] * numberMap[8]) / 10, 10);
        console.log(chk);
        return Math.floor(numberMap[9]) === ((10 - (chk % 10)) % 10);
      }

      return false;
    }
  },
};
</script>

<style scoped>
</style>
