<template>
  <div class="shows__carousel">
    <h3 class="shows__carousel--title">
      <b>{{ title }}</b>
    </h3>
    <Carousel :perPage="4" :navigationEnabled="true" :loop="true">
      <Slide v-for="(show, index) in shows" :key="index">
        <ShowCard :url="show.imageUrl" :showId="show.id" :alt="show.name" :ShowUrl="show.showUrl" :Desc="show.desc"/>
      </Slide>
    </Carousel>
  </div>
</template>

<script src="./js/showsList.js"></script>

<style lang="scss" scoped>
.shows__carousel {
  &--title {
    color: white;
    margin-left: 30px;
    padding: 10px 0 10px 0px;
    font-weight: bold;
  }
  /deep/ .VueCarousel {
    padding: 0 20px 0 20px;
    &-navigation {
      &-prev,
      &-next {
        color: rgb(184, 184, 184);
        cursor: pointer;
        outline: none;
        font-size: 18px;
        transition: 0.5s;
        &:hover {
          cursor: pointer;
          color: rgb(255, 255, 255);
          text-shadow: 0 0 10px #fff;
          transition: 0.5s;
        }
      }
      &-prev {
        left: 20px;
      }
      &-next {
        right: 20px;
      }
      // &--disabled {
      //   display: none;
      // }
    }
    &-pagination {
      display: none;
    }
  }
}
</style>
