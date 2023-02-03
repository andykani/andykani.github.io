<script setup lang="ts">
import Timer from "./Timer.vue";
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
 <!--  <h1 class="mx-auto sm:text-[24px]">
    <span class="block mb-6 text-md font-bold">Bienvenue</span>
  </h1>
  
  <p class="my-6 text-center text-md">La présentation de <span class="text-[#3a64e5] uppercase my-3 block font-semibold text-lg">Barteban</span> démarre dans</p> -->
  <!-- Container for demo purpose -->
<div>

<!-- Section: Design Block -->
<section class="">

  <div class="px-6 py-6 md:px-12 text-gray-800 text-center lg:text-left">
    <div class="container mx-auto xl:px-32">
      <div class="grid lg:grid-cols-2 flex items-center">
        <div class="mt-6 lg:mt-0">
          <h1 class="sm:text-2xl md:text-6xl xl:text-7xl font-bold tracking-tight md:mb-4 sm:mb-8">Bienvenue <br /> sur <br /><span class="text-blue-600">Barteban</span></h1>
          <p class="text-xs my-2">La plateforme de financement participatif</p>
          <!-- <a class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">portfolio</a>
          <a class="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Plus d'infos</a> -->
        </div>
        <div class="sm:mb-4 md:mb-8 lg:mb-10">
          <h1 class="text-lg md:text-xl sm:mb-4 md:mb-8 lg:mb-10 xl:text-xl font-light tracking-tight">La présentation démarre dans </h1>
          <Timer />
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Section: Design Block -->

</div>
<!-- Container for demo purpose -->

</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>
