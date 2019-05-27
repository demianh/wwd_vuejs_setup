<template>
  <div class="home">
    <br><br>
    <h1>{{apstate.name}}</h1>
    <br><br>
    <i class="fa fa-beer"></i>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import {IAppState} from "@/store/modules/App"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  get appstate(): IAppState {
    return this.$store.state.App;
  }
}
</script>
<style lang="less">
  .fa {
    font-size: 50px;
  }
</style>
