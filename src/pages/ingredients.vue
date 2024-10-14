<script setup lang="ts">
import {useDefaultStore} from "@/stores/use-default-store";
import {computed, reactive} from "vue";

const defaultStore = useDefaultStore()

const categories = ['bread', 'sauce', 'cheese', 'garniture']

const formData = reactive({
  category: '',
  name: ''
})

function saveIngredient() {
  defaultStore.addIngredients(formData.category, formData.name)
  formData.category = ''
  formData.name = ''
}

function removeIngredient(category: string, ingredient: string) {
  defaultStore.removeIngredient(category, ingredient)
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
        <v-card>
          <v-card-title class="font-weight-bold text-uppercase">
            Add ingredient
          </v-card-title>
          <v-card-text>
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
                    v-model="formData.category"
                    label="New ingredient category"
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
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
          v-for="category in categories"
          :key="category"
          cols="12"
      >
        <v-card>
          <v-card-title class="font-weight-bold text-uppercase">
            {{ category }}
          </v-card-title>
          <v-list>
            <v-list-item
                v-for="ingredient in defaultStore.ingredients[category]"
                :key="ingredient"
            >
              {{ ingredient }}

              <template #append>
                <v-btn
                  color="red"
                  @click="removeIngredient(category, ingredient)"
                >
                  Remove
                </v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
