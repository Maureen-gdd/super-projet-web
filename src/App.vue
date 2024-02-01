<template>
  <div class="myParentComponent">
    <TamagotchiCard name="Pluto" species="Saint-Hubert" pictureUrl="https://resize-gulli.jnsmedia.fr/r/890,__ym__/img//var/jeunesse/storage/images/gulli/chaine-tv/dessins-animes/pokemon/pokemon/pikachu/26571681-1-fre-FR/Pikachu.jpg"/>
  </div>
</template>

<script>
import TamagotchiCard from '@/components/Tamagotchi.vue'

export default {
  name: 'myParentComponent',
  components: { TamagotchiCard }
}
</script>
