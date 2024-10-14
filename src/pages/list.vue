<script setup lang="ts">
import {useDefaultStore} from "@/stores/use-default-store";
import {computed, onMounted, reactive, ref, watch} from "vue";

const defaultStore = useDefaultStore()
const defaultSandwiches = computed(() => defaultStore.sandwiches)

const sandwiches = ref(defaultSandwiches.value)

const selectedBread = ref<string>('')
const selectedSauce = ref<string>('')
const selectedCheese = ref<string>('')
const selectedGarniture = ref<string>('')

function filterSandwich() {
  sandwiches.value = defaultSandwiches.value.filter((sandwich) => (
      (selectedBread.value === '' || selectedBread.value === sandwich[0]) &&
      (selectedSauce.value === '' || selectedSauce.value === sandwich[1]) &&
      (selectedCheese.value === '' || selectedCheese.value === sandwich[2]) &&
      (selectedGarniture.value === '' || selectedGarniture.value === sandwich[3])
  ))
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn to="/" variant="text">back</v-btn>
        <h1>Sandwich list</h1>
      </v-col>
      <v-col
          cols="12"
      >
        <v-row align="center">
          <v-col>
            <v-select
                v-model="selectedBread"
                label="bread"
                :items="defaultStore.ingredients.bread"
                hide-details
            />
          </v-col>
          <v-col>
            <v-select
                v-model="selectedSauce"
                label="sauce"
                :items="defaultStore.ingredients.sauce"
                hide-details
            />
          </v-col>
          <v-col>
            <v-select
                v-model="selectedCheese"
                label="cheese"
                :items="defaultStore.ingredients.cheese"
                hide-details
            />
          </v-col>
          <v-col>
            <v-select
                v-model="selectedGarniture"
                label="garniture"
                :items="defaultStore.ingredients.garniture"
                hide-details
            />
          </v-col>
          <v-col>
            <v-btn
                color="primary"
                @click="filterSandwich"
            >
              Apply filters
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col
          cols="12"
      >
        <v-list>
          <v-list-item
              v-for="(sandwich, i) in sandwiches"
              :key="i"
          >
            <span
                v-for="ingredient in sandwich"
                :key="ingredient"
            >
              {{ ingredient }},
            </span>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
