<template>
  <div
    :class="imageClass + ' base-image'"
    :style="{
      backgroundImage: `linear-gradient(to ${imageOrientation}, #000 40%, transparent 58%),url(${url})`,
    }"
  >
    <h3 class="base-image--title">{{ bigTitle }}</h3>
    <p class="base-image--body">
      {{ bodyTitle }}
    </p>
    <a @click="goToLogin" class="base-image--button">
      <span>{{ buttonTitle }}</span>
    </a>
  </div>
</template>

<script src="./js/leftImage.js"></script>

<style lang="scss" scoped>

.base-image {
  background-size: cover;
  padding: 10px 5%;
  background-color: #000;
  min-height: 480px;
  line-height: 1.3;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  &--title {
    line-height: 1.2 !important;
    font-size: 36px;
  }
  &--body {
    margin-top: 24px;
    font-size: 15px;
    font-weight: 100;
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
.right-image {
  background-position: right top;
  padding-right: 55%;
}
.left-image {
  background-position: left top;
  padding-left: 55%;
}
</style>
