<template>
    <h1>{{ message }}</h1>
</template>

<script lang="ts">
import "webextension-polyfill";

export default {
    data() {
        return {
            message: "Hello world!",
        };
    },
};
</script>