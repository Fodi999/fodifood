<template>
  <div
    id="screenshot-target-1"
    class="p-2 sm:p-6 max-w-full sm:max-w-md mx-auto bg-white rounded-xl shadow-md  shadow-slate-600  flex flex-col items-center space-y-2 sm:space-y-4"
  >
    <div class="w-full">
      <div class="text-xl font-medium text-black">
        <input type="text" :placeholder="$t('GraphTextCard2')" class="w-full h-8 text-sm" />
      </div>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-2 sm:px-4 py-2">{{ $t ('GraphTextCard3') }}</th>
            <th class="px-2 sm:px-4 py-2">{{ $t ('GraphTextCard4') }}</th>
            <th class="px-2 sm:px-4 py-2">{{ $t ('GraphTextCard5') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
  <td class="border px-2 sm:px-4 py-2 font">
    <p class=" font-bold">{{ $t ('GraphTextCard6') }}</p><input type="date" v-model="selectedDate1" class="w-32 h-8 mt-1" />
  </td>

  <td class="border px-2 sm:px-4 py-2">
    <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
    <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
  </td>
  <td class="border px-2 sm:px-4 py-2">
    <input v-model="isWorkingDay1" type="checkbox" />
    <span :class="{ 'text-red-500 font-bold': isWorkingDay1, 'text-green-500 font-bold': !isWorkingDay1 }">
      {{ isWorkingDay1 ? $t('GraphTextCard7') : $t('GraphTextCard8') }}
    </span>
  </td>
</tr>

          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold">{{ $t ('GraphTextCard9') }}</p><input type="date" v-model="selectedDate2" class="w-32 h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay2" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay2, 'text-green-500 font-bold': !isWorkingDay2 }">
    {{ isWorkingDay2 ? $t('GraphTextCard7') :  $t('GraphTextCard8') }}
  </span>
</td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold ">{{ $t ('GraphTextCard10') }} </p><input type="date" v-model="selectedDate3" class="w-32 h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay3" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay3, 'text-green-500 font-bold': !isWorkingDay3 }">
    {{ isWorkingDay3 ?  $t('GraphTextCard7') :  $t('GraphTextCard8')}}
  </span>
</td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold">{{ $t ('GraphTextCard11') }}</p><input type="date" v-model="selectedDate4" class="w-32 h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay4" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay4, 'text-green-500 font-bold': !isWorkingDay4 }">
    {{ isWorkingDay4 ?  $t('GraphTextCard7') : $t('GraphTextCard8') }}
  </span>
</td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold">{{ $t ('GraphTextCard12') }}</p><input type="date" v-model="selectedDate5" class="w-32 h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay5" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay5, 'text-green-500 font-bold': !isWorkingDay5 }">
    {{ isWorkingDay5 ?  $t('GraphTextCard7') : $t('GraphTextCard8') }}
  </span>
</td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold text-red-600">{{ $t ('GraphTextCard13') }}</p><input type="date" v-model="selectedDate6" class="w-32 h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay6" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay6, 'text-green-500 font-bold': !isWorkingDay6 }">
    {{ isWorkingDay6 ?  $t('GraphTextCard7') : $t('GraphTextCard8')  }}
  </span>
</td>
          </tr>
          <tr>
            <td class="border px-2 sm:px-4 py-2 font">
             <p class=" font-bold text-red-600">{{ $t ('GraphTextCard14') }}</p><input type="date" v-model="selectedDate7" class="w-32 h-8 mt-1" />
            </td>

            <td class="border px-2 sm:px-4 py-2">
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
              <input type="time" min="09:00" max="18:00" class="w-full h-8 mb-2" />
            </td>
            <td class="border px-2 sm:px-4 py-2">
  <input v-model="isWorkingDay7" type="checkbox" />
  <span :class="{ 'text-red-500 font-bold': isWorkingDay7, 'text-green-500 font-bold': !isWorkingDay7 }">
    {{ isWorkingDay7 ?  $t('GraphTextCard7') : $t('GraphTextCard8') }}
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
   selectedDate1: '',
    selectedDate2: '',
    selectedDate3: '',
    selectedDate4: '',
    selectedDate5: '',
    selectedDate6: '',
    selectedDate7: '',
     
   
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
      const element = document.getElementById('screenshot-target-1')
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