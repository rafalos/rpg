<template>
<div class="has-text-centered is-size-5">
  <h1>Damage: {{player.damage.min}} to {{player.damage.max}}</h1>
  <h1>Defense: {{player.defense}}</h1>
  <h1>Critical Chance: {{player.critChance}} %</h1>
  <h1>Skill points: {{player.skillPoints}}</h1>
  <h1>Stat points: {{player.statPoints}}</h1>
  <h1>Strength: {{player.strength}}<button v-if="player.statPoints>0" class="button is-warning is-small" @click="addStat('strength')">+</button></h1>
  <h1>Dexterity {{player.dexterity}}<button v-if="player.statPoints>0" class="button is-success is-small" @click="addStat('dexterity')">+</button></h1>
  <h1>Intelligence {{player.intelligence}}<button v-if="player.statPoints>0" class="button is-info is-small" @click="addStat('intelligence')">+</button></h1>
  <h1>Vitality {{player.vitality}}<button v-if="player.statPoints>0" class="button is-danger is-small" @click="addStat('vitality')">+</button></h1>
</div>
</template>

<script>
export default {
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