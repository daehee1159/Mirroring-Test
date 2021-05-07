<template>
  <div>

  </div>
</template>

<script>
import ENV from '@/env'

export default {
  mounted() {
    // console.log(process.env.TEST_VARIABLE)

    console.log(ENV.google.googleApiKey1)
    console.log(ENV.google.googleApiKey2)
  }
}
</script>

<style scoped>

</style>
