<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    background-color: lightgrey;
}

// We want same look of cards across pages
.card-deck .card {
    min-width: calc(100% - 60px);
    margin: 0 30px;
    margin-top: 15px;
}
</style>
