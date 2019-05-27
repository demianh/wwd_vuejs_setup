<template>
  <div class="home">
    <br><br>
    <img alt="Vue logo" src="../assets/logo.png">
    <br><br>
    <i class="fa fa-beer"></i>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
<style lang="less">
  .fa {
    font-size: 50px;
  }
</style>
