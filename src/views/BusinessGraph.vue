<script setup>
import { defineExpose } from 'vue';
import StaffingTable from '@/components/StaffingTable.vue'
import html2canvas from 'html2canvas';

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
    <div class="flex justify-end mr-4">
      <button @click="saveAsPNG"><i class= 'text-4xl text-blue-800 bx bxs-cloud-download'></i></button>
    </div>
    
    <StaffingTable id="my-chart" />
    
    
  </div>
</template>
