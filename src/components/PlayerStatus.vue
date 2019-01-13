<template>
    <div>
        <div class="columns">
            <div class="column is-one-fifth">
                <img class="image" :src="player.avatar">
            </div>
            <div class="column">
                <h1 class="is-size-4">{{player.name}}</h1>
                <h1 class="is-size-5">Level: {{player.playerLevel.level}}</h1>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="bar-container">
                <div class="exp-bar bar" :style="{width: (player.exp/player.playerLevel.requried)*100 + '%'}"></div>
                <h1 class="is-size-5">Experience: {{player.exp}} / {{player.playerLevel.requried}}  ({{(player.exp/player.playerLevel.requried)*100}} %) </h1>
            </div>
        <h1 class="is-size-5" style="color: yellow">Gold: {{player.money}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        player() {
            return this.$store.getters.player
        }
  }
}    
</script>
<style>
    .exp-bar {
    background: darkgoldenrod;
    height: 20px;
    transition: 0.7s;
  }
</style>
