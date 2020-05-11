<template>
  <main class="main">
    <div class="main--container">
      <div class="main--container--back">
        <div class="back-1">
          <img
            :src="myImgSrc"
            :alt="matchedShow.name"
            class="img-back"
          />
          <div class="back-2"></div>
          <div class="back-3"></div>
        </div>
      </div>
      <div class="main--container--details">
        <h3 class="show-title">{{matchedShow.name}}</h3>
        <div class="show-imdb">IMDB info here</div>
        <div class="show-desc">
          <p>
            Inspired by true events, The Ghazi Attack is India's first
            underwater war film. The story revolves around the events that
            unfolded right before the Indo-Pakistan war of 1971, when the
            Pakistani Submarine Ghazi (Asia's most powerful fast-attack
            submarine at the time) attempted to destroy the Indian aircraft
            carrier Vikrant.
          </p>
        </div>
        <div class="show-actions">
          <a :href="matchedShow.showUrl" target="_blank" class="play-action">
            <button name="play"></button>
            <span class="action-text">Play</span>
          </a>
          <div class="watch-action">
            <img src="../assets/play.png" alt="Play" />
            <span class="watch-text">Watch Later</span>
          </div>
          <div class="watch-action">
            Watch Later
          </div>
        </div>
      </div>
    </div>
    <section class="recommendations">
        <ShowsList title="Customers also watched" :shows="recommendedShows"/>
    </section>
  </main>
</template>

<script src="./js/showPage.js"></script>

<style lang="scss" scoped>
.main {
  margin-top: 60px;
  height: calc(100vh - 60px);
  padding-bottom: 100px;
  background-color: #0f171e;
  overflow: auto;
  color: white;
  &--container {
    position: relative;
    background-color: transparent;
    width: 100%;
    margin: 0 auto;
    padding-left: 50px;
    padding-right: 50px;
    &--back {
      opacity: 1;
      right: 0;
      position: absolute;
      width: 70%;
      .back-1 {
        position: relative;
        .img-back{
          width: 100%;
        }
        .back-2 {
          background: linear-gradient(90deg, #0f171e 10%, rgba(15, 23, 30, 0));
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .back-3 {
          background: linear-gradient(0deg, #0f171e 0, rgba(15, 23, 30, 0) 50%);
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      }
    }
    &--details {
      margin-top: 200px;
      position: absolute;
      display: flex;
      max-width: 50%;
      flex-direction: column;
      .show-title {
        margin-bottom: 20px;
        font-size: 35px;
        line-height: 36px;
      }
      .show-imdb {
        color: #8197a4;
        margin-bottom: 20px;
      }
      .show-actions {
        display: flex;
        align-items: center;
        margin-top: 40px;
        .play-action {
          align-items: center;
          display: flex;
          color: white;
          text-decoration: none;
        }
        .action-text {
          margin-left: 10px;
          font-size: 24px;
          font-weight: 100;
          margin-right: 10px;
        }
        .watch-action {
          align-items: center;
          display: flex;
          padding: 10px 20px 10px 20px;
          height: 60px;
          margin-left: 10px;
          border-radius: 5px;
          background-color: #425265;
          transition: 0.3s;
          cursor: pointer;
          &:hover {
            transition: 0.5s;
            background-color: #566b84;
          }
          .watch-text {
            margin-left: 10px;
          }
        }
      }
      .show-desc {
        font-size: 18px;
        line-height: 1.6;
      }
    }
  }
  .recommendations{
      margin: 600px 20px 20px 20px;
  }
}
button[name="play"] {
  width: 80px;
  height: 80px;
  background: #00a0d6;
  border-radius: 100%;
  margin: 0;
  cursor: pointer;
  outline: none;
  transition: 0.5s;
  &:hover {
    background: #0ac1ff;
    transition: 0.5s;
  }
  &::after {
    content: "";
    display: inline-block;
    position: relative;
    top: 1px;
    left: 3px;
    border-style: solid;
    border-width: 16px 0 16px 32px;
    border-color: transparent transparent transparent white;
  }
}
</style>
