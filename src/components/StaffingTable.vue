<template>
  <div
    id="screenshot-target"
    class="p-2 sm:p-6 max-w-full sm:max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-2 sm:space-y-4"
  >
    <div class="w-full">
      <div class="text-xl font-medium text-black">
        <input type="text" placeholder="Введите Имя" class="w-full h-8" />
      </div>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-2 sm:px-4 py-2">Дата</th>
            <th class="px-2 sm:px-4 py-2">Время</th>
            <th class="px-2 sm:px-4 py-2">Выход</th>
          </tr>
        </thead>
        <tbody>
          <tr>
  <td class="border px-2 sm:px-4 py-2 font">
    <p class=" font-bold">Понедельник</p><input type="date" v-model="selectedDate" class="w-full h-8 mt-1" />
  </td>

  <td class="border px-2 sm:px-4 py-2">
    <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
    <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
  </td>
  <td class="border px-2 sm:px-4 py-2">
    <input v-model="isWorkingDay1" type="checkbox" />
    <span :class="{ 'text-red-500 font-bold': isWorkingDay1, 'text-green-500 font-bold': !isWorkingDay1 }">
      {{ isWorkingDay1 ? 'Рабочий' : 'Выходной' }}
    </span>
  </td>
</tr>

          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold"> Вторник</p><input type="date" v-model="selectedDate" class="w-full h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay2" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay2, 'text-green-500 font-bold': !isWorkingDay2 }">
    {{ isWorkingDay2 ? 'Рабочий' : 'Выходной' }}
  </span>
</td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold ">Среда</p><input type="date" v-model="selectedDate" class="w-full h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay3" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay3, 'text-green-500 font-bold': !isWorkingDay3 }">
    {{ isWorkingDay3 ? 'Рабочий' : 'Выходной' }}
  </span>
</td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold">Четверг</p><input type="date" v-model="selectedDate" class="w-full h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay4" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay4, 'text-green-500 font-bold': !isWorkingDay4 }">
    {{ isWorkingDay4 ? 'Рабочий' : 'Выходной' }}
  </span>
</td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold">Пятница</p><input type="date" v-model="selectedDate" class="w-full h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay5" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay5, 'text-green-500 font-bold': !isWorkingDay5 }">
    {{ isWorkingDay5 ? 'Рабочий' : 'Выходной' }}
  </span>
</td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold text-red-600">Субота</p><input type="date" v-model="selectedDate" class="w-full h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay6" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay6, 'text-green-500 font-bold': !isWorkingDay6 }">
    {{ isWorkingDay6 ? 'Рабочий' : 'Выходной' }}
  </span>
</td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold text-red-600">Воскресения</p><input type="date" v-model="selectedDate" class="w-full h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay7" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay7, 'text-green-500 font-bold': !isWorkingDay7 }">
    {{ isWorkingDay7 ? 'Рабочий' : 'Выходной' }}
  </span>
</td>
          </tr>
         

          <!-- Добавьте остальные ингредиенты здесь -->
        </tbody>
      </table>
    
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
   isWorkingDay1: true,
   isWorkingDay2: true,
   isWorkingDay3: true,
   isWorkingDay4: true,
   isWorkingDay5: true,
   isWorkingDay6: true,
   isWorkingDay7: true,
      '1': 'Some value', // Добавьте эту строку для ключа "1"
      netto1: 0,
      netto2: 0,
      isWorkingDay: true
    }
  },
  computed: {
    dayOfWeek() {
      if (this.selectedDate) {
        const date = new Date(this.selectedDate)
        const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
        return days[date.getDay()]
      }
      return ''
    }
  },
  methods: {
    downloadPng() {
      const element = document.getElementById('screenshot-target')
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