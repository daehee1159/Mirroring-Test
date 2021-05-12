<template>
  <div>
<!--    <button @click.prevent="increment">increment</button>-->
<!--    <p>{{ $store.state.example.val }}</p>-->
<!--    <p>Cookie: {{ this.cookie }}</p>-->
<!--    <p>-->
<!--      CookieData : {{ this.cookieData }}-->
<!--    </p>-->
<!--    <p>-->
<!--      CookieParse : {{ this.cookieParse }}-->
<!--    </p>-->
    <div>
      <input id="bizNum" type="text" v-model="bizNum" maxlength="12">
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
    let bizNum = document.getElementById('bizNum');

    bizNum.onkeyup = function() {
      console.log(this.value);
      this.value = addAutoHyphen(this.value) ;
    }

    function addAutoHyphen(str) {
      str = str.replace(/[^0-9]/g, '');
      let tmp = '';
      if( str.length < 4){
        return str;
      }else if(str.length < 6){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
      }else if(str.length < 11){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 2);
        tmp += '-';
        tmp += str.substr(5);
        return tmp;
      }

      return str;
    }
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
      let numberMap = number.replace(/-/gi, '').split('').map(function (d) {
        return parseInt(d, 10);
      });

      if (numberMap.length === 10) {
        let keyList = [1, 3, 7, 1, 3, 7, 1, 3, 5];
        let chk    = 0;

        keyList.forEach(function (d, i) {
          chk += d * numberMap[i];
        });

        chk += parseInt((keyList[8] * numberMap[8]) / 10, 10);
        console.log(chk);
        console.log(numberMap[9])
        console.log((10 - (chk % 10)) % 10)
        return Math.floor(numberMap[9]) === ((10 - (chk % 10)) % 10);
      }

      return false;
    },
  },
};
</script>

<style scoped>
</style>
