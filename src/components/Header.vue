<template>
  <div class="header-bar" v-if="!isLogging">
    <a @click="goToLandingPage" class="title">
      <h2>Prime Video</h2>
    </a>
    <a @click="launchSignInForm" class="title">
      <h3>Sign In</h3>
    </a>
  </div>
</template>

<script src="./js/header.js"></script>

<style lang="scss" scoped>
.header-bar {
  position: fixed;
  top: 0;
  width: 100vw;
  background-image: linear-gradient(180deg, #13283b 0, rgba(27, 37, 48, 0.85));
  background-repeat: repeat-x;
  background-color: #13283b;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 25px;
  z-index: 10;
  height: 80px;
}
.title {
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    text-shadow: 0 0 10px #fff;
    transition: 0.5s;
  }
}
</style>
