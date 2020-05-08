<template>
  <main class="content">
      <Slider />
    <section class="ShowsList">
      <ShowsList />
      <ShowsList />
      <ShowsList />
      <ShowsList />
    </section>
  </main>
</template>

<script src="./js/homePage.js"></script>

<style lang="scss" scoped>
.content {
  margin-top: 80px;
  height: calc(100vh - 80px);
  background-color: #0f171e;
  overflow: auto;
}
.ShowsList {
  padding: 20px 20px 0px 20px;
}
</style>
