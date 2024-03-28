<template>
  <div class="w-full p-2 sm:p-4 md:p-6 lg:p-8">
    <div v-for="worker in workers" :key="worker.name" class="mb-4">

      <input type="text" v-model.lazy="worker.name" class=" w-48 rounded-xl p-2 mb-4 bg-white shadow-md border border-gray-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Введите имя">
      <div @click="toggleWorkerDetails(worker.name)" class="rounded-xl cursor-pointer bg-blue-500 text-white p-2 shadow-md">
        График работы
      </div>
      <div v-if="worker.showDetails" class="mt-2">
        <div v-for="day in worker.days" :key="day.date" class="p-2 border-b flex justify-between">
          <div>
            <div class="text-blue-600 font-bold">{{ formatDay(day.date).weekday }}</div>
            <div>{{ formatDay(day.date).date }}</div>
          </div>
          <div>
            <div v-if="day.status === 'working'">
              <input class=" w-20" type="time" v-model="day.startTime">
              <input class=" w-20" type="time" v-model="day.endTime">
            </div>
            <div>
              <div>
                <select v-model="day.status" :class="{ 'text-red-600 font-semibold': day.status === 'working', 'text-green-600 font-semibold': day.status === 'off' }" class=" h-10">
            <option value="working">Работает</option>
            <option value="off">Выходной</option>
          </select>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workers: [
        {
          name: '',
          showDetails: false,
          days: Array.from({ length: 7 }, (_, i) => ({
            date: this.addDays(new Date(), i + (1 - new Date().getDay())),
            startTime: '09:00',
            endTime: '18:00',
            status: i < 5 ? 'working' : 'off',
          })),
        },
        // Добавьте других работников здесь
      ],
    };
  },
  methods: {
    toggleWorkerDetails(workerName) {
      const worker = this.workers.find(w => w.name === workerName);
      if (worker) {
        worker.showDetails = !worker.showDetails;
      }
    },
    formatDay(date) {
      const weekday = date.toLocaleDateString('ru-RU', { weekday: 'long' });
      const dayAndMonth = date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'numeric' });
      return { weekday, date: dayAndMonth };
    },
    addDays(date, days) {
      const copy = new Date(Number(date));
      copy.setDate(date.getDate() + days);
      return copy;
    },
  },
};
</script>