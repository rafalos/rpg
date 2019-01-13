<template>
  <div >
    <div class="bar-container">
      <div class="hp-bar bar" :style="{width: (playerHealth.current/playerHealth.max)*100 + '%'}"></div>
      <h1 class="has-text-centered">Health: {{playerHealth.current}} /  {{playerHealth.max}}</h1>
    </div>
    <div class="bar-container">
      <div class="mana-bar bar" :style="{width: (playerMana.current/playerMana.max)*100 + '%'}"></div>
      <h1 class="has-text-centered">Mana: {{playerMana.current}} /{{playerMana.max}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    playerHealth() {
      return this.$store.getters.player.health
    },
    playerMana() {
      return this.$store.getters.player.mana 
    }
  }
} 
</script>

<style scoped>
  .bar-container {
    display: inline-block;
    width: 50%;
  }

  .hp-bar {
    background: darkred;
    height: 50px;
    transition: 0.5s;
  }

.mana-bar {
  background: darkblue;
  height: 50px;
  transition: 0.5s;
}
</style>