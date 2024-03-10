<template>
    <div class="tamagotchi-card relative h-screen w-screen flex justify-center items-center">
        <img src="~@/assets/images/tamanook.svg" alt="tamanook" class="absolute h-[85vh] w-auto">
        <div v-if="myVillager && myVillager.name">
            <TamagotchiCard 
                :name="myVillager.name"
                :species="myVillager.species"
                :pictureUrl="myVillager.image_url"/>
        </div>
        <div v-if="villagers.length != 0 && !clicked" flex>
            <button @click="retrieveRandomVillager" class="relative bg-blue-500 hover:bg-red-700 text-white text-[3rem] text-center py-1 px-6 rounded-full">S  t  a  r  t</button>
            <button @click="research = true" class="relative bg-blue-500 hover:bg-red-700 py-2 px-2 rounded-full">
              <img src="~@/assets/icons/glass.svg" alt="glass" class="h-10">
            </button>
        </div>
    </div>
    <Research v-if="research"/>
</template>

<script>
import TamagotchiCard from '@/components/Tamagotchi.vue'
import Research from '@/components/Research.vue'
import { getVillagers, getAVillager } from '@/services/api/villagerAPI'

export default {
name: 'TamagotchiGallery',
components: { TamagotchiCard },
    data() {
        return {
        myVillager: {},
        villagers: [],
        clicked: false,
        research: false
        }
    },
  created: function() {
    this.retrieveAllVillagers()
  },
  methods: {
    async retrieveAllVillagers() {
      try {
        this.villagers = await getVillagers()
      } catch (error) {
        console.error('Error fetching all villagers data:', error.message)
      }
    },
    async retrieveAVillager(name) {
      try {
        this.myVillager = await getAVillager(name)
      } catch (error) {
        console.error('Error fetching villager data:', error.message)
      }
    },
    async retrieveRandomVillager() {
      try {
        const randomIndex = Math.floor(Math.random() * this.villagers.length)
        this.myVillager = this.villagers[randomIndex]
        this.clicked = true
      } catch (error) {
        console.error('Error fetching random villager data:', error.message)
      }
    }
  }
}
</script>