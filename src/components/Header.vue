<template>
  <div class="header-bar" v-if="!isLogging">
    <a @click="goToLandingPage" class="title">
      <h2>Prime Video</h2>
    </a>
    <div v-if="isLogged" class="header-bar--primary-components">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: tab === currentTab }"
        >
          <a @click="changeTab(index)">
            {{ tab }}
          </a>
        </li>
      </ul>
      <div class="header-bar--primary-components--search-box">
        <input
          placeholder="Search..."
          @keypress.enter="searchShow"
          v-model="searchTerm"
          class="header-bar--primary-components--search-box--input"
        />
        <div v-if="searchTerm.length" class="header-bar--primary-components--search-box--suggestions">
          <ol class="non-empty">
            <li>
              <ol>
                <li @click="searchedShow(show.name)" class="suggested" v-for="(show,index) in suggestions" :key="index">
                  <a  class="suggestion-item">{{show.name}}</a>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <a @click="launchSignInForm" v-if="!isLogged" class="title name">
      <h4>Sign In</h4>
    </a>
    <a @click="logoutUser" v-else class="title name">
      <h4>{{ userName }}</h4>
    </a>
  </div>
</template>

<script src="./js/header.js"></script>

<style lang="scss" scoped>
.header-bar {
  position: fixed;
  top: 0;
  width: 100vw;
  background-image: linear-gradient(180deg, #13283b 0, rgba(27, 37, 48, 0.85));
  background-repeat: repeat-x;
  background-color: #13283b;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  z-index: 10;
  height: 60px;
  &--primary-components {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    .active {
      color: white;
      border-bottom: 1px solid white;
    }
    ul {
      width: 40%;
    }
    li {
      display: inline-block;
      color: grey;
      margin: 0 10px 0 10px;
      a {
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
      .Search-bar {
        float: right;
        color: white;
      }
    }
    &--search-box {
      width: 20vw;
      position: relative;
      border: 1px solid rgba(129, 151, 164, 0.7);
      outline: none;
      color: white;
      background-color: inherit;
      &--input {
        font-size: 20px;
        width: 90%;
        padding: 5px;
        border: none;
        background-color: inherit;
        outline: none;
        color: white;
        &:hover .header-bar--primary-components--search-box--close {
          background-color: red;
        }
      }
      &--suggestions {
        position: relative;
        ol {
          right: 0;
        }
        .non-empty {
          list-style: none;
          padding: 0;
          position: absolute;
          margin-top: 5px;
          pointer-events: all;
          background: #252e39;
          -webkit-border-radius: 3px;
          border-radius: 3px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          -webkit-transition: all 0.5s ease-out;
          -o-transition: all 0.5s ease-out;
          transition: all 0.5s ease-out;
          li {
            list-style: none;
            margin: 0;
            ol {
              overflow-y: scroll;
              max-height: 50vh;
              right: 0;
              margin-top: 0;
              position: relative;
              .suggested {
                list-style: none;
                width: 20vw;
                color: #8197a4;
                &:hover {
                  background: #6d7175;
                  color: white;
                }
                .suggestion-item {
                  padding: 14px 48px 14px 24px;
                  line-height: 20px;
                  display: block;
                  outline: 0;
                  border-bottom: 1px solid #323e4c;
                  -webkit-transition: all 0.2s ease-out;
                  -o-transition: all 0.2s ease-out;
                  transition: all 0.2s ease-out;
                  &:visited {
                    color: rgba(242, 244, 246, 0.9);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.title {
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    text-shadow: 0 0 10px #fff;
    transition: 0.5s;
  }
}
.name {
  padding: 5px 10px 0 0;
}
</style>
