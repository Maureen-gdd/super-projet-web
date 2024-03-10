<template>
    <div class="absolute h-[22%] w-full bottom-0 left-0 -z-1">
      <img src="~@/assets/images/wave.svg" alt="wave1" class="wave absolute bottom-0" />
      <img class="wave absolute bottom-0 -left-[99%]" src="~@/assets/images/wave.svg" alt="wave2" />
    </div>
    <img class="island absolute w-[13%] h-auto right-10 bottom-20" src="~@/assets/images/island.svg" alt="island" />
    <TamagotchiGallery />
</template>

<script>
import TamagotchiGallery from '@/components/TamagotchiGallery.vue'

export default {
name: 'Main',
components: { TamagotchiGallery }
};
</script>

<style scoped>
  .wave {
    animation: moveWave 60s linear infinite;
  }

  .island {
    animation: moveIsland 10s linear infinite;
  }
  
  @keyframes moveWave {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes moveIsland {
    0% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(7%);
    }
    70% {
      transform: translateY(-1%);
    }
    100% {
      transform: translateY(-5);
    }
  }
</style>