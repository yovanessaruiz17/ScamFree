<template>
  <div>
    <h2>Restaurantes</h2>
    <RestaurantList :restaurants="restaurants" @select-restaurant="showDetails" />
  </div>
</template>
<script>
import RestaurantList from '../components/RestaurantList.vue';

export default {
  name: 'PaginaRestaurantes',
  components: {
    RestaurantList
  },
  data() {
    return {
      restaurants: [
        {
          name: 'Brasa y Barril',
          description: 'Sitio web: http://brasaybarril.com/',
          items: [
            { name: 'Crema de Pollo', price: '$15.000' },
            { name: 'Lomo fino al leñador', price: '$47.000' },
            { name: 'Lomo de cerdo BBQ', price: '$37.000' }
          ],
          phone: '672 2497 - 6749571',
          address: 'Alto Bosque: Trv. 52 #21a-108.'
        },
        {
          name: 'San Valentin',
          description: 'http://www.sanvalentinrestaurantebar.com/menudiasemana.html',
          items: [
            { name: 'Pechuga en salsa de champiñones', price: '$30.000' },
            { name: 'Filet Mignon', price: '$55.000' },
            { name: 'Costillas BBQ', price: '$45.000' }
          ],
          phone: '+57 310 4153330',
          address: 'Restaurante San Valentin # 10, Cl. 37 #2886 Cartagena de Indias, Colombia'
        },
        {
          name: 'SAN NICOLAS',
          description: 'https://sannicolasrestaurantebar.com/',
          items: [
            { name: 'Churrasco', price: '$40.000' },
            { name: 'Alitas a la BQQ x6', price: '$33.000' },
            { name: 'Cazuela de Mariscos', price: '$42.000' }
          ],
          phone: '+57 310 622 1662',
          address: 'Centro Calle Larga Cl. 25 #8b-159 Cartagena Colombia'
        }
      ]
    };
  },
  methods: {
    showDetails(item) {
      // Implementa la lógica para mostrar los detalles del restaurante seleccionado
    }
  }
};
</script>
