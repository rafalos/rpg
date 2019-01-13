import powerslash from '@/assets/icons/skills/warrior/powerslash.png'
import stoneskin from '@/assets/icons/skills/warrior/stoneskin.png'
import {random} from "@/utils.js"


export const warriorSkills = {
  attack: [
  {
    id: 0,
    name: "Power Slash",
    damage() {
      return random(30,50)
    },
    cost: 30,
    price: 1,
    image: powerslash,
    description: "Slash enemy for 30-50 damage"
  }
],
support: [
  {
    id: 0,
    name: "Stone Skin",
    damage: {
      min: 30,
      max: 50
    },
    cost: 30,
    price: 1,
    image: stoneskin,
    description: "Gain 50 points of defense"
  }
]
}