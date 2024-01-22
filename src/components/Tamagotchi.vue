<template>
    <div class="tamagotchi-card">
      <img class="picture" v-bind:src="pictureUrl"/>
      <div>
        <h2 class="name">{{name}}</h2>
        <p class="species">{{species}}</p>
      </div>  
    </div>
</template>
  
<script>
  export default {
    name: 'TamagotchiCard',
      props: {
        name: {type: String, required: true},
        species: String, 
        pictureUrl: {type: String, default:"https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/rick-astley-videoclip-never-gonna-give-you-up.png"}
    }
  }
</script>