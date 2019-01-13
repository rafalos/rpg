import skeleton from '@/assets/icons/monsters/skeleton.png'

export const snowyMonsters =  {
  common: [
    {
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
  boss: [
    {
      name: "Uber Skeleton",
      exp: 300,
      health: {
        max: 300,
        current: 300
      },
      mana: {
        max: 300,
        current: 300
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
      }
  ]
}