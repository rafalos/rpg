import skeleton from '@/assets/icons/monsters/skeleton.png'
import elf from '@/assets/icons/monsters/elf.png'
import serpent from '@/assets/icons/monsters/serpent.png'
import hydra from '@/assets/icons/monsters/hydra.png'

export const forestMonsters =  {
  common: [
    {
      quality: "Common",
      name: "Skeleton",
      exp: 36,
      health: {
        max: 100,
        current: 100
      },
      mana: {
        max: 100,
        current: 100
      },
      image: skeleton,
      attacks: {
        basic: {
          min: 10,
          max: 30
        },
        strongFury: {
          min: 10,
          max: 30
        },
      }
      },
    {
      name: "Elf",
      health: {
        max: 150,
        current: 150
      },
      image: elf,
      exp: 58,
      attacks: {
        strongFury () {
          console.log(store.getters.randomNumber)
        }
      }
    },
    {
      name: "Serpent",
      health: {
        max: 150,
        current: 150
      },
      image: serpent,
      exp: 62,
      attacks: {
        strongFury () {
          console.log(store.getters.randomNumber)
        }
      }
    }
  ],
  rare: [],
  boss: [
    {
      name: "Hydra",
      health: {
        max: 150,
        current: 150
      },
      image: hydra,
      exp: 50,
      attacks: {
        strongFury () {
          console.log(store.getters.randomNumber)
        }
      }
    }
  ]
}