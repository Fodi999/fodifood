<template>
  <div
    id="screenshot-target-2"
    class="p-2 sm:p-6 max-w-full sm:max-w-md mx-auto bg-white rounded-xl shadow-md shadow-slate-600 flex flex-col items-center space-y-2 sm:space-y-4"
  >
    <div class="w-full">
      <div class="text-sm font-medium text-black">
        <input type="text" placeholder="Введите название" class="w-full h-8" />
      </div>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-2 sm:px-4 py-2">Ингредиент</th>
            <th class="px-2 sm:px-4 py-2">Брутто %</th>
            <th class="px-2 sm:px-4 py-2">Нетто</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder=" ингредиент" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder="брутто" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input v-model.number="netto1" type="text" placeholder="нетто" class="w-full h-8 text-sm" />
            </td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder=" ингредиент" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder="брутто" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input v-model.number="netto2" type="text" placeholder="нетто" class="w-full h-8 text-sm" />
            </td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder=" ингредиент" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder="брутто" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input v-model.number="netto3" type="text" placeholder="нетто" class="w-full h-8 text-sm" />
            </td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder=" ингредиент" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder="брутто" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input v-model.number="netto4" type="text" placeholder="нетто" class="w-full h-8 text-sm" />
            </td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder=" ингредиент" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder="брутто" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input v-model.number="netto5" type="text" placeholder="нетто" class="w-full h-8 text-sm" />
            </td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder=" ингредиент" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder="брутто" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input v-model.number="netto6" type="text" placeholder="нетто" class="w-full h-8 text-sm" />
            </td>
           
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder=" ингредиент" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder="брутто" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input v-model.number="netto7" type="text" placeholder="нетто" class="w-full h-8 text-sm" />
            </td>
           
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder=" ингредиент" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input type="text" placeholder="брутто" class="w-full h-8 text-sm" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
              <input v-model.number="netto8" type="text" placeholder="нетто" class="w-full h-8 text-sm" />
            </td>
           
          </tr>

          <!-- Добавьте остальные ингредиенты здесь -->
        </tbody>
      </table>
      <p class="mt-2 text-gray-800 font-bold">Описания приготовления :</p>
      <div class="flex items-center mt-2">
        <div class="mr-2">1)</div>
        <input
          type="text"
          class="w-full sm:w-96 text-gray-500 min-h-8"
          maxlength="200"
          placeholder="Введите описание приготовления"
        />
      </div>
      <div class="flex items-center mt-2">
        <div class="mr-2">2)</div>
        <input
          type="text"
          class="w-full sm:w-96 text-gray-500 min-h-8"
          maxlength="200"
          placeholder="Введите описание приготовления"
        />
      </div>

      <div class="flex items-center mt-2">
        <div class="mr-2">3)</div>
        <input
          type="text"
          class="w-full sm:w-96 text-gray-500 min-h-8"
          maxlength="200"
          placeholder="Введите описание приготовления"
        />
      </div>
      <div class="flex items-center mt-2">
        <div class="mr-2">4)</div>
        <input
          type="text"
          class="w-full sm:w-96 text-gray-500 min-h-8"
          maxlength="200"
          placeholder="Введите описание приготовления"
        />
      </div>
      <div class="flex items-center mt-2">
        <div class="mr-2">5)</div>
        <input
          type="text"
          class="w-full sm:w-96 text-gray-500 min-h-8"
          maxlength="200"
          placeholder="Введите описание приготовления"
        />
      </div>
      <div class="mt-2">
        Выход продукта:
        <div class="mt-2">{{ totalProductOutput }} г</div>
      </div>
      <button class="mt-4 text-white font-bold py-2 px-4 rounded" @click="downloadPng">
        <i class="text-4xl text-blue-800 bx bxs-cloud-download"></i>
      </button>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  name: 'TechCard',
  data() {
    return {
      netto1: 0,
      netto2: 0,
      netto3: 0,
      netto4: 0,
      netto5: 0,
      netto6: 0,
      netto7: 0,
      netto8: 0
    }
  },
  computed: {
  totalProductOutput() {
    return (Math.round((this.netto1 + this.netto2 + this.netto3 + this.netto4 + this.netto5 + this.netto6 + this.netto7 + this.netto8) * 1000) / 1000).toFixed(3)
  }
},
  methods: {
    downloadPng() {
      const element = document.getElementById('screenshot-target-2')
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.href = imgData
        link.download = 'screenshot.png'
        link.click()
      })
    }
  }
}
</script>
