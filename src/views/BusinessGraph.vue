<script setup>
import StaffingTable from '@/components/StaffingTable.vue'
import TechCards from '@/components/TechCards.vue';




</script>

<template>
  <div class="p-8">
    <div class="font-bold mb-2 sm:ml-10 lg:ml-20 text-center border rounded-xl border-blue-600 p-2 shadow-md">
      <span class="text-sky-800">{{ $t ('GraphTextCard') }}</span>
      <span class="text-sky-600">{{ $t ('GraphTextCard1') }}</span>
    </div>
    <div class="flex justify-end mr-6 mb-2 ">
      <!-- Ваш код здесь -->
    </div>
    <div class="flex flex-col sm:flex-row justify-center items-center p-2">
      <div class="pr-2">
        <StaffingTable />
      </div>
      <div class="pl-2 pt-2 sm:pt-0 p-2">
        <TechCards />
      </div>
    </div>
  </div>
</template>