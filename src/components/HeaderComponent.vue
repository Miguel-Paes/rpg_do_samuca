<script setup></script>

<template>
  <header>
    <div class="left header-div">
      <i class="icon bi bi-list"></i>
    </div>

    <div class="middle header-div">
      <h1>Biological Pact</h1>
    </div>

    <div class="right header-div"></div>
  </header>
</template>

<style scoped>
  header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .icon {
    font-size: 30px;
  }

  .header-div {
    background-color: green;
    padding: 1rem;
    width: 32vw;
  }

  .middle {
    text-align: center;
  }
</style>