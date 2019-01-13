import {forestMonsters} from '@/data/monsters/forestMonsters.js'
import {desertMonsters} from '@/data/monsters/desertMonsters.js'
import {snowyMonsters} from '@/data/monsters/snowyMonsters.js'
import snowymountains from '@/assets/images/locations/snowymountains.png'
import darkforest from '@/assets/images/locations/darkforest.png'
import desert from '@/assets/images/locations/desert.png'

export const locations =  [
  {
    id: 0,
    slug: "forest",
    name: "Dark Forest",
    level: 1,
    monsters: forestMonsters,
    image: darkforest,
    progress: 100
  },
  {
    id: 1,
    slug: "desert",
    name: "Desert sands",
    level: 5,
    monsters: desertMonsters,
    image: desert,
    progress: 0
  },
  {
    id: 2,
    slug: "mountains",
    name: "Snowy mountains",
    level: 10,
    monsters: snowyMonsters,
    image: snowymountains,
    progress: 0
    }
]