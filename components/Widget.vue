<template>
  <div class="container">
    <div class="get-in-touch" :class="{ open__widget: activeWidget }">
      <h2 class="title">Связаться</h2>
      <div class="icon-wrap" @click="closeWidget">
        <img
          class="get-in-touch--icon"
          src="../assets/images/close-get-in-touch.svg"
          alt=""
        />
      </div>
      <div class="contact-info">
        <p>WhatsApp <img src="../assets/images/Whatsapp.svg" alt="" /></p>
        <p>Telegram <img src="../assets/images/telegram.svg" alt="" /></p>
        <p>Написать на email</p>
        <p>Позвонить</p>
      </div>
    </div>
    <div class="widget" @click="activatedWidget">
      <img src="../assets/images/widget.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
const activeWidget = ref(false);
const activatedWidget = () => {
  activeWidget.value = !activeWidget.value;
};
const closeWidget = () => {
  activeWidget.value = false;
};
</script>
<style lang="scss">
.widget {
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: #333343;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.get-in-touch {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 200;
  max-width: 450px;
  width: 100%;
  background-color: #ebecf3;
  border-radius: 34px;
  border: 2px solid #fff;
  display: none;
}

.get-in-touch.open__widget {
  display: block;
}

.get-in-touch .title {
  text-align: center;
  padding-top: 20px;
  font-family: "VelaSans-ExtraBold";
  font-weight: 800;
  margin-bottom: 43px;
  font-size: 26px;
  line-height: 120%;
}

.get-in-touch .icon-wrap {
  background-color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  right: 18px;
  top: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.get-in-touch .contact-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  padding: 0 18px 18px 18px;
}

.get-in-touch .contact-info p {
  background-color: #fff;
  border-radius: 132px;
  padding: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "VelaSans-SemiBold";
  font-weight: 600;
  font-size: 16px;
}

.get-in-touch .contact-info p img {
  margin-left: 6px;
}
</style>
