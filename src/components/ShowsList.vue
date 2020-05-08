<template>
  <div class="shows__carousel">
    <Carousel :perPage=4 :navigationEnabled=true>
      <Slide>
        <ShowCard
          url="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cea1ff7b34c4dfd9a9e72bcefcf7e8fad68e3cb132ec1d3e056c896edbdd9054._UR1920,1080_RI_SX356_FMjpg_.jpg"
          alt="Pagal Panti"
        />
      </Slide>
      <Slide>
        <ShowCard
          url="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1316a2a7480d5cf048817ff57f8f31cc4c6e49985dcb3d65fc7f2a8dc333a3c7._UR1920,1080_RI_SX356_FMjpg_.jpg"
          alt="Nun"
        />
      </Slide>
      <Slide>
        <ShowCard
          url="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/42e276468d1b2042a61342e0cb90da1c62e2ea7bbb971fb00705023a41b3ad06._UR1920,1080_RI_SX356_FMjpg_.png"
          alt="Kem Cho"
        />
      </Slide>
      <Slide>
        <ShowCard
          url="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/12cfd45ace899cc26a58d25df4cb5934464dac006f8f8dbcfbdebd5e58f56520._UR1920,1080_RI_SX356_FMjpg_.jpg"
          alt="Jack ryan"
        />
      </Slide>
      <Slide>
        <ShowCard
          url="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bee4c34123ee1b254dc1d55abc8f708b34a3827892588d6819d5c20fd6a5da13._UR1920,1080_RI_SX356_FMjpg_.jpg"
          alt="Bhoot"
        />
      </Slide>
      <Slide>
        <ShowCard
          url="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/edb902c39e277b563929c6cf59a02a0849e28c5d1b92afd41809db72164470ee._UR1920,1080_RI_SX356_FMjpg_.jpg"
          alt="4 More shots"
        />
      </Slide>
      <Slide>
        <ShowCard url="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9eb37e226e0b2a3a0f2ab0f64cbc519614207d453abf08986dc15f51e75191f4._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="I love dick" />
      </Slide>
      <Slide>
        <ShowCard url="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/57699bc8ed55245ba2b0cfc28dca9d0f830a71425437e51a28d1a41ab315a0a3._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="2 broke" />
      </Slide>
    </Carousel>
  </div>
</template>

<script src="./js/showsList.js"></script>

<style lang="scss" scoped>
.shows__carousel {
  /deep/ .VueCarousel {
    padding: 20px 20px 0 20px;
    &-navigation {
      &-prev,
      &-next {
        color: rgb(184, 184, 184);
        height: 50px;
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
    }
    &-pagination {
      display: none;
    }
  }
}
</style>
