<script setup lang="ts">
import {useDefaultStore} from "@/stores/use-default-store";
import {computed, reactive, ref} from "vue";

const defaultStore = useDefaultStore()

const sandwich = ref([])

function generateSandwich() {
  sandwich.value = []
  for (const category in defaultStore.ingredients) {
    console.log(category, defaultStore.ingredients[category])
    const numberOfIngredients = defaultStore.ingredients[category].length
    const ingredientIndex = Math.floor(Math.random() * numberOfIngredients)
    sandwich.value.push(defaultStore.ingredients[category][ingredientIndex])
  }
}

function saveSandwich() {
  defaultStore.addSandwich([...sandwich.value])
  sandwich.value = []
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn to="/" variant="text">back</v-btn>
        <h1>Sandwich generator</h1>
      </v-col>
      <v-col
          cols="12"
      >
        <v-row align="center">
          <v-col>
            <v-btn
                color="primary"
                @click="generateSandwich"
            >
              Generate Sandwich
            </v-btn>
          </v-col>
        </v-row>
        <v-row
            v-if="sandwich.length > 0"
            align="center"
        >
          <v-col>
            <span
              v-for="ingredient in sandwich"
              :key="ingredient"
            >
              {{ ingredient }},
            </span>
          </v-col>
          <v-col cols="12">
            <v-btn
                color="primary"
                @click="saveSandwich"
            >
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>