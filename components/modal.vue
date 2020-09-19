<template>
  <div :class="$style.modal">
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
          v-model="vehicle.description"
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
      name: '',
      description: '',
      rent: '',
      type: 'custom'
    }
  }),
  methods: {
    submit() {
      this.$store.commit("vehicles/addVehicle", this.vehicle);
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
  color: #012345;
}

.modalClose {
  width: 48px;
  height: 48px;
  font-size: 18px;
  color: #012345;
  background: #f3f4f7;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  background-image: url("~static/img/cross.svg");
  background-repeat: no-repeat;
  background-position: center;
  transition: .2s ease;
  outline: none;
}

.modalClose:hover {
  background-color: #ebeffb;
}

.modalClose:active {
  background-color: #ffffff;
}

.modalImg {
  position: relative;
  display: block;
  width: 100%;
  height: 348px;
  margin-bottom: 24px;
  background: #f3f4f7;
  border-radius: 24px;
  cursor: pointer;
}

.modalImg:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  transform: translate(-50%, -50%);
  background: #fff;
  background-image: url("~static/img/addImg.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.modalInput {
  width: calc(100% - 70px);
  padding: 20px 52px 20px 18px;
  margin-bottom: 24px;
  background: #f3f4f7;
  border: none;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: .2s ease;
  outline: none;
}

.modalInput:focus {
  border: 2px solid #707cfa;
}

.modalInput::-webkit-input-placeholder {
  font-family: "Codec Pro", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  color: #677B8F;
}

.modalInput::-moz-placeholder {
  font-family: "Codec Pro", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  color: #677B8F;
}

.modalInput::-ms-input-placeholder {
  font-family: "Codec Pro", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  color: #677B8F;
}

.modalSubmit {
  width: 100%;
  margin-top: 40px;
  padding: 20px 0;
  font-weight: 700;
  line-height: 16px;
  color: #fcfcfc;
  background: #4959ff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: .2s ease;
  outline: none;
}

.modalSubmit:hover {
  background: #293afa;
}

.modalSubmit:active {
  background: #707cfa;
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
  color: #99A7B5;
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
