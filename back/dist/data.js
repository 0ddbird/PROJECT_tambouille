"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poultryAndRabbit = exports.fishes = exports.vegetables = exports.frog = exports.games = exports.fruits = exports.crustaceans = exports.shellsAndMolluscs = exports.allIngredients = void 0;
// const months [= ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
const uuid_1 = require("uuid");
/*
{
  0: 'main_season',
  1: 'secondary_season',
  2: 'not available'
}
 */
const shellsAndMolluscs = [
    {
        name: 'bigorneau',
        id: (0, uuid_1.v4)(),
        category: 'shell',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'bulot',
        id: (0, uuid_1.v4)(),
        category: 'shell',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'calmar',
        id: (0, uuid_1.v4)(),
        category: 'mollusc',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'coque',
        id: (0, uuid_1.v4)(),
        category: 'shell',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'coquille saint-jacques',
        id: (0, uuid_1.v4)(),
        category: 'shell',
        months: [0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0]
    },
    {
        name: 'escargot',
        id: (0, uuid_1.v4)(),
        category: 'shell',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'huître',
        id: (0, uuid_1.v4)(),
        category: 'shell',
        months: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
    },
    {
        name: 'moule',
        id: (0, uuid_1.v4)(),
        category: 'shell',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'pétoncle',
        id: (0, uuid_1.v4)(),
        category: 'shell',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
];
exports.shellsAndMolluscs = shellsAndMolluscs;
const crustaceans = [
    {
        name: 'araignée de mer',
        id: (0, uuid_1.v4)(),
        category: 'crustacean',
        months: [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0]
    },
    {
        name: 'crevette',
        id: (0, uuid_1.v4)(),
        category: 'crustacean',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'homard',
        id: (0, uuid_1.v4)(),
        category: 'crustacean',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'langouste',
        id: (0, uuid_1.v4)(),
        category: 'crustacean',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'langoustine',
        id: (0, uuid_1.v4)(),
        category: 'crustacean',
        months: [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        name: 'oursin',
        id: (0, uuid_1.v4)(),
        category: 'crustacean',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'tourteau',
        id: (0, uuid_1.v4)(),
        category: 'crustacean',
        months: [2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2]
    }
];
exports.crustaceans = crustaceans;
const fruits = [
    {
        name: 'abricot',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2]
    },
    {
        name: 'ananas',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'avocat',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
    },
    {
        name: 'banane',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'cassis',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2]
    },
    {
        name: 'cerise',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2]
    },
    {
        name: 'citron',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'clémentine',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0]
    },
    {
        name: 'figue',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'fraise',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
    },
    {
        name: 'framboise',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2]
    },
    {
        name: 'fruit de la passion',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'groseille',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2]
    },
    {
        name: 'mandarine',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 0]
    },
    {
        name: 'mangue',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        name: 'melon',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 1, 1, 0, 0, 0, 1, 2, 2]
    },
    {
        name: 'mûre',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
    },
    {
        name: 'myrtille',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
    },
    {
        name: 'nectarine',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
    },
    {
        name: 'brugnon',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
    },
    {
        name: 'noix de coco',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'orange',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0]
    },
    {
        name: 'pamplemousse',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'pêche',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
    },
    {
        name: 'poire',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
    },
    {
        name: 'pomme',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
    },
    {
        name: 'prune',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 1, 1, 0, 0, 1, 0, 0]
    },
    {
        name: 'raisin',
        id: (0, uuid_1.v4)(),
        category: 'fruit',
        months: [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0]
    }
];
exports.fruits = fruits;
const games = [
    {
        name: 'chevreuil',
        id: (0, uuid_1.v4)(),
        category: 'game',
        months: [0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'faisan',
        id: (0, uuid_1.v4)(),
        category: 'game',
        months: [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0]
    },
    {
        name: 'perdreau',
        id: (0, uuid_1.v4)(),
        category: 'game',
        months: [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0]
    },
    {
        name: 'perdrix',
        id: (0, uuid_1.v4)(),
        category: 'game',
        months: [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0]
    },
    {
        name: 'sanglier',
        id: (0, uuid_1.v4)(),
        category: 'game',
        months: [0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0]
    },
    {
        name: 'marcassin',
        id: (0, uuid_1.v4)(),
        category: 'game',
        months: [0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0]
    }
];
exports.games = games;
const frog = [
    {
        name: 'grenouille',
        id: (0, uuid_1.v4)(),
        category: 'frog',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
];
exports.frog = frog;
const vegetables = [
    {
        name: 'artichaut',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        name: 'asperge',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2]
    },
    {
        name: 'aubergine',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        name: 'betterave',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'carotte',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'céleri-branche',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'céleri-rave',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
    },
    {
        name: 'cèpe',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2]
    },
    {
        name: 'bolet',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2]
    },
    {
        name: 'champignon de paris',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'chou',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
    },
    {
        name: 'brocolis',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
    },
    {
        name: 'chou fleur',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'concombre',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        name: 'courgette',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        name: 'endive',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
    },
    {
        name: 'épinard',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1]
    },
    {
        name: 'fenouil',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'girolle',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2]
    },
    {
        name: 'chanterelle',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2]
    },
    {
        name: 'haricot en grains',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2]
    },
    {
        name: 'haricot vert',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        name: 'mâche',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0]
    },
    {
        name: 'cresson',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0]
    },
    {
        name: 'navet',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
    },
    {
        name: 'oseille',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    },
    {
        name: 'poireau',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'pois',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2]
    },
    {
        name: 'pois gourmand',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2]
    },
    {
        name: 'poivron',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        name: 'pomme de terre',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'potiron',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0]
    },
    {
        name: 'radis',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'salade',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'tomate',
        id: (0, uuid_1.v4)(),
        category: 'vegetable',
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    }
];
exports.vegetables = vegetables;
const fishes = [
    {
        name: 'anchois',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [2, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2]
    },
    {
        name: 'bar',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    },
    {
        name: 'loup',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    },
    {
        name: 'loubine',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    },
    {
        name: 'brochet',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'cabillaud',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
    },
    {
        name: 'carrelet',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    },
    {
        name: 'colin',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'daurade',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'éperlan',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    },
    {
        name: 'équille',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        name: 'hareng',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0]
    },
    {
        name: 'lieu',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'limande',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        name: 'lingue',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'lotte',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
    },
    {
        name: 'maquereau',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'merlan',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        name: 'morue',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'raie',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'rouget',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    },
    {
        name: 'saint-pierre',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'sandre',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'sardine',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'saumon',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'sole',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        name: 'thon',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1]
    },
    {
        name: 'turbot',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'truite',
        id: (0, uuid_1.v4)(),
        category: 'fish',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
];
exports.fishes = fishes;
const poultryAndRabbit = [
    {
        name: 'caille',
        id: (0, uuid_1.v4)(),
        category: 'poultry',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'canard',
        id: (0, uuid_1.v4)(),
        category: 'poultry',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'chapon',
        id: (0, uuid_1.v4)(),
        category: 'poultry',
        months: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0]
    },
    {
        name: 'dinde',
        id: (0, uuid_1.v4)(),
        category: 'poultry',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'oie',
        id: (0, uuid_1.v4)(),
        category: 'poultry',
        months: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0]
    },
    {
        name: 'pigeon',
        id: (0, uuid_1.v4)(),
        category: 'poultry',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'pintade',
        id: (0, uuid_1.v4)(),
        category: 'poultry',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'poule',
        id: (0, uuid_1.v4)(),
        category: 'poultry',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'poulet',
        id: (0, uuid_1.v4)(),
        category: 'poultry',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: 'lapin',
        id: (0, uuid_1.v4)(),
        category: 'rabbit',
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
];
exports.poultryAndRabbit = poultryAndRabbit;
const allIngredients = [];
exports.allIngredients = allIngredients;
allIngredients.push(shellsAndMolluscs, crustaceans, fruits, games, frog, vegetables, fishes, poultryAndRabbit);
