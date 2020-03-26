<template>
    <div class="YC">
        <header>
            <ul class="YC_tab">
                <router-link to="/YC/discuss">
                    <li>广场</li>
                </router-link>
                <router-link to="/YC/follow">
                    <li>关注</li>
                </router-link>
            </ul>
        </header>
        <main class="YC_main">
            <transition>
				<router-view></router-view>
			</transition>
        </main>
    </div>
</template>

<style>
    .YC {
        height: 100%;
        margin-top: 50px;
    }
</style>