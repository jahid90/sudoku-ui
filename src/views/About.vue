<template>
    <div class="about">
        <Nav />

        <b-card-group deck>
            <b-card bg-variant="secondary" text-variant="white">
                <b-card-text>This is an about page</b-card-text>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
    name: "about",
    components: {
        Nav
    }
}
</script>
