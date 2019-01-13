<template>
  <div>
    <PlayerStatus />
    <router-link class="nav-item" to="/character">Character</router-link>
    <router-link class="nav-item" to="/inventory">Inventory</router-link>
    <router-link class="nav-item" to="/journey">Journey</router-link>
    <router-link class="nav-item" to="/skills">Skills</router-link>
    <router-link class="nav-item" to="/shop">Shop</router-link>
    <router-link class="nav-item" to="/forge">Forge</router-link>
  </div>
</template>
<script>
import PlayerStatus from "./PlayerStatus"
export default {
  components: {
    PlayerStatus
  }
}
</script>
<style>
  .nav-item {
    color: white;
    font-size: 1.3em;
    display: block;
    text-align: center;
    padding: 10px;
  }
  .nav-item:hover {
    border: 2px solid white;
    color: white;
  }

</style>
