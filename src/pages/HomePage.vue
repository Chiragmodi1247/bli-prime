<template>
  <main class="content">
      <Slider />
    <section class="ShowsList">
      <ShowsList v-for="(shows,index) in TotalShows" :key="index" :title="shows.ListTitle" :shows="shows.Shows"/>
    </section>
  </main>
</template>

<script src="./js/homePage.js"></script>

<style lang="scss" scoped>
.content {
  margin-top: 60px;
  height: calc(100vh - 60px);
  background-color: #0f171e;
  overflow: auto;
  padding-bottom: 100px;
}
.ShowsList {
  padding: 20px 20px 0px 20px;
}
</style>
