<template>
    <div class="showCard">
        <img class="img-thumb" :src="url" :alt="alt">
    </div>
</template>

<script src="./js/showCard.js">
</script>

<style lang="scss" scoped>
.showCard {
    color: white;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 5px;
    margin: 0 5px 0 5px;
}
.img-thumb {
    max-width: 100%;
}
</style>