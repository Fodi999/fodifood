<template>
  <div class="w-full p-2 sm:p-4 md:p-6 lg:p-8">
    <div v-for="worker in workers" :key="worker.name" class="mb-4">
      
      <div @click="toggleWorkerDetails(worker.name)" class="  rounded-xl cursor-pointer bg-blue-500 text-white p-2">
        {{ worker.name }}
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
          name: 'Иван',
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