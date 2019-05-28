<template>
  <div class="home">
    <h1>{{appstate.name}}</h1>
    <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <br><br>
    <i class="fa fa-beer"></i>
    <div>
      <h3>Modal Demo</h3>
      <b-button @click="$refs.modal1.show()">Launch demo modal</b-button>
      <b-modal id="modal-1" title="BootstrapVue" ref="modal1">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {IAppState} from "@/store/modules/App";
import {BModal} from "bootstrap-vue";

@Component({})
export default class Home extends Vue {

  $refs!: {
    modal1: BModal
  };

  get appstate(): IAppState {
    return this.$store.state.App;
  }
}
</script>
<style lang="less">
  .fa {
    font-size: 50px;
  }
  .logo {
    width: 150px;
  }
</style>
