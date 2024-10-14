<script setup lang="ts">
import {useDefaultStore} from "@/stores/use-default-store";
import {computed, reactive} from "vue";

const defaultStore = useDefaultStore()

const categories = ['bread', 'sauce', 'cheese', 'garniture']

const formData = reactive({
  type: '',
  name: ''
})

function saveIngredient() {
  defaultStore.addIngredients(formData.type, formData.name)
  formData.type = ''
  formData.name = ''
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn to="/" variant="text">back</v-btn>
        <h1>Ingredients</h1>
      </v-col>
      <v-col
          cols="12"
      >
        <v-row align="center">
          <v-col>
            <v-text-field
                v-model="formData.name"
                label="New ingredient name"
                hide-details
            />
          </v-col>
          <v-col>
            <v-select
                v-model="formData.type"
                label="New ingredient type"
                :items="categories"
                hide-details
            />
          </v-col>
          <v-col>
            <v-btn
                color="primary"
                @click="saveIngredient"
            >
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col
          v-for="category in categories"
          :key="category"
          cols="12"
      >
        <v-list>
          <h2>{{ category }}</h2>
          <v-list-item
            v-for="ingredient in defaultStore.ingredients[category]"
            :key="ingredient"
          >
            {{ ingredient }}
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>