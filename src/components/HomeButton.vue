<script>
import { useStore } from '@/stores/useStore';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const store = useStore();
    const { locale } = useI18n();

    const toggleLanguage = () => {
      locale.value = locale.value === 'pl' ? 'en' : 
                     (locale.value === 'en' ? 'ru' : 
                     (locale.value === 'ru' ? 'pl' : 'pl'));
    };

    return {
      store,
      locale,
      toggleLanguage
    };
  },
}
</script>

<template>
  
  <button class="fixed right-0 top-0 inline-block md:hidden" @click="store.toggleDropdown">
  <i class='text-5xl text-sky-900 pt-2 pr-4 z-0 bx bx-menu'></i>
</button>
  <div v-show="store.isDropdownVisible">
    <div class=" md:hidden fixed z-20 mt-2  w-16 h-44 mr-4 shadow-xl right-0 top-0 bg-yellow-200 rounded-full border-2 border-sky-900 p-4 cursor-pointer transition transform translate-x-0 hover:translate-x-0 hover:shadow-xl">
  <a class="flex text-left" href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
    <i class='cursor-pointer m-auto  transition-transform hover:scale-150 bx bxl-instagram text-2xl text-sky-900'></i>
  </a>
  <a class="flex text-left" href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
    <i class='cursor-pointer pt-2 m-auto transition-transform hover:scale-150 bx bxl-facebook-circle text-2xl text-sky-900'></i>
  </a>
  <button class="text-sky-900 text-xs" @click="toggleLanguage">
    <i class='m-auto pt-2 bx bx-globe transition-transform hover:scale-150 text-2xl text-sky-900'></i>{{ locale }}
  </button>
  <button class="rounded-full transition hover:-translate-y-2 hover:shadow-xl" @click="store.toggleDropdown">
    <i class='m-auto pl-1 pt-4 text-2xl text-sky-900 bx bx-chevron-left-circle'></i>
  </button>
  <div class="flex justify-between">
    <div class="flex flex-col justify-end h-full">
    </div>
    </div>
    </div>
    
  </div>
</template>

