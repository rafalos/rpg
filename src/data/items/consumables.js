import healthpotion from '@/assets/icons/consumables/healthpotion.png'
import manapotion from '@/assets/icons/consumables/manapotion.png'
export const consumables =  [
  {
    id: 0,
    stackable: true,
    count: 1,
    stat: "health",
    category: "consumables",
    name: "Health potion",
    effect(player) {
      return player.health.current += 30
    },
    image: healthpotion,
    buyPrice: 50,
    sellPrice: 20,
    description: "Heals for 30 HP"
  },
  {
    id: 0,
    count: 1,
    stackable: true,
    stat: "mana",
    category: "consumables",
    name: "Mana potion",
    effect(player) {
      return player.mana.current += 30
    },
    image: manapotion,
    buyPrice: 50,
    sellPrice: 20,
    description: "Recovers 30 mana"
  }
]