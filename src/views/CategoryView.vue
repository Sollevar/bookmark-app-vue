<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
    Category {{ route.params.alias }}
</template>
