<template>
  <div class="">
    <div class="myParentComponent">
      <!--<button class="bg-blue-500" @click="retrieveRandomVillager">Random Villager</button>
      <button @click="retrieveAVillager('Lulu')">Villager Lulu</button>-->
      <TamagotchiCard 
        :name="myVillager[0].name"
        :species="myVillager[0].species"
        :pictureUrl="myVillager[0].image_url"/>
    </div>
    <div class="absolute h-[22%] w-full bottom-0 left-0 -z-1">
      <img class="wave absolute" src="~@/assets/images/wave.svg" alt="wave1"/>
      <img class="wave absolute -left-[99%]" src="~@/assets/images/wave.svg" alt="wave2" />
    </div>
    <img class="island absolute w-[13%] h-auto right-10 bottom-20" src="~@/assets/images/island.svg" alt="island" />
  </div>
</template>

<script>
import TamagotchiCard from '@/components/Tamagotchi.vue'
import { getVillagers, getAVillager } from '@/services/api/villagerAPI'

export default {
  name: 'myParentComponent',
  components: { TamagotchiCard },
  data() {
      return {
        myVillager: {},
        villagers: []
      }
    },
    created: function() {
      this.retrieveAVillager("Lulu")
    },
    methods: {
      async retrieveAVillager(name) {
        try {
          this.myVillager = await getAVillager(name)
        } catch (error) {
          console.error('Error fetching villager data:', error.message)
        }
      },
      async retrieveRandomVillager() {
        try {
          if(this.villagers.length == 0)
            this.villagers = await getVillagers()
          const randomIndex = Math.floor(Math.random() * this.villagers.length);
          const randomVillager = this.villagers[randomIndex];
          this.retrieveAVillager(randomVillager.name);
        } catch (error) {
          console.error('Error fetching random villager data:', error.message);
        }
    }
    }
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