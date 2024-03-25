<script>
import { useI18n } from 'vue-i18n'
import HomeButton from './HomeButton.vue';

export default {
  components: {
    HomeButton
  },
  setup() {
    const { locale } = useI18n()

    const toggleLanguage = () => {
      locale.value = locale.value === 'pl' ? 'en' : 
                     (locale.value === 'en' ? 'ru' : 
                     (locale.value === 'ru' ? 'ua' : 'pl'));
    };

    return {
      
      locale,
      toggleLanguage
    }
  }
}
</script>
<template>
<header class="z-30 sticky top-0 left-0 w-full border-b-4 border-sky-900 bg-white flex justify-between items-center py-3 px-5">
    <RouterLink to="/">
        <button>
          <h1 class="uppercase font-bold text-sky-900 text-2xl cursor-pointer transition-transform hover:scale-110">Sea & food</h1>
    </button>
    </RouterLink>
    <nav class="hidden ml-auto md:flex items-center">
          
          <ul class="text-gray-500 font-semibold inline-flex items-center">
            
          <a class="flex  md:text-left " href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
            <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bxl-instagram text-2xl   text-sky-900'></i>
          </a>
          <a class="flex   md:text-left " href="https://www.facebook.com/profile.php?id=100002546807195" target="_blank" rel="noopener noreferrer">
            <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bxl-facebook-circle text-2xl   text-sky-900'></i>
          </a>
          <button class=" text-sky-900 text-xs" @click="toggleLanguage">
            <i class=' m-2 bx bx-globe transition-transform hover:scale-150 text-2xl  text-sky-900  '></i>{{ locale }}
          </button>
           </ul>
           
        </nav>
<HomeButton/>

</header>
</template>