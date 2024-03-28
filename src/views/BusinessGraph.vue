<script setup>
import { defineExpose } from 'vue';
import StaffingTable from '@/components/StaffingTable.vue'
import html2canvas from 'html2canvas';

import TechCards from '@/components/TechCards.vue';

const saveAsPNG = () => {
  const element = document.getElementById('my-chart'); // замените 'my-chart' на id вашего графика
  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'chart.png';
    link.click();
  });
}

defineExpose({ saveAsPNG });
</script>

<template>
  <div class="p-8">
    <div class="text-blue-600 font-bold mb-2 sm:ml-10 lg:ml-20 text-right sm:text-left">
  График работы для сотрудника, где вы можете скачать и отправить по почте лично сотруднику.
</div>
    <div class=" flex justify-end mr-6 mb-2 ">
  
      <button @click="saveAsPNG"><i class= 'text-4xl text-blue-800 bx bxs-cloud-download'></i></button>
    </div>
    
    <StaffingTable id="my-chart" />
    <TechCards />
    
    
  </div>
</template>
