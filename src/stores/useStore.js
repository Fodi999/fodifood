 // stores/useStore.js
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'mainStore',
  state: () => ({
    isDropdownVisible: false,
    cartItems: [],
    isAuthenticated: false,
  }),
  actions: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
   
   
  }
})