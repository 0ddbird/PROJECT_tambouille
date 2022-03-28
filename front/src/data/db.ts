// const months [= ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
import { v4 as uuidv4 } from 'uuid'
import { Iingredient } from '../types'

/*
{
  0: 'main_season',
  1: 'secondary_season',
  2: 'not available'
}
 */
const shellsAndMolluscs:Iingredient[] = [
  {
    name: 'bigorneau',
    id: uuidv4(),
    category: 'shell',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'bulot',
    id: uuidv4(),
    category: 'shell',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'calmar',
    id: uuidv4(),
    category: 'mollusc',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'coque',
    id: uuidv4(),
    category: 'shell',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'coquille saint-jacques',
    id: uuidv4(),
    category: 'shell',
    months: [0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0]
  },
  {
    name: 'escargot',
    id: uuidv4(),
    category: 'shell',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'huître',
    id: uuidv4(),
    category: 'shell',
    months: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
  },
  {
    name: 'moule',
    id: uuidv4(),
    category: 'shell',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'pétoncle',
    id: uuidv4(),
    category: 'shell',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
]

const crustaceans:Iingredient[] = [
  {
    name: 'araignée de mer',
    id: uuidv4(),
    category: 'crustacean',
    months: [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0]
  },
  {
    name: 'crevette',
    id: uuidv4(),
    category: 'crustacean',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'homard',
    id: uuidv4(),
    category: 'crustacean',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'langouste',
    id: uuidv4(),
    category: 'crustacean',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'langoustine',
    id: uuidv4(),
    category: 'crustacean',
    months: [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1]
  },
  {
    name: 'oursin',
    id: uuidv4(),
    category: 'crustacean',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'tourteau',
    id: uuidv4(),
    category: 'crustacean',
    months: [2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2]
  }
]

const fruits:Iingredient[] = [
  {
    name: 'abricot',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2]
  },
  {
    name: 'ananas',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'avocat',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
  },
  {
    name: 'banane',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'cassis',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2]
  },
  {
    name: 'cerise',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2]
  },
  {
    name: 'citron',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'clémentine',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0]
  },
  {
    name: 'figue',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'fraise',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
  },
  {
    name: 'framboise',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2]
  },
  {
    name: 'fruit de la passion',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'groseille',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2]
  },
  {
    name: 'mandarine',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 0]
  },
  {
    name: 'mangue',
    id: uuidv4(),
    category: 'fruit',
    months: [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name: 'melon',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 1, 1, 0, 0, 0, 1, 2, 2]
  },
  {
    name: 'mûre',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
  },
  {
    name: 'myrtille',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
  },
  {
    name: 'nectarine',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
  },
  {
    name: 'brugnon',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
  },
  {
    name: 'noix de coco',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'orange',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0]
  },
  {
    name: 'pamplemousse',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'pêche',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
  },
  {
    name: 'poire',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
  },
  {
    name: 'pomme',
    id: uuidv4(),
    category: 'fruit',
    months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
  },
  {
    name: 'prune',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 1, 1, 0, 0, 1, 0, 0]
  },
  {
    name: 'raisin',
    id: uuidv4(),
    category: 'fruit',
    months: [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0]
  }

]

const games:Iingredient[] = [
  {
    name: 'chevreuil',
    id: uuidv4(),
    category: 'game',
    months: [0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'faisan',
    id: uuidv4(),
    category: 'game',
    months: [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0]
  },
  {
    name: 'perdreau',
    id: uuidv4(),
    category: 'game',
    months: [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0]
  },
  {
    name: 'perdrix',
    id: uuidv4(),
    category: 'game',
    months: [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0]
  },
  {
    name: 'sanglier',
    id: uuidv4(),
    category: 'game',
    months: [0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0]
  },
  {
    name: 'marcassin',
    id: uuidv4(),
    category: 'game',
    months: [0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0]
  }

]

const frog:Iingredient[] = [
  {
    name: 'grenouille',
    id: uuidv4(),
    category: 'frog',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
]

const vegetables:Iingredient[] = [
  {
    name: 'artichaut',
    id: uuidv4(),
    category: 'vegetable',
    months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]
  },
  {
    name: 'asperge',
    id: uuidv4(),
    category: 'vegetable',
    months: [2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2]
  },
  {
    name: 'aubergine',
    id: uuidv4(),
    category: 'vegetable',
    months: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
  },
  {
    name: 'betterave',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'carotte',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'céleri-branche',
    id: uuidv4(),
    category: 'vegetable',
    months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'céleri-rave',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
  },
  {
    name: 'cèpe',
    id: uuidv4(),
    category: 'vegetable',
    months: [2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2]
  },
  {
    name: 'bolet',
    id: uuidv4(),
    category: 'vegetable',
    months: [2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2]
  },
  {
    name: 'champignon de paris',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'chou',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
  },
  {
    name: 'brocolis',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
  },
  {
    name: 'chou fleur',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'concombre',
    id: uuidv4(),
    category: 'vegetable',
    months: [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1]
  },
  {
    name: 'courgette',
    id: uuidv4(),
    category: 'vegetable',
    months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1]
  },
  {
    name: 'endive',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
  },
  {
    name: 'épinard',
    id: uuidv4(),
    category: 'vegetable',
    months: [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1]
  },
  {
    name: 'fenouil',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'girolle',
    id: uuidv4(),
    category: 'vegetable',
    months: [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2]
  },
  {
    name: 'chanterelle',
    id: uuidv4(),
    category: 'vegetable',
    months: [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2]
  },
  {
    name: 'haricot en grains',
    id: uuidv4(),
    category: 'vegetable',
    months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
  },
  {
    name: 'haricot vert',
    id: uuidv4(),
    category: 'vegetable',
    months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
  },
  {
    name: 'mâche',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0]
  },
  {
    name: 'cresson',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0]
  },
  {
    name: 'navet',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
  },
  {
    name: 'oseille',
    id: uuidv4(),
    category: 'vegetable',
    months: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]
  },
  {
    name: 'poireau',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'pois',
    id: uuidv4(),
    category: 'vegetable',
    months: [1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2]
  },
  {
    name: 'pois gourmand',
    id: uuidv4(),
    category: 'vegetable',
    months: [1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2]
  },
  {
    name: 'poivron',
    id: uuidv4(),
    category: 'vegetable',
    months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
  },
  {
    name: 'pomme de terre',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'potiron',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0]
  },
  {
    name: 'radis',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'salade',
    id: uuidv4(),
    category: 'vegetable',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'tomate',
    id: uuidv4(),
    category: 'vegetable',
    months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
  }
]

const fishes:Iingredient[] = [
  {
    name: 'anchois',
    id: uuidv4(),
    category: 'fish',
    months: [2, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2]
  },
  {
    name: 'bar',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
  },
  {
    name: 'loup',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
  },
  {
    name: 'loubine',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
  },
  {
    name: 'brochet',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'cabillaud',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
  },
  {
    name: 'carrelet',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  },
  {
    name: 'colin',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'daurade',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'éperlan',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  },
  {
    name: 'équille',
    id: uuidv4(),
    category: 'fish',
    months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
  },
  {
    name: 'hareng',
    id: uuidv4(),
    category: 'fish',
    months: [0, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0]
  },
  {
    name: 'lieu',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'limande',
    id: uuidv4(),
    category: 'fish',
    months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
  },
  {
    name: 'lingue',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'lotte',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
  },
  {
    name: 'maquereau',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'merlan',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name: 'morue',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'raie',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'rouget',
    id: uuidv4(),
    category: 'fish',
    months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
  },
  {
    name: 'saint-pierre',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'sandre',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'sardine',
    id: uuidv4(),
    category: 'fish',
    months: [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'saumon',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'sole',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name: 'thon',
    id: uuidv4(),
    category: 'fish',
    months: [2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1]
  },
  {
    name: 'turbot',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'truite',
    id: uuidv4(),
    category: 'fish',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
]

const poultryAndRabbit:Iingredient[] = [
  {
    name: 'caille',
    id: uuidv4(),
    category: 'poultry',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'canard',
    id: uuidv4(),
    category: 'poultry',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'chapon',
    id: uuidv4(),
    category: 'poultry',
    months: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0]
  },
  {
    name: 'dinde',
    id: uuidv4(),
    category: 'poultry',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'oie',
    id: uuidv4(),
    category: 'poultry',
    months: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0]
  },
  {
    name: 'pigeon',
    id: uuidv4(),
    category: 'poultry',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'pintade',
    id: uuidv4(),
    category: 'poultry',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'poule',
    id: uuidv4(),
    category: 'poultry',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'poulet',
    id: uuidv4(),
    category: 'poultry',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'lapin',
    id: uuidv4(),
    category: 'rabbit',
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }

]

const allIngredients: Iingredient[][] = []

allIngredients.push(shellsAndMolluscs, crustaceans, fruits, games, frog, vegetables, fishes, poultryAndRabbit)

export { allIngredients, shellsAndMolluscs, crustaceans, fruits, games, frog, vegetables, fishes, poultryAndRabbit }
