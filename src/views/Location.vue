<template>
 <div>
   <Battle v-if="fighting !== null" :fighting="fighting" @ranAway="fighting=null" @monsterKilled="handleMonsterKilled"/>
   <div v-else>
       <div class="columns">
           <div class="column">
               <div :style="{ 'background-image': 'url(' + location.image + ')' }" style="padding: 50px;">
               <h1 class="is-size-3 is-inline">{{location.name}}</h1>
                <h1 class="is-size-3 is-pulled-right ">Level: {{location.level}}</h1>
                </div>
           </div>
       </div>
            <div class="bar-container">
                <div class="progress-bar" :style="{width: location.progress + '%'}"></div>
                <h1 class="has-text-centered is-size-6">Exploration progress: {{location.progress}} %</h1>
            </div>
        <h1 class="has-text-centered">Monsters you can find:</h1>
        <div class="columns">
            <div class="column">
                <h1 class="has-text-centered">{{location.monsters.common.length}} Common:</h1>
                <div v-for="monster in location.monsters.common" :key="monster.id">
                    <img class="is-inline" :src="monster.image">
                    <h1 class="is-inline">{{monster.name}}</h1>
                </div>
            </div>
            <div class="column">
                <h1 class="has-text-centered">{{location.monsters.rare.length}} Rare:</h1>
                <div v-for="monster in location.monsters.rare" :key="monster.id">
                    <img class="is-inline" :src="monster.image">
                    <h1 class="is-inline">{{monster.name}}</h1>
                </div>
            </div>
            <div class="column">
                <h1 class="has-text-centered">{{location.monsters.boss.length}} Boss:</h1>
                <div v-for="monster in location.monsters.boss" :key="monster.id">
                    <img class="is-inline" :src="monster.image">
                    <h1 class="is-inline">{{monster.name}}</h1>
                </div>
            </div>
        </div>
        
        <router-link to="/journey"><button class="button is-warning">Back</button></router-link>
        <button class="button is-primary" @click="searchOpponent()">Explore</button>
        <button v-if="location.progress === 100" class="button is-primary is-pulled-right" @click="searchOpponent()">Boss hideout</button>
    </div>
 </div>
</template>

<script>  
import {locations} from "../data/monsters/locations" 
import Battle from "../components/battle/Battle"
import functions from "../mixins/functions"
export default {
    data() {
        return {
            location: null,
            fighting: null
        }
    },
    mixins:[functions],
    created() {
        switch(this.$route.params.location){
            case "forest":
                this.location = locations[0]
                break;
            case "desert":
                this.location = locations[1]
                break;
            case "mountains":
                this.location = locations[2]
                break;
        }

    },
    methods: {
        searchOpponent() {
            var random = this.getRandomNumber(0,this.location.monsters.common.length) 
            this.fighting = _.cloneDeep(this.location.monsters.common[random])
            this.log = []
            this.message = null;
        },
        handleMonsterKilled() {
            this.fighting = null
            var progress =  this.generateProgress()
            if (this.location.progress>=100) {
                return "its full"
            } else {
                console.log(this.location.progress +  progress >= 100)
                if(this.location.progress + progress < 100) {
                    this.location.progress+= progress
                } else {
                    this.location.progress+= (100-this.location.progress)
                }
            }
        },
        generateProgress() {
            return this.getRandomNumber(1,5)
        }
    },
    components: {
        Battle
    }   
}
</script>

<style scoped>
    .progress-bar{
        background: rgb(79, 138, 172);
        height: 30px;
        transition: 0.5s;
    }
</style>