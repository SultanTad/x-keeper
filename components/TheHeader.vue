<template>
    <header class="header">
        <div class="container">
            <nav class="nav">
                <NuxtLink><img src="../assets/images/logo.svg" alt="Logo"></NuxtLink>
                <div class="nav__inner">
                    <ul class="menu__list">
                        <li class="menu__item"><NuxtLink>Продукция</NuxtLink></li>
                        <li class="menu__item"><NuxtLink to="/business-solutions">Решения для бизнеса</NuxtLink></li>
                    </ul>
                    <div class="nav__btns">
                        <NuxtLink>
                            <Button white>личный кабинет</Button>
                        </NuxtLink>
                        <NuxtLink>
                            <Button green>оставить заявку</Button>
                        </NuxtLink>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 80px;
    z-index: 3;
    background: #fff;
}
.nav {
    display: flex;
    align-items: center;
    &__inner {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }
    .menu__list {
        display: flex;
        align-items: center;
        gap: 0 28px;
        padding-left: 84px;
        color: #333343;
        font-family: "VelaSans-SemiBold";
        font-style: 14px;
        line-height: 100%;
        letter-spacing: normal;
    }
    &__btns {
        display: flex;
        align-items: center;
        gap: 0 10px;
    }
}
</style>