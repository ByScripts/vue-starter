<script setup lang="ts">

import {useDefaultStore} from "@/stores/use-default-store.js";
import {onMounted} from "vue";

const defaultStore = useDefaultStore()
const ingredients = JSON.parse(localStorage.getItem("ingredients"));
const sandwiches = JSON.parse(localStorage.getItem("sandwiches"));

// onMounted(() => {
//   if (Object.keys(ingredients).length > 0) defaultStore.ingredients = ingredients
//   if (sandwiches.length > 0) defaultStore.sandwiches = sandwiches
// })

</script>

<template>
  <RouterView />
</template>
