import fireball from '@/assets/icons/skills/mage/fireball.png'
import heal from '@/assets/icons/skills/mage/heal.png'
import {random} from "@/utils.js"


export const mageSkills = {
  attack: [
  {
    id: 0,
    name: "Fireball",
    damage() {
      return random(40,60)
    },
    cost: 30,
    price: 1,
    image: fireball,
    description: "30 to 50 fire damage"
  }
],
support: [
  {
    id: 0,
    name: "Heal",
    damage: {
      min: 30,
      max: 50
    },
    cost: 30,
    price: 1,
    image: heal,
    description: "Heals for 30 to 50 health points"
  }
]
}