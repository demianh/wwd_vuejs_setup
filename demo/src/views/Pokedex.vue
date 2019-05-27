<template>
  <div class="pokedex">
    <h1>Pokedex</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="pokemon in pokedex">
        <img :src="pokemon.art_url" width="25" class="pokemon_image">
        <b>{{pokemon.name}}</b>
        <span class="text-muted"> {{pokemon.types.join(', ')}}</span>
        <span class="float-right">
          #{{pokemon.pkdx_id}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Pokedex extends Vue {

  private pokedex: IPokemon[] = [];

  public async mounted() {
    let response = await this.$axios.get('/api/api.php/pokemon');
    this.pokedex = response.data;
  }
}
</script>
<style lang="less">
  .pokemon_image {
    margin-right: 10px;
  }
</style>
