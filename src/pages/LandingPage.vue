<template>
  <div class="container">
    <LeftImage
      v-for="(data, index) in imageData"
      :key="index"
      :url="data.url"
      :buttonTitle="data.buttonTitle"
      :bodyTitle="data.bodyTitle"
      :bigTitle="data.bigTitle"
      :isLeft="data.isLeft"
    ></LeftImage>
  </div>
</template>

<script src="./js/landingPage.js"></script>

<style lang="scss" scoped>
.container {
  margin-top: 60px;
  height: calc(100vh - 60px);
  background-color: #0f171e;
  overflow: auto;
}
</style>
