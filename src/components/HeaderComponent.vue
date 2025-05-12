<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function alterPage(name) {
    router.push({ name: name})
  }

  const routes = ref([
      {
        path: 'home',
        name: 'Home',
        icon: 'bi-house-fill'
      },
      {
        path: 'create-character',
        name: 'Criar Personagem',
        icon: 'bi-person-fill'
      },
      {
        path: 'all-rooms',
        name: 'Salas',
        icon: 'bi-mic-fill'
      },
      {
        path: 'world-lore',
        name: 'Lore do Mundo',
        icon: 'bi-book-half'
      },
    ])

      const isMenuOpen = ref(false);

</script>

<template>
  <header>
    <div class="row">
      <div class="left header-div">
        <i class="icon bi bi-list" @click="isMenuOpen = !isMenuOpen"></i>
      </div>
  
      <div class="middle header-div">
        <h1>Biological Pact</h1>
      </div>
  
      <div class="right header-div"></div>
    </div>
  </header>
  <main>
    <div class="menu-div">
      <nav class="menu" :class="isMenuOpen ? 'aberto' : 'fechado'">
        <ul class="menu-list">
          <li class="menu-item bi" :class="route.icon" v-for="route in routes" :key="route.path" @click="alterPage(route.path)">
            {{ route.name }}
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    height: 8vh;
  }

  .icon {
    font-size: 30px;
  }

  .header-div {
    padding: 1rem;
    width: 33.3vw;
    background-color: white;
    height: 8vh;
  }

  .middle {
    text-align: center;
  }

  .row {
    display: flex;
  }

  .menu-div {
    display: flex;
    justify-content: space-between;
}

  .menu {
    display: flex;
    height: 92vh;
    transition: .5s;
    box-shadow: .1rem 0 .5rem white;

  }

  .menu-list {
    width: 100%;
    list-style: none;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: .5rem 1.3rem .5rem 1rem;
    font-size: 1.3rem;
    overflow: hidden;
    transition: 1s;
    background-color: white;
  }

  .fechado {
    width: 3rem;
  }

  .aberto {
    width: 15rem;
  }

  .menu-item {
    cursor: pointer;
    display: flex;
    gap: .7rem;
    align-items: center;
  }
</style>