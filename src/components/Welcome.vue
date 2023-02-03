<script setup lang="ts">
import Timer from "./Timer.vue";
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
<div class="flex items-center justify-center h-[100vh] w-[100vw]">

  <div class="px-6 py-6 md:px-12 text-gray-800 text-center lg:text-left">
    <div class="container mx-auto xl:px-32">
      <div class="flex justify-center flex-col gap-y-3 items-center">
        <div class="mt-6 lg:mt-0">
          <h1 class="sm:text-2xl flex justify-center items-center flex-col md:text-6xl xl:text-7xl font-bold tracking-tight md:mb-4 sm:mb-8">
            <span class="block">Bienvenue</span>
            <span class="block">sur</span>
            <span class="text-blue-600 block">Barteban</span>
          </h1>
          <p class="text-xs text-center my-2">La plateforme de financement participatif</p>
           
        </div>
        <div class="sm:mb-4 flex items-center justify-center flex-col md:mb-8 lg:mb-10">
          <h1 class="text-lg md:text-xl sm:mb-4 md:mb-8 lg:mb-10 xl:text-xl font-light tracking-tight">La présentation démarre dans </h1>
          <Timer />
        </div>
      </div>
    </div>
  </div>

</div>

</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>
