<template>
  <div class="loading">
    <svg
      id="loading-logo"
      width="52"
      height="36"
      viewBox="0 0 52 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.9495 25.6428L0.702637 0.112656L15.7408 0.146632L33.4474 18.0519L33.4527 18.0572L25.9495 25.6428Z"
        fill="#333343"
      />
      <path
        d="M51.131 35.9338L36.1919 36L29.649 29.3837L37.1503 21.7963L51.131 35.9338Z"
        fill="#333343"
      />
      <path
        d="M25.9495 10.4574L33.4527 18.0447L33.4474 18.0519L15.6966 36L0.815812 35.873L25.9442 10.4645L25.9495 10.4574Z"
        fill="#333343"
      />
      <path
        d="M51.2972 0L37.1503 14.3056L29.6472 6.71826L36.1477 0.146632L51.2972 0Z"
        fill="#333343"
      />
    </svg>
    <p id="loading-text">Открываем возможности и снижаем риски для бизнеса</p>
    <div class="loading-line-container">
      <div id="loading-line"></div>
    </div>
  </div>
</template>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: white;
}

#loading-logo {
  position: absolute;
  top: 30%;
  scale: 5.3;
  z-index: 10000;
}
#loading-text {
  position: absolute;
  top: 50%;
  font-family: "VelaSans-Medium";
  font-weight: 500;
  font-size: 38px;
  line-height: 100%;
  color: #333343;
  text-align: center;
  max-width: 547px;
}
.loading-line-container {
  position: absolute;
  top: 55%;
  width: 357px; /* Фиксируем ширину контейнера */
  margin-top: 253px;
  left: 50%;
  transform: translateX(-50%); /* Центрируем контейнер */
}
#loading-line {
  height: 2px;
  width: 0;
  border-radius: 83px;
  background: #333343;
  transform-origin: left; /* Анимация начинается с левого края */
}
@media (min-width: 1550px) {
  .loading {
    height: 846px;
  }
  #loading-logo {
    top: 38%;
    scale: 4.3;
  }
  #loading-text {
    top: 55%;
  }
  .loading-line-container {
    top: 75%;
  }
}
@media (max-width: 480px) {
  #loading-logo {
    scale: 3;
  }
  #loading-text {
    font-size: 22px;
  }
}
</style>
