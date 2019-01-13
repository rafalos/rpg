<template>
<div>
<div class="columns">
  <div class="column">
  <h1>Currently Equipped</h1>
  <div class="table_wrapper">
    <table class="table is-bordered equipment">
      <tbody>
        <tr>
          <td class="inventorySlot"></td>
          <td class="inventorySlot">
            <div>
            <img v-if="player.equipped.helmet == null" class="inventoryicon" src="@/assets/icons/eqslots/helmet.png">
            <Item v-else :item="player.equipped.helmet"/>
          </div>
          </td>
          <td class="inventorySlot"></td>
        </tr>
        <tr>
          <td class="inventorySlot">
            <div>
              <img v-if="player.equipped.weapon == null" class="inventoryicon" src="@/assets/icons/eqslots/weapon.png">
                <Item v-else :item="player.equipped.weapon"/>
            </div>
          </td>
          <td class="inventorySlot">
            <div>
              <img v-if="player.equipped.armor == null" class="inventoryicon" src="@/assets/icons/eqslots/armor.png">
              <Item v-else :item="player.equipped.armor"/>
            </div>
          </td>
          <td class="inventorySlot">
            <div>
              <img v-if="player.equipped.shield == null" class="inventoryicon" src="@/assets/icons/eqslots/shield.png">
              <Item v-else :item="player.equipped.shield"/>
            </div>
          </td>
        </tr>
        <tr>
          <td class="inventorySlot"></td>
          <td class="inventorySlot">
            <div>
              <img v-if="player.equipped.legs == null" class="inventoryicon" src="@/assets/icons/eqslots/legs.png">
              <Item v-else  :item="player.equipped.legs"/>
            </div>
          </td>
          <td class="inventorySlot">
            <div>
              <img v-if="player.equipped.gloves == null" class="inventoryicon" src="@/assets/icons/eqslots/gloves.png">
              <Item v-else :item="player.equipped.gloves"/>
            </div>
          </td>
        </tr>
        <tr>
          <td class="inventorySlot">
            <div>
              <img v-if="player.equipped.ring1 == null" class="inventoryicon" src="@/assets/icons/eqslots/ring.png">
              <Item v-else :item="player.equipped.ring1"/>
            </div>
          </td>
          <td class="inventorySlot">
            <div>
              <img v-if="player.equipped.boots == null" class="inventoryicon" src="@/assets/icons/eqslots/boots.png">
              <Item v-else :item="player.equipped.boots"/>
            </div>
          </td>
          <td class="inventorySlot">
            <div>
              <img v-if="player.equipped.ring2 == null" class="inventoryicon" src="@/assets/icons/eqslots/ring.png">
              <Item v-else :item="player.equipped.ring2"/>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  <div class="column">
      <h1 class="is-size-4 has-text-centered">Bag {{player.inventory.equipment.length+player.inventory.consumables.length}} / 20</h1>
      <h1>Equipment</h1>
      <Item v-for="(item, index) in player.inventory.equipment" @click.native="equipItem(item, index, item.slot)" :item="item" :key="item.name"/>
      <h1>Consumables</h1>
      <Item v-for="item in player.inventory.consumables" :item="item" :key="item.name"/>
  </div>
</div>
</div>
</template>

<script>
import Item from "../components/inventory/Item"
export default {
  computed: {
    player() {
      return this.$store.getters.player
    }
  },
  methods: {
    equipItem(item, index, slot) {
     this.$store.dispatch('equippedItem', {item, index, slot})
    },
    encode() {
      let objJsonStr = JSON.stringify(this.player);
      let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
    }
  },
  components: {
      Item
    }
}
</script>

<style scoped>

.inventorySlot {
  padding: 5px;
}
  .inventoryicon {
    width: 50px;
    height: 50px;
  }
</style>