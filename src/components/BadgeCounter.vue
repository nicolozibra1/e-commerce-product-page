<template>
    <div class="badge text-white">
        {{ count }}
    </div>
</template>

<script>
    export default {
        name: 'BadgeCounter',
        props: ['count']
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;

    .badge{
        background-color: $orange;
        font-size: 8px;
    }
</style>