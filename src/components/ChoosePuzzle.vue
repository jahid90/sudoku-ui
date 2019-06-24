<template>
    <b-card-group deck>
        <b-card bg-variant="secondary" text-variant="white">
            <b-card-text>
                Choose a puzzle
            </b-card-text>
        </b-card>
        <b-card bg-variant="secondary" text-variant="white">
            <b-card-text>
                {{ message }}
            </b-card-text>
        </b-card>
    </b-card-group>
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
