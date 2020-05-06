<template>
  <div id="app">
    <Header v-if='!isLogging'></Header>
    <router-view />
  </div>
</template>

<script src='./js/app.js'></script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  </style>
