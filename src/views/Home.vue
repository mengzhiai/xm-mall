<template>
  <div class="home">
    <siteHeader></siteHeader>
    <div class="containers">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import siteHeader from '@/components/common/siteHeader'

export default {
  components: {
    siteHeader
  },
  data(){
    return {
      itemList: [

      ]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

