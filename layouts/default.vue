<template>
  <div>
    <div :class="{ containerBlur: this.$store.state.vehicles.isModalActive }">
      <div :class="$style.container">
        <Header />
    
        <main>
          <Nuxt />
        </main>
    
      </div>
    </div>
    <div :class="{ modalBackdrop: this.$store.state.vehicles.isModalActive }">
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
      this.$store.commit("vehicles/hideModal");
    }
  }
}
</script>

<style>
.containerBlur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(12px);
}

.modalBackdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(52, 79, 106, 0.32);
}
</style>

<style module>

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
