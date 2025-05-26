import { defineStore } from 'pinia'

export const useAnimationStore = defineStore('activeAnimation', {
  state: () => {
    return {
        animationPlayed: false,
        delayedAnimation: false,
    }
  }
})