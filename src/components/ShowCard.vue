<template>
    <div
      class="container"
      @click="goToShowPage"
      :style="{
        backgroundImage: `url(${url})`,
      }"
    >
      <div class="overlay">
        <div class="play">
          <div class="head">
            <h3>{{ ShowTitle }}</h3>
            <hr />
          </div>
          <button name="play"></button>
        </div>
        <div class="desc">
          <p>{{ Desc }}</p>
        </div>
      </div>
    </div>
</template>

<script src="./js/showCard.js"></script>

<style lang="scss" scoped>
$bg: #fef5df;
.container {
  border-radius: 5px;
  margin: 0 5px 0 5px;
  background-color: black;
  background-size: cover;
  cursor: pointer;
  background-position: left bottom;
}

.overlay {
  width: 100%;
  height: 100%;
  bottom: 0;
  background: rgba(35, 48, 68, 0.9);
  color: $bg;
  opacity: 0;
  transition: all 0.5s;
  padding: 10px;
}
.play {
  display: flex;
  justify-content: space-between;
}

.head {
  transform: translateY(40px);
  transition: all 0.7s;
  padding: 10px;
  hr {
    display: block;
    margin-top: 5px;
    width: 0;
    border: none;
    border-bottom: solid 2px $bg;
    transition: all 0.5s;
  }
}

.desc {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.7s;
  height: 80px;
  color: white;
  margin-top: 40px;
}

.container:hover .overlay {
  border-radius: 5px;
  opacity: 1;
  & .head {
    transform: translateY(0px);
  }

  & hr {
    width: 100%;
    transition-delay: 0.4s;
  }

  & .desc {
    transform: translateY(0px);
    transition-delay: 0.3s;
    opacity: 1;
  }

  & .play {
    transform: translateY(0px);
    transition-delay: 0.6s;
    opacity: 1;
  }
}

button[name="play"] {
  width: 50px;
  height: 50px;
  background: rgb(0, 0, 0);
  border: 1px solid white;
  border-radius: 100%;
  margin: 0;
  cursor: pointer;
  outline: none;
  transition: 0.5s;
  &:hover {
    background: #00a0d6;
    transition: 0.5s;
  }
  &::after {
    content: "";
    display: inline-block;
    position: relative;
    top: 1px;
    left: 3px;
    border-style: solid;
    border-width: 8px 0 8px 16px;
    border-color: transparent transparent transparent white;
  }
}
</style>
