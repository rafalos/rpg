import skeleton from '@/assets/icons/monsters/skeleton.png'

export const desertMonsters =  {
  common: [
    {
      quality: "Common",
      name: "Skeleton",
      exp: 30,
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
      name: "Witch",
      health: {
        max: 150,
        current: 150
      },
      exp: 50,
      attacks: {
        strongFury () {
          console.log(store.getters.randomNumber)
        }
      }
    }
  ],
  rare: [],
  boss: []
}