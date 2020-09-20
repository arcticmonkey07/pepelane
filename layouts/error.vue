<template>
  <div :class="{ [$style.dark]: this.$store.state.vehicles.isNightMode }">
    <section :class="$style.errorContainer">
      <h1 :class="$style.header">An error has occurred</h1>
      <p :class="$style.text">Please refresh the page</p>
  
      <nuxt-link to="/" :class="$style.reloadButton">Reload page</nuxt-link>
    </section>
  </div>
</template>

<style module>
.errorContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  background: var(--bg-light);
  border-radius: 48px;
}

.dark .errorContainer {
  background-color: var(--night-darken);
}

.header {
  margin: 0 0 24px 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: var(--night);
}

.dark .header {
  color: var(--white);
}

.text {
  margin: 0 0 40px 0;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: var(--light-text);
}

.dark .text {
  color: var(--night-text);
}

.reloadButton {
  padding: 17px 32px;
  background: var(--primary-color);
  border-radius: 12px;
  border: none;
  font-weight: 700;
  line-height: 16px;
  color: var(--white);
  transition: .2s ease;
  outline: none;
  user-select: none;
}

.reloadButton:hover {
  background: var(--primary-hover);
}

.reloadButton:active {
  background: var(--primary--active)
}

@media (max-width: 1100px) {
  .header {
    font-size: 30px;
    line-height: 38px;
  }

  .reloadButton {
    padding: 14px 28px;
    font-size: 15px;
  }
}

@media (max-width: 500px) {
  .errorContainer {
    margin-left: -16px;
    margin-right: -16px;
    border-radius: 24px;
  }

  .header {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 29px;
  }

  .text {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 20px;
  }

  .reloadButton {
    padding: 15px 25px;
    font-size: 14px;
    line-height: 14px;
  }
}

</style>