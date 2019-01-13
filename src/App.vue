<template>
<div id="app">
  <div class="columns">
    <div class="column is-one-fifth" v-if="this.$store.state.player !== null">
      <navigation />
    </div>
    <div class="column">
      <div v-if="player !== null" class="hero">
        <status-bars/>
      </div>
      <router-view style="background: #32425a; padding: 30px; opacity: 0.9"></router-view>
    </div>
    <div class="column is-one-fifth" v-if="player !== null">
  <div  class="contentBox">
    <player-stats/>
  </div>
    </div>
  </div>
</div>
</template>

<script>
  import StatusBars from "./components/StatusBars"
  import Navigation from "./components/Navigation"
  import PlayerStats from "./components/PlayerStats"
  export default {
    components: {
      Navigation,
      PlayerStats,
      StatusBars
    },
    created() {
      if(this.$store.state.player == null) {
        this.$router.push("/setup")
      }
    },
    computed: {
    player() {
      return this.$store.getters.player
    }
  },
  methods: {
      addStat(stat){
        if(this.player.statPoints>0){
          this.$store.dispatch('addedStatPoint', stat)
        } else {
          return alert("Not enough stat points")
        }
      }
    }
  }
</script>

<style>
#app {
  height:100vh;
  padding: 50px;
  font-family: 'El Messiri', sans-serif;
  color: white;
  background-image: url('https://wallpaper-house.com/data/out/10/wallpaper2you_426902.jpg');
  background-repeat: no-repeat;
  background-size: auto;
}
</style>