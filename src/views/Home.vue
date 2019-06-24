<template>
    <div class="home">
        <Nav />

        <ChoosePuzzle />
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import ChoosePuzzle from "@/components/ChoosePuzzle.vue";

export default {
    name: "home",
    components: {
        Nav,
        ChoosePuzzle
    }
};
</script>
