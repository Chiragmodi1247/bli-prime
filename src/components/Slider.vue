<template>
  <div class="shows__carousel">
    <Carousel
      :autoplay=true
      :loop=true
      :autoplayTimeout=5000
      :perPage=1
      paginationPosition="bottom-overlay"
      :navigationEnabled=true
    >
      <Slide v-for="(img, index) in imgs" :key="index" class="my-slide">
        <a :href="img.src" target="_blank">
          <img :src="img.src" :alt="img.alt" />
        </a>
      </Slide>
    </Carousel>
  </div>
</template>

<script src="./js/slider.js"></script>

<style lang="scss" scoped>
.my-slide {
  max-width: 100vw;
}
.shows__carousel {
  /deep/ .VueCarousel {
    &-navigation {
      &-prev {
        color: rgb(255, 255, 255);
        left: 40px;
        cursor: pointer;
        outline: none;
        font-size: 24px;
      }
      &-next {
        color: rgb(255, 255, 255);
        right: 40px;
        cursor: pointer;
        outline: none;
        font-size: 24px;
      }
    }
  }
}
</style>
