<template>
  <div class="myParentComponent">
    <v-btn color="rgba(255, 0, 0, 0.5)" @click="retrieveRandomVillager">Random Villager</v-btn>
    <button @click="retrieveAVillager('Lulu')">Villager Lulu</button>
    <TamagotchiCard 
      :name="myVillager[0].name"
      :species="myVillager[0].species"
      :pictureUrl="myVillager[0].image_url"/>
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
