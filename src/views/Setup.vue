<template>
  <div class="container">
    <div>
      <h1>Input your name:</h1>
      <input class="input is-primary" type="text" v-model="player.name">
    </div>
      <div class="columns">
        <div class="column classPreview" @click="player.class=profession" v-for="profession in classes" :key="profession.id">
          <h1 class="has-text-centered">{{profession.type}}</h1>
          <img :src="profession.avatar">
          <h1>Damage: {{profession.damage.min}} to {{profession.damage.max}}</h1>
          <h1>Strength: {{profession.strength}}</h1>
          <h1>Dexterity {{profession.dexterity}}</h1>
          <h1>Intelligence {{profession.intelligence}}</h1>
          <h1>Vitality {{profession.vitality}}</h1>
        </div>
      </div>
    <div class="has-text-centered">
      <button  class="button is-primary" v-if="player.class.type">{{player.class.type}}</button>
      <button  class="button is-primary is-disabled" v-else>{{player.class}}</button>
      <button @click="startGame" class="button is-primary">Enter the game</button>
    </div>
  </div>
</template>

<script>

import {consumables} from "../data/items/consumables"
import {classes} from "../data/character/classes"
import {mageSkills} from "../data/skills/mage"
import {warriorSkills} from "../data/skills/warrior"
import {archerSkills} from "../data/skills/archer"
import {levels} from "../data/character/levels"
import {swords} from '../data/items/swords.js'
import {shields} from '../data/items/shields.js'

export default {
  data() {
    return {
      classes: classes,
      player: {
        name: "Brave hero",
        class: "Your Choice"
      }
    }
  },
  methods: {
    startGame() {
      let player = _.cloneDeep(this.player.class)
      player.name = this.player.name
      player.inventory.consumables.push(_.clone(consumables[0]))
      player.inventory.equipment.push(swords[0])
      player.inventory.equipment.push(shields[0])
      player.playerLevel = levels[0]
      player.inventory.consumables.push(_.clone(consumables[1]))
      switch(this.player.class.type){
        case "Mage":
         player.skills.attack.push(mageSkills.attack[0])
         break;
         case "Warrior":
         player.skills.attack.push(warriorSkills.attack[0])
         break;
         case "Archer":
         player.skills.attack.push(archerSkills.attack[0])
         break;
      }
      this.$store.dispatch('setPlayer', player)
      this.$router.push("/character")
    }
  }
}
</script>

<style scoped>
  .classPreview {
    margin: 25px;
    cursor: pointer;
  }
  .classPreview:hover{
    border-bottom: 3px solid white;
  }
</style>