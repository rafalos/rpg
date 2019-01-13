import Vue from 'vue'
import Vuex from 'vuex'
import {levels} from "./data/character/levels"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: null,
    fighting: false
  },
  mutations: {
    SET_PLAYER(state, player) {
      state.player = player
    },
    UPDATE_STAT(state, stat) {
      state.player.statPoints --
      state.player[stat]++
      switch(stat) {
        case "vitality":
          state.player.health.max += 100
          state.player.health.current = state.player.health.max
          break;
        case "intelligence":
          state.player.mana.max += 100
          state.player.mana.current = state.player.mana.max
          break;
        case "strength":
          state.player.damage.min +=1
          state.player.damage.max +=1
          break;
        case "dexterity":
          state.player.critChance +=1
          break;
      }
    },
    REMOVE_CONSUMABLE(state, item, index) {
      item.effect(state.player)
      if(item.count > 1) {
        item.count--
      } else {
        state.player.inventory.consumables.splice(index, 1)
      }
    },
    ADD_INVENTORY_ITEM(state, item) {
      state.player.money -= item.buyPrice
      if(item.stackable) {
        var playeritem = state.player.inventory.consumables.find(x => x.name === item.name)
        if(!playeritem) {
          state.player.inventory[item.category].push(item)
        } else {
          playeritem.count++
        }

      } else {
        state.player.inventory[item.category].push(item)
      }
      
    },
    EQUIP_ITEM(state, data) {
      state.player.equipped[data.slot] = data.item
      state.player.inventory.equipment.splice(data.index, 1)
    },
    INCREASE_LEVEL(state, data) {
      state.player.exp -= data.gainedExp
      var difference = state.player.playerLevel.requried - state.player.exp
      console.log(data.gainedExp)
      if(data.gainedExp > difference) {
        state.player.playerLevel = levels[data.level]
        state.player.statPoints += 5;
        state.player.exp = data.gainedExp - difference;
      } else {
        state.player.playerLevel = levels[data.level]
        state.player.statPoints += 5;
        state.player.exp = 0;
      }
    }
  },
  actions: {
    setPlayer({commit}, player) {
      commit("SET_PLAYER", player)
    },
    addedStatPoint({commit}, stat) {
      commit("UPDATE_STAT", stat)
    },
    usedConsumable({commit}, item, index) {
      commit('REMOVE_CONSUMABLE', item, index)
    },
    boughtItem({commit}, item) {
      commit('ADD_INVENTORY_ITEM', item)
    },
    equippedItem({commit}, data) {
      commit('EQUIP_ITEM', data)
    },
    leveledUp({commit}, data) {
      commit('INCREASE_LEVEL', data)
    }
  },
  getters: {
    player: (state) => {
      return state.player
    },
    fightStatus: (state) => {
      return state.fighting
    }
  }
})
