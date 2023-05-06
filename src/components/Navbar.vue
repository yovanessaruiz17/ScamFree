<template>
  <nav :style="{ backgroundColor: bgColor }">
    <div class="container">
      <h1>{{ title }}</h1>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: {
      type: String,
      default: 'My Website'
    },
    bgColor: {
      type: String,
      default: '#000000' // Cambiar a #000000 para color negro
    }
  }
}
</script>

<style scoped>
nav {
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgb(87, 87, 87);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
  font-size: 28px;
  color: #ffffff;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  list-style: none;
  margin-right: 24px;
}

a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s ease;
}

a:hover {
  color: #000000;
}
</style>
