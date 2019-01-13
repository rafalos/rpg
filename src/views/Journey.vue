<template>
<div>
  <div>
    <div class="map">
      <img src="http://pre12.deviantart.net/1d65/th/pre/f/2012/343/9/4/minecraft_rpg_world_map_by_lillintu-d5nhcrt.jpg">
      <router-link v-for="location in locations" :to="`journey/${location.slug}`" :location="location" :key="location.id"><div :id="`pin-${location.slug}`" class="pinbox">
      <h1 class="is-size-6 has-text-centered">{{location.name}}</h1>
       <h1 class="is-size-7 has-text-centered">Level: {{location.level}}</h1>
      </div></router-link>
    </div>
</div>
</div>

</template>

<script>
import {locations} from "../data/monsters/locations" 

export default {
  data() {
    return {
      log: [],
      inventory: false,
      gameRunning: false,
      title: "Test",
      message: null,
    }
  },
  computed: {
    player() {
      return this.$store.getters.player
    },
    locations() {
      return locations
    }
  }
} 
</script>

<style scoped>

.map {
  margin:10px;
  position: relative;
  display: inline-block;
}

.map img {
  max-width:100%;
  display: block;
}

.pinbox {
  border-radius: 10px;
  background: white;
  font-weight: bold;
  opacity: 0.8;
  color: black;
  padding: 5px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  cursor: pointer;
}

#pin-forest{
  top:60%;
  left:38%;
}

#pin-desert{
  top:60%;
  left:50%;
}

#pin-mountains{
  top:20%;
  left:40%;
}

#pin-3 {
  top:63%;
  left:48%;
}
.pinbox:hover {
  border: 2px solid black;
}
.pinbox:hover > .pin-text {
  display: block;
}

.pin-text {
  position: absolute;
  top:70%;
  transform:translateY(-50%);
  left:75%;
  white-space:nowrap;
  display: none;
}

.pin-text h3 {
    color:white;
    text-shadow: 1px 1px 1px #000;
}
</style>