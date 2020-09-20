<template>
  <div :class="{ [$style.dark]: this.$store.state.vehicles.isNightMode }">
    <div :class="{ [$style.containerBlur]: this.$store.state.vehicles.isModalActive }">
      <div :class="$style.container">
        <Header />
    
        <main :class="$style.main">
          <Nuxt />
        </main>
    
      </div>
    </div>
    <div :class="{ [$style.modalBackdrop]: this.$store.state.vehicles.isModalActive }">
      <modal
        class="modal"
        :class="{ modalShow: this.$store.state.vehicles.isModalActive }"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import modal from '@/components/modal';

export default {
  components: {
    Header,
    modal
  },
  methods: {
    closeModal() {
      this.$store.commit("vehicles/toggleModal");
    }
  }
}
</script>

<style module>
.containerBlur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(12px);
  overflow-y: hidden;
}

.modalBackdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(52, 79, 106, 0.32);
}

.dark {
  background: var(--night);
}

.main {
  padding-bottom: 48px;
}

.container {
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

@media (max-width: 400px) {
  .container {
    max-width: 375px;
    padding-left: 16px;
    padding-right: 16px;
  }
}

</style>
