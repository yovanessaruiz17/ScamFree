<template>
    <ul>
      <li v-for="bar in bars" :key="bar.name" @click="selectBar(bar)">
        <h3>{{ bar.name }}</h3>
        <p>{{ bar.description }}</p>
      </li>
    </ul>
  </template>
  
  <script>
  import BarList from '@/components/BarList.vue';
  export default {
    components:{
        BarList,
    },
    name: 'PaginaBares',
    props: {
      bars: {
        type: Array,
        required: true
      }
    },
    methods: {
      selectBar(bar) {
        this.$emit('select-bar', bar)
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
  