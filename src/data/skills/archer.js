import powerarrow from '@/assets/icons/skills/archer/powerarrow.png'
import focus from '@/assets/icons/skills/archer/focus.png'
import {random} from "@/utils.js"


export const archerSkills = {
  attack: [
  {
    id: 0,
    name: "Power arrow",
    damage() {
      return random(30,40)
    },
    cost: 10,
    price: 1,
    image: powerarrow,
    description: "30 to 40 damage"
  }
],
support: [
  {
    id: 0,
    name: "Focus",
    damage: {
      min: 30,
      max: 50
    },
    cost: 30,
    price: 1,
    image: focus,
    description: "Restores 30 mana"
  }
]
}