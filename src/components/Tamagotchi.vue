<template>
  <h2 class="name text-[2rem]">{{name}}</h2>
  <p class="species">{{species}}</p>
  <img class="picture h-[40vh] w-auto" v-bind:src="pictureUrl"/> 
</template>
  
<script>
  export default {
  name: 'TamagotchiCard',
  props: {
    name: {type: String, required: true},
    species: {type: String, required: true}, 
    pictureUrl: {type: String, default:"https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/rick-astley-videoclip-never-gonna-give-you-up.png"}
  }
}
</script>