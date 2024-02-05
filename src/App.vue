<template>
  <div class="myParentComponent">
    <TamagotchiCard 
      :name="myVillager[0].name"
      :species="myVillager[0].species"
      :pictureUrl="myVillager[0].image_url"/>
  </div>
</template>

<script>
import TamagotchiCard from '@/components/Tamagotchi.vue'
import { getAVillager } from '@/services/api/villagerAPI'

export default {
  name: 'myParentComponent',
  components: { TamagotchiCard },
  data() {
      return {
        myVillager: {}
      }
    },
    created: function() {
      this.retrieveAVillager("Lulu")
    },
    methods: {
      async retrieveAVillager(name) {
        try {
          this.myVillager = await getAVillager(name)
          console.log(this.myVillager)
        } catch (error) {
          console.error('Error fetching villager data:', error.message)
        }
      }
    }
  };
</script>
