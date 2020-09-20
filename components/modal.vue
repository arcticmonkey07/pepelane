<template>
  <div :class="[$style.modal, { [$style.dark]: this.$store.state.vehicles.isNightMode }]">
    <header :class="$style.modalHeader">
      <h2 :class="$style.modalHeaderText">Add new vehicle</h2>
      <button type="button" @click="close" :class="$style.modalClose"></button>
    </header>
    <section>
      <form @submit.prevent="submit">
        <div :class="$style.modalImg"></div>
        <!-- <input type="file" :class="$style.modalImg" /> -->
        <input
          type="text"
          placeholder="Name"
          :class="$style.modalInput"
          v-model="vehicle.name"
        />
        <input
          type="text"
          placeholder="Description"
          :class="$style.modalInput"
          v-model="vehicle.specifications_text"
        />
        <div :class="$style.rentInputContainer">
          <input
            id="rentInput"
            type="text"
            placeholder="Rent price"
            :class="[$style.modalInput, $style.inputRent]"
            v-model="vehicle.rent"
          />
          <label for="rentInput" :class="$style.rentLabel">$/h</label>
        </div>
        <button type="submit" :class="$style.modalSubmit">
          Complete
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "modal",
  data: () => ({
    vehicle: {
      name: "",
      specifications_text: "",
      rent: "",
      type: "custom"
    }
  }),
  methods: {
    submit(e) {
      this.$store.commit("vehicles/addVehicle", { ...this.vehicle });
      this.vehicle.name = this.vehicle.specifications_text = this.vehicle.rent =
        "";
      e.target.reset();
      this.$emit("close");
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style module>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 33%;
  display: flex;
  flex-direction: column;
  padding: 64px 72px;
  background: #ffffff;
  border-radius: 48px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  overflow-x: auto;
}

.dark.modal {
  background: var(--night);
}

.modalHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.modalHeaderText {
  margin: 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: var(--night);
}

.dark .modalHeaderText {
  color: var(--white);
}

.modalClose {
  width: 48px;
  height: 48px;
  font-size: 18px;
  color: var(--night);
  background-color: var(--bg-light);
  border-radius: 16px;
  border: none;
  cursor: pointer;
  background-image: url("~static/img/cross.svg");
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.2s ease;
  outline: none;
  user-select: none;
}

.modalClose:hover {
  background-color: #ebeffb;
}

.modalClose:active {
  background-color: #ffffff;
}

.dark .modalClose {
  background-color: var(--night-darken);
  background-image: url("~static/img/cross-white.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.dark .modalClose:hover {
  background-color: #010b16;
}

.dark .modalClose:active {
  background-color: #032f5c;
}

.modalImg {
  position: relative;
  display: block;
  width: 100%;
  height: 348px;
  margin-bottom: 24px;
  background: var(--bg-light);
  border-radius: 24px;
  cursor: pointer;
}

.dark .modalImg {
  background: var(--night-darken);
}

.modalImg:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  background-image: url("~static/img/addImg.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.dark .modalImg:before {
  background-color: var(--night);
}

.modalInput {
  width: calc(100% - 70px);
  padding: 20px 52px 20px 18px;
  margin-bottom: 24px;
  background: var(--bg-light);
  border: none;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: 0.2s ease;
  outline: none;
  user-select: none;
}

.dark .modalInput {
  background-color: var(--night-darken);
  color: var(--night-text);
}

.modalInput:focus {
  border: 2px solid var(--primary-active);
}

.modalInput::-webkit-input-placeholder {
  font-family: "Codec Pro", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  color: var(--light-text);
}

.modalInput::-moz-placeholder {
  font-family: "Codec Pro", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  color: var(--light-text);
}

.modalInput::-ms-input-placeholder {
  font-family: "Codec Pro", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  color: var(--light-text);
}

.dark .modalInput::-webkit-input-placeholder {
  color: var(--night-text);
}

.dark .modalInput::-moz-placeholder {
  color: var(--night-text);
}

.dark .modalInput::-ms-input-placeholder {
  color: var(--night-text);
}

.modalSubmit {
  width: 100%;
  margin-top: 40px;
  padding: 20px 0;
  font-weight: 700;
  line-height: 16px;
  color: var(--white);
  background: var(--primary-color);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s ease;
  outline: none;
  user-select: none;
}

.modalSubmit:hover {
  background: var(--primary-hover);
}

.modalSubmit:active {
  background: var(--primary-active);
}

.rentInputContainer {
  position: relative;
  margin-bottom: 24px;
}

.inputRent {
  margin-bottom: 0;
}

.rentLabel {
  position: absolute;
  top: 50%;
  right: 24px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  text-align: right;
  color: var(--night-text);
  transform: translateY(-50%);
}

@media (max-width: 1800px) {
  .modal {
    padding: 54px 62px;
  }

  .modalHeader {
    margin-bottom: 28px;
  }

  .modalSubmit {
    margin-top: 0;
  }
}

@media (max-width: 1700px) {
  .modalImg {
    height: 42vh;
  }
}

@media (max-width: 1400px) {
  .modal {
    padding: 40px 50px;
  }

  .modalHeaderText {
    font-size: 30px;
    line-height: 38px;
  }

  .modalImg {
    height: 35vh;
  }
}

@media (max-width: 1100px) {
  .modal {
    width: 40%;
  }
}

@media (max-width: 730px) {
  .modal {
    width: 50%;
  }

  .modalHeaderText {
    font-size: 25px;
    line-height: 28px;
  }
}

@media (max-width: 500px) {
  .modal {
    width: 100%;
    margin-top: 160px;
    padding: 28px 16px 32px 16px;
    border-radius: 24px 24px 0px 0px;
    box-sizing: border-box;
  }

  .modalHeader {
    margin-bottom: 24px;
  }

  .modalHeaderText {
    font-size: 24px;
    line-height: 29px;
  }

  .modalClose {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-size: 10px;
  }

  .modalImg {
    height: 260px;
    margin-bottom: 16px;
  }

  .modalImg:before {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-size: 16px;
  }

  .modalInput {
    margin-bottom: 16px;
    padding: 17px 52px 20px 18px;
  }

  .modalInput::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 14px;
  }

  .modalInput::-moz-placeholder {
    font-size: 14px;
    line-height: 14px;
  }

  .modalInput::-ms-input-placeholder {
    font-size: 14px;
    line-height: 14px;
  }

  .rentLabel {
    font-size: 14px;
    line-height: 14px;
  }

  .inputRent {
    margin-bottom: 0;
  }

  .modalSubmit {
    padding: 18px 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
  }
}
</style>
