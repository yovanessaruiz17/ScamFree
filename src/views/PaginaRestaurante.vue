<template>
  <div>
    <restaurant-list/>
  </div>
    <ul>
      <li v-for="restaurant in restaurants" :key="restaurant.name" @click="selectRestaurant(restaurant)">
        <h3>{{ restaurant.name }}</h3>
        <p>{{ restaurant.description }}</p>
      </li>
    </ul>
  </template>
  <script>
  import RestaurantList from '@/components/RestaurantList.vue';
  export default {
    name: 'PaginaRestaurante',
    components:{
      RestaurantList,
    },
    props: {
      restaurants: {
        type: Array,
        required: true
      }
    },
    methods: {
      selectRestaurant(restaurant) {
        this.$emit('select-restaurant', restaurant)
      }
    }
  }
  </script>
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s ease;
  }
  
  li:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
  
  li h3 {
    margin: 0;
    font-size: 1.2em;
  }
  
  li p {
    margin: 5px 0 0 0;
    font-size: 0.8em;
    color: #666;
  }
  </style>
  