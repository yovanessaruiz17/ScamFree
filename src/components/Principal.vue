<template>
    <router-view/>
  <div class="container">
    <Navbar title="Restaurantes y Bares" color="#f00" />
    <div class="list-container">
      <div>
        <h2>Restaurantes</h2>
        <RestaurantList :restaurants="restaurants" @select-restaurant="showDetails" />
      </div>
      <div>
        <h2>Bares</h2>
        <BarList :bars="bars" @select-bar="showDetails" />
      </div>
    </div>
    <div class="details" v-if="selectedItem">
      <h2>{{ selectedItem.name }}</h2>
      <p>{{ selectedItem.description }}</p>
      <ul>
        <li v-for="item in selectedItem.items" :key="item.name">
          <strong>{{ item.name }}</strong> - {{ item.price }}
        </li>
      </ul>
      <p>{{ selectedItem.phone }}</p>
      <p>{{ selectedItem.address }}</p>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import RestaurantList from './components/RestaurantList.vue'
import BarList from './components/BarList.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    RestaurantList,
    BarList
  },
  data() {
    return {
      restaurants: [
        {
          name: 'Restaurante 1',
          description: 'Descripción del restaurante 1',
          items: [
            { name: 'Plato 1', price: '$10' },
            { name: 'Plato 2', price: '$15' },
            { name: 'Plato 3', price: '$20' }
          ],
          phone: '1234567890',
          address: 'Calle 1 #123'
        },
        {
          name: 'Restaurante 2',
          description: 'Descripción del restaurante 2',
          items: [
            { name: 'Plato 4', price: '$25' },
            { name: 'Plato 5', price: '$30' },
            { name: 'Plato 6', price: '$35' }
          ],
          phone: '0987654321',
          address: 'Calle 2 #456'
        }
      ],
      bars: [
        {
          name: 'Bar 1',
          description: 'Descripción del bar 1',
          items: [
            { name: 'Cerveza 1', price: '$5' },
            { name: 'Cerveza 2', price: '$6' },
            { name: 'Cocktail 1', price: '$10' }
          ],
          phone: '1234567890',
          address: 'Calle 3 #789'
        },
        {
          name: 'Bar 2',
          description: 'Descripción del bar 2',
          items: [
            { name: 'Cerveza 3', price: '$7' },
            { name: 'Cerveza 4', price: '$8' },
            { name: 'Cocktail 2', price: '$12' }
          ],
          phone: '0987654321',
          address: 'Calle 4 #1011'
        }
      ],
      selectedItem: null
    }
  },
  methods: {
    showDetails(item) {
      this.selectedItem = item
    }
  }
}
</script>

<style>
/* Estilos para la barra de navegación */

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f00;
  color: #fff;
  font-size: 1.2em;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

/* Estilos para la lista de restaurantes */

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

/* Estilos para la sección de detalles */

.details {
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: #333;
  font-size: 1.2em;
}

.details h2 {
  margin: 0;
  font-size: 2em;
  color: rgb(0, 0, 0);
}

.details ul {
  margin: 10px 0 0 0;
  padding: 0;
}

.details li {
  margin: 5px 0;
  font-size: 0.8em;
  color: #666;
}
</style>
