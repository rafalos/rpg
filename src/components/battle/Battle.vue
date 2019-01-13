<template>
<div>
    <div class="is-hero" id="summary" v-if="!inFight">
        <h1>You have defeated {{fighting.name}}</h1>
        <h1>Gained {{fighting.exp}} experience</h1>
        <h1>Looted:</h1>
        <button class="button is-primary" @click="$emit('monsterKilled')">Back</button>
    </div>
    <div v-else>
    <div class="columns">
        <div class="column">
        <h1 class="has-text-centered">{{player.name}}</h1>
            <div class="battle-nav">
                <h1>Actions</h1>
                <button :class="{'fight-button-inactive': monsterAttacking}" :disabled="monsterAttacking" class="fight-button" @click="normalAttack"><img :src="basicAttackIcon"></button>
                <button :class="{'fight-button-inactive': monsterAttacking}" :disabled="monsterAttacking" class="fight-button"><img :src="guardIcon"></button>
                <button :class="{'fight-button-inactive': monsterAttacking}" :disabled="monsterAttacking" class="fight-button" @click="leaveFight"><img :src="runIcon"></button>
            </div>
             <div>
                <h1>Attack skills</h1>
                <Skill :class="{'fight-button-inactive': monsterAttacking}" @click.native="useSkill(skill)" v-for="skill in player.skills.attack" :skill="skill" :key="skill.name"/>
                <h1>Support skills</h1>
                <Skill :class="{'fight-button-inactive': monsterAttacking}" v-for="skill in player.skills.support" :skill="skill" :key="skill.name"/>
            </div>
            <div>
                <h1>Consumables</h1>
                <Item :class="{'fight-button-inactive': monsterAttacking}" v-for="(item, index) in player.inventory.consumables" :item="item" :key="item.name" @click.native="useConsumable(item, index)"/>
            </div>
        </div>
        <div class="column">
            <h1 class="has-text-centered">{{fighting.name}}</h1>
            <div>
            <img :src="fighting.image" style="width: 5em; margin: 0 auto; display: block;" >
            </div>
            <div class="bar-container">
                <div class="hp-bar bar" :style="{width: (fighting.health.current/fighting.health.max)*100 + '%'}"></div>
                <h1 class="has-text-centered">Health: {{fighting.health.current}} /  {{fighting.health.max}}</h1>
            </div>
        </div>
    </div>
    <div class="columns" v-if="log">
        <div class="column">
            <div>
                <ul>
                    <li v-for="log in log" :key="log">{{log}}</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import Item from "../../components/inventory/Item"
import Skill from "@/components/skills/Skill"
import functions from "../../mixins/functions"
import basicAttack from "@/assets/icons/skills/default/basicattack.png"
import guard from "@/assets/icons/skills/default/guard.png"
import run from "@/assets/icons/skills/default/run.png"
export default {
    props: ['fighting'],
    mixins:[functions],
    components: {
        Item,
        Skill
    },
    data() {
        return {
            log: [],
            message: null,
            inFight: true,
            monsterAttacking: false
        }
    },
    computed: {
        player() {
            return this.$store.getters.player
        },
        basicAttackIcon() {
            return basicAttack
        },
        runIcon() {
            return run
        },
        guardIcon() {
            return guard
        }
    }, 
    methods: {
        useSkill(skill){
            if(this.monsterAttacking) {
                return "monster is attacking"
            } else {
                this.player.mana.current -= skill.cost
                var damage = skill.damage()
                this.fighting.health.current -= damage
                this.monsterAttack()
                this.checkMonster()
                this.generateLog("player", damage)
            }
        },
        useConsumable(item, index) {
            if(this.monsterAttacking) {
                return "monster is attacking"
            } else {
                let stat = item.stat
                if(this.player[stat].current==this.player[stat].max) {
                    alert(`You already have max ${stat}`)
                } else {
                    this.$store.dispatch('usedConsumable', item, index)
                    this.monsterAttack()
                }
            } 
        },
        normalAttack(){
            var damage;
            var isCritical = this.getRandomNumber(1,100)
            if(isCritical <= this.player.critChance) {
                console.log(isCritical)
                damage = this.getRandomNumber(this.player.damage.min,this.player.damage.max) * 2
                this.fighting.health.current -= damage
                this.monsterAttack()
                this.checkMonster()
                this.generateLog("player crit", damage)
            } else {
                damage = this.getRandomNumber(this.player.damage.min,this.player.damage.max)
                this.fighting.health.current -= damage
                this.monsterAttack()
                this.checkMonster()
                this.generateLog("player", damage)
            }
            
        },
        leaveFight() {
            this.recoverPlayer()
            this.$emit('ranAway')
        },
        monsterAttack() {
             if(this.fighting.health.current <= 0) {
                 return "im fucking dead"
             } else {
                this.monsterAttacking = true;
                var vm=this
                setTimeout(function(){
                    var damage = vm.getRandomNumber(10, 30)
                    vm.player.health.current -= damage
                    vm.generateLog("monster", damage)
                    vm.monsterAttacking = false;
                },2000)
             }  
        },
        generateLog(who, damage){
            this.log.push(`${who} attacked for ${damage}`)
        },
        checkMonster() {
            if(this.fighting.health.current <= 0 ) {
                this.inFight = false;
                this.recoverPlayer()
                this.player.exp += this.fighting.exp
                this.player.money += this.getRandomNumber(10, 30)
                this.checkLevelUp(this.fighting.exp)
            }
        },
        recoverPlayer() {
            this.player.health.current = this.player.health.max
            this.player.mana.current = this.player.mana.max
        },
        checkLevelUp(gainedExp) {
            if(this.player.exp >= this.player.playerLevel.requried) {
                this.$store.dispatch('leveledUp', {
                    level: this.player.playerLevel.level,
                    gainedExp: gainedExp
                    })
            }
        }
    }
    }
</script>  
<style>
    .hp-bar {
        border: 1px solid black;
        background: darkred;
        height: 50px;
        transition: 0.5s;
    }
    #summary {
        padding: 30px;
        transition: 0.5s;
    }
    .fight-button {
        background: white;
        border: none;
        cursor: pointer;
        margin-right: 5px;
        padding: 5px;
    }
    
    .fight-button-inactive {
        opacity: 0.5
    }
</style> 