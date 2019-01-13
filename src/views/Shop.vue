<template>
  <div>
  <div class="columns">
    <div class="column">
    <h1 class="is-size-4">Your bag: {{player.inventory.equipment.length+player.inventory.consumables.length}} / 20</h1>
      <ul>
        <h1>Equipment</h1>
        <Item v-for="item in player.inventory.equipment" :isSelling="true" :item="item" :key="item.name"/>
      </ul>
      <ul>
        <h1>Consumables</h1>
        <Item v-for="item in player.inventory.consumables" :isSelling="true" :item="item" :key="item.name"/>
      </ul>
    </div>
    <div class="column">
    <h1 class="is-size-4">Deeck</h1>
      <ul>
        <h1>Consumables</h1>
          <Item v-for="item in consumables" @click.native="buyItem(item)" :isBuying="true" :item="item" :key="item.name"/>
      </ul>
    </div>
  </div>
   
  </div>
</template>

<script>
import Item from "../components/inventory/Item"
import {consumables} from "../data/items/consumables"
export default {
  computed: {
    player() {
      return this.$store.getters.player
    },
    consumables() {
      return consumables
    }
  },
  methods: {
    buyItem(item) {
      if(this.player.money>=item.buyPrice && this.player.inventory.equipment.length+this.player.inventory.consumables.length < 20) {
        this.$store.dispatch('boughtItem', item)
      } else {
        return alert("Not enough money or bag full")
      }
    }
  },
  components: {
    Item
  }
}
</script>

<style scoped>
  .inventorySlot {
  margin: 5px;
  display: inline;
  cursor: pointer;
  opacity: 0.8;
}

img {
  border: 2px solid white;
  background: white;
}
</style>