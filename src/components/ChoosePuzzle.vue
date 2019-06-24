<template>
    <div class="choose-puzzle">
        <p>Choose a puzzle</p>

        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: "ChoosePuzzle",
    props: {
    },
    methods: {
        onPageLoad() {
            this.$store.dispatch('doPageLoad')
                .then(() => this.message = this.$store.state.startMessage)
                .catch(error => console.error(error));
        }
    },
    data() {
        return {
            message: ''
        }
    },
    mounted() {
        this.onPageLoad();
    },
    computed: {
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
