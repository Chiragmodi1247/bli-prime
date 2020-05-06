<template>
  <div class="header-bar">
    <a class="title">
      <h2>Prime Video</h2>
    </a>
    <a class="title">
        <h3>Sign In</h3>
    </a>
  </div>
</template>

<script src="./js/header.js"></script>

<style lang="scss" scoped>
.header-bar {
  width: 100vw;
  background-color: #0f171e;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
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
