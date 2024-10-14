import { defineStore } from 'pinia';
import {ref} from "vue";

export const useDefaultStore = defineStore('default', () => {
    const ingredients = ref({
        bread: ['Baguette', 'Bagel', 'Hamburger'],
        sauce: ['Curry', 'Creamy onion', '2 Hot 4 U'],
        cheese: ['Beaufort', 'Reblochon', 'Raclette'],
        garniture: ['Chicken', 'Beef', 'Salad']
    })

    function addIngredients (category: 'bread' | 'sauce' | 'cheese' | 'garniture', name: string) {
        ingredients.value[category] = [
           ...ingredients.value[category],
           name
        ];
        localStorage.setItem("ingredients", JSON.stringify(ingredients.value))
    }

    function removeIngredient (category: 'bread' | 'sauce' | 'cheese' | 'garniture', name: string) {
        const index = ingredients.value[category].indexOf(name)
        ingredients.value[category].splice(index, 1)
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
        localStorage.setItem("sandwiches", JSON.stringify(sandwiches.value))
    }

    function removeSandwich (index) {
        sandwiches.value.splice(index, 1)
    }

    return {
        ingredients,
        addIngredients,
        removeIngredient,
        sandwiches,
        addSandwich,
        removeSandwich,
    }
})
