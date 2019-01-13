import archer from '@/assets/icons/classes/archer.png'
import mage from '@/assets/icons/classes/mage.png'
import warrior from '@/assets/icons/classes/warrior.png'

export const classes = [
  {
    id: 1,
    avatar: mage,
    type: "Mage",
    money: 44444,
    exp: 0,
    health: {
      max: 60,
      current: 60
    },
    mana: {
      max: 90,
      current: 90
    },
    damage: {
      min: 5,
      max: 10
    },
    critChance: 5,
    defense: 0,
    statPoints: 5,
    skillPoints: 5,
    strength: 5,
    dexterity: 5,
    intelligence: 9,
    vitality: 6,
    equipped: {
      helmet: null,
      legs: null,
      weapon: null,
      shield: null,
      armor: null,
      boots: null,
      gloves: null,
      ring1: null,
      ring2: null
    },
    inventory:{
      equipment: [],
      consumables: []
    },
    skills: {
      basic: [],
      attack:[],
      support: []
    }
  },
  {
    id: 2,
    avatar: archer,
    type: "Archer",
    money: 44444,
    exp: 0,
    health: {
      max: 100,
      current: 100
    },
    mana: {
      max: 100,
      current: 100
    },
    damage: {
      min: 15,
      max: 20
    },
    defense: 0,
    critChance: 50,
    skillPoints: 5,
    statPoints: 5,
    strength: 5,
    dexterity: 7,
    intelligence: 5,
    vitality: 5,
    equipped: {
      helmet: null,
      legs: null,
      weapon: null,
      shield: null,
      armor: null,
      boots: null,
      gloves: null,
      ring1: null,
      ring2: null
    },
    inventory:{
      equipment: [],
      consumables: []
    },
    skills: {
      basic: [],
      attack:[],
      support: []
    }
  },
  {
    id: 3,
    type: "Warrior",
    avatar: warrior,
    money: 44444,
    exp: 0,
    health: {
      max: 90,
      current: 90
    },
    mana: {
      max: 60,
      current: 60
    },
    damage: {
      min: 15,
      max: 35
    },
    critChance: 20,
    defense: 0,
    skillPoints: 5,
    statPoints: 5,
    strength: 7,
    dexterity: 6,
    intelligence: 6,
    vitality: 9,
    equipped: {
      helmet: null,
      legs: null,
      weapon: null,
      shield: null,
      armor: null,
      boots: null,
      gloves: null,
      ring1: null,
      ring2: null
    },
    inventory:{
      equipment: [],
      consumables: []
    },
    skills: {
      basic: [],
      attack:[],
      support: []
    }
  }
]