<template>
  <div :class="imageClass">
    <h1 :class="imageClass+'--title'">{{ bigTitle }}</h1>
    <p :class="imageClass+'--body'">
      {{ bodyTitle }}
    </p>
    <a :class="imageClass+'--button'">
      <span>{{ buttonTitle }}</span>
    </a>
  </div>
</template>

<script src="./js/leftImage.js"></script>

<style lang="scss" scoped>
.right-image {
  background-image: linear-gradient(to right, #000 40%, transparent 58%),
    url("https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg");
  background-size: cover;
  background-position: right top;
  background-color: #000;
  min-height: 480px;
  padding: 10px 5%;
  padding-right: 55%;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  &--title {
    line-height: 1.2 !important;
  }
  &--body {
    margin-top: 24px;
    font-size: 21px;
    font-weight: 200;
  }
  &--button {
    display: table;
    margin-top: 48px;
    padding: 16px 18px 16px;
    border-radius: 2px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    background-color: #2373eb;
    position: relative;
    font-size: 17px;
    min-width: 280px;
    text-align: center;
    font-weight: 700;
    margin-right: 50%;
    &:hover {
      cursor: pointer;
    }
  }
}
  .left-image {
    background-image: linear-gradient(to left, #000 40%, transparent 58%),
      url("https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-Living-Room-V2._CB524587855_SY1200_FMJPG_.jpg");
    background-size: cover;
    background-position: left top;
    background-color: #000;
    min-height: 480px;
    padding-right: 0;
    padding-left: 55%;
    line-height: 1.3;
    color: white;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    &--title {
      line-height: 1.2 !important;
    }
    &--body {
      margin-top: 24px;
      font-size: 21px;
      font-weight: 200;
    }
    &--button {
      display: table;
      margin-top: 48px;
      padding: 16px 18px 16px;
      border-radius: 2px;
      color: rgb(255, 255, 255);
      text-decoration: none;
      background-color: #2373eb;
      position: relative;
      font-size: 17px;
      min-width: 280px;
      text-align: center;
      font-weight: 700;
      margin-right: 50%;
      &:hover {
        cursor: pointer;
      }
    }
}
</style>
