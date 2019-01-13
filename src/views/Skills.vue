<template>
  <div>
    <h1>Skill Points: {{player.skillPoints}}</h1>
    <div class="columns">
      <div class="column">
        <h1 class="is-size-4 has-text-centered">Already know:</h1>
        <h1 v-if="player.skills.length==0">Nothing</h1>
        <div v-else>
          <div>
            <h1>Attack skills</h1>
            <Skill v-for="skill in player.skills.attack" class="inventorySlot tooltip" :skill="skill" :key="skill.name"/>  
          </div>
          <div>
            <h1>Support skills</h1>
            <Skill v-for="skill in player.skills.support" class="inventorySlot tooltip" :skill="skill" :key="skill.name"/>  
          </div>
        </div>
      </div>
      <div class="column">    
        <h1 class="is-size-4 has-text-centered">To learn:</h1>
        <div>
          <h1>Attack skills</h1>
          <Skill v-if="!player.skills.attack.includes(skill)" v-for="skill in skills.attack" class="inventorySlot tooltip" :skill="skill" :toLearn="true" :key="skill.name"/>  
        </div>
        <div>
          <h1>Support skills</h1>
          <Skill  v-if="!player.skills.support.includes(skill)" v-for="skill in skills.support" class="inventorySlot tooltip" :skill="skill" :toLearn="true" :key="skill.name"/>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
import {mageSkills} from "../data/skills/mage.js"
import {archerSkills} from "../data/skills/archer.js"
import {warriorSkills} from "../data/skills/warrior.js"
import Skill from "../components/skills/Skill"
export default {
  computed: {
    skills() {
      switch(this.player.type){
        case "Mage": 
          return mageSkills
        case "Warrior":
          return warriorSkills
        case "Archer":
          return archerSkills
      }
    },
    player() {
      return this.$store.getters.player
    },
    mageSkills() {
      return mageSkills
    }
  },
  components: {
    Skill
  }
}
</script>