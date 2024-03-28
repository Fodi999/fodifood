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
    <div class="font-bold mb-2 sm:ml-10 lg:ml-20 text-center border rounded-xl border-blue-600 p-2 shadow-md">
  <span class="text-sky-800">Графики работы для вас,</span>
  <span class="text-sky-600">где вы можете скачать и отправить на почту лично сотруднику, очень удобно пользуйтесь.</span>
</div>
    <div class=" flex justify-end mr-6 mb-2 ">
  
      
    </div>
    <div class="p-2">
      <StaffingTable />
    </div>
    <div class="p-2">
      <TechCards />
    </div>
    
    
    
  </div>
</template>
