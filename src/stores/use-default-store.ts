import { defineStore } from 'pinia';
import {ref} from "vue";

export const useDefaultStore = defineStore('default', () => {
    const ingredients = ref({
        bread: ['Baguette', 'Bagel', 'Hamburger'],
        sauce: ['Curry', 'Creamy onion', '2 Hot 4 U'],
        cheese: ['Beaufort', 'Reblochon', 'Raclette'],
        garniture: ['Chicken', 'Beef', 'Salad']
    })

    function addIngredients (type: 'bread' | 'sauce' | 'cheese' | 'garniture', name: string) {
        ingredients.value[type] = [
           ...ingredients.value[type],
           name
        ];
    }

    const sandwiches = ref([
        ['Baguette', 'Curry', 'Beaufort', 'Beef'],
        ['Bagel', 'Curry', 'Raclette', 'Chicken'],
    ])

    function addSandwich(sandwich: Array<string>) {
        sandwiches.value = [
            ...sandwiches.value,
            sandwich
        ]
    }

    return {
        ingredients,
        addIngredients,
        sandwiches,
        addSandwich,
    }
})
