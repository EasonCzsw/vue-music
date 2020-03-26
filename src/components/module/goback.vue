<template>
    <div class="goback">
        <span  @click="$router.back(-1)">goBack</span>
    </div>
</template>

<style>
    .goback {
        padding-top: 10px;
        margin-bottom: -30px;
    }
    .goback span {
        margin-left: 20px;
    }
</style>