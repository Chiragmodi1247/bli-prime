<template>
  <main class="search-results">
    <p class="search-results--count">
      {{ searchedResults.length }} Shows found for "{{
        this.$route.params.searchTerm
      }}"
    </p>
    <div class="search-results--shows">
      <ShowCard
        v-for="(show, index) in searchedResults"
        :key="index"
        class="search-results--shows--show"
        :showId="show.id"
        :url="show.imageUrl"
        :alt="show.name"
        :ShowUrl="show.showUrl"
        :Desc="show.desc"
      />
    </div>
  </main>
</template>

<script src="./js/searchPage.js"></script>

<style lang="scss" scoped>
.search-results {
  margin-top: 60px;
  height: calc(100vh - 60px);
  background-color: #0f171e;
  overflow: auto;
  color: white;
  padding: 20px 50px 20px 50px;
  &--count {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #555a5e;
  }
  &--shows {
    display: flex;
    flex-wrap: wrap;
    &--show {
      max-width: 22vw;
      margin: 10px 0 10px 5px;
    }
  }
}
</style>
