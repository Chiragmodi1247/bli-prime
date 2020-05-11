<template>
  <main class="main">
    <h3 @click="pushToLandingPage" class="title">Prime Video</h3>
    <div class="form-box">
      <h3 class="form-title">Sign-In</h3>
      <p class="info">*Just Enter a name and you're good to go</p>
      <h3>Username:</h3>
      <input
        type="text"
        v-model="userName"
        placeholder="Username..."
        class="input-bar"
        @keypress.enter="onSubmit"
      />
      <h3>Password:</h3>
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        class="input-bar"
      />
      <button @click="onSubmit" class="sign-in btn">
        Sign-In
      </button>
      <div class="divider">
        <h5>New to amazon?</h5>
      </div>
      <button class="create btn">
        Çreate Account
      </button>
    </div>
  </main>
</template>

<script src="./js/login.js"></script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background-color: rgba(238, 238, 238, 0.75);
}
.form-box {
  width: 25vw;
  margin: 50px auto;
  border: 1px solid rgb(196, 196, 196);
  padding: 20px;
  border-radius: 2px;
  .form-title{
    margin-bottom: 10px;
    font-size: 24px;
  }
  .info{
    color: rgb(0, 119, 255);
    margin-bottom: 10px;
  }
  .input-bar {
    font-size: 1.5em;
    margin-bottom: 10px;
    width: 100%;
    display: block;
    outline: none;
    border: 1px solid #a6a6a6;
    background-color: rgba(238, 238, 238, 0.75);
    border-radius: 5px;
  }
  .btn {
    margin-top: 18px;
    width: 100%;
    padding: 6px 8px 6px;
    border-radius: 2px;
    text-decoration: none;
    position: relative;
    font-size: 15px;
    text-align: center;
    font-weight: 300;
    &:hover {
      cursor: pointer;
    }
  }
  .sign-in {
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  }
  .create {
    background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
  }
  .divider {
    text-align: center;
    position: relative;
    top: 12px;
    padding-top: 1px;
    margin-bottom: 14px;
    line-height: 0;
    &::after {
      content: "";
      width: 100%;
      background-color: transparent;
      display: block;
      height: 1px;
      border-top: 1px solid #e7e7e7;
      position: absolute;
      top: 50%;
      margin-top: -1px;
      z-index: 1;
    }
    h5 {
      line-height: 1;
      font-size: 12px;
      color: #767676;
      font-weight: 400;
      z-index: 2;
      position: relative;
      display: inline-block;
      padding: 0 8px 0 7px;
    }
  }
}
.title {
  color: black;
  text-align: center;
  cursor: pointer;
  padding-top: 50px;
  font-size: 36px;
}
</style>
