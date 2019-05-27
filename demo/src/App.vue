<template>
  <div id="app">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pokedex" class="nav-link">Pokedex</router-link>
        </li>
      </ul>
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
</style>
