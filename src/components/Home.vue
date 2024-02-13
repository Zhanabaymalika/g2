<template>
    <div>
      <h2>Welcome to Home Page</h2>
      <div class="home-container">
        <Sidebar @navigate="navigateToComponent" />
        <div class="content">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/Sidebar.vue';
  
  export default {
    components: {
      Sidebar,
    },
    methods: {
        navigateToComponent(componentName) {
  // Переход к соответствующему маршруту внутри Home
  this.$router.push(`/home/${componentName.toLowerCase()}`);
},
    },
  };
  </script>
  
  <style scoped>
  /* Ваши стили для Home.vue */
  .home-container {
    display: flex;
  }
  
  .content {
    flex-grow: 1;
    padding: 10px;
  }
  </style>