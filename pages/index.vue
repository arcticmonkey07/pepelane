<template>
  <div :class="{ [$style.dark]: this.$store.state.vehicles.isNightMode }">
    <div :class="$style.mainContainer">
      <div :class="$style.topContainer">
        <div :class="$style.left">
          <span :class="$style.leftText">Rent</span>
          <select :class="$style.selectType" v-model="type">
            <option v-for="type of uniqueTypes" :key='type'>{{ type }}</option>
          </select>
        </div>

        <a :class="$style.right" href="#" @click.prevent="showModal()">
          <span :class="$style.rightText">Add new</span>
          <button :class="$style.buttonAdd">+</button>
        </a>
      </div>
      <ul :class="$style.list">
        <li
          :class="$style.listItem"
          v-for="vehicle of filtredVehicles"
          :key="vehicle.id"
          @click.prevent="openDetails(vehicle)"
        >
          <a
            :class="$style.listItemLink"
            href="#"
          >
            <img
              :class="$style.itemImg"
              :src="`${vehicle.preview}`"
              alt="preview"
            />
            <div :class="$style.itemContent">
              <h3 :class="$style.itemTitle">{{ vehicle.name }}</h3>
              <p :class="$style.itemDescription">{{ vehicle.description }}</p>
              <span :class="$style.itemRent">{{ vehicle.rent }} $/h</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  async fetch({ store }) {
    if (store.getters['vehicles/vehicles'].length === 0) {
      await store.dispatch('vehicles/fetch')
    }
  },
  data: () => ({
    type: 'whatever',
    isNightMode: false
  }),
  computed: {
    uniqueTypes() {
      const vehicles = this.$store.state.vehicles.vehicles;
      const vehicleTypes = vehicles.map(item => item.type);
      const uniqueTypes = ['whatever', ...new Set(vehicleTypes)];
      return uniqueTypes;
    },
    filtredVehicles() {
      let filtredType = this.type;
      const vehicles = this.$store.state.vehicles.vehicles;
      if (this.type === 'whatever') {
        return vehicles;
      }
      return vehicles.filter(elem => {
        if (filtredType === '') {
          return true;
        } else {
          return elem.type.indexOf(filtredType) > -1;
        }
      })
    }
  },
  methods: {
    openDetails(rent) {
      this.$router.push("/" + rent.name);
    },
    showModal() {
      this.$store.commit("vehicles/toggleModal");
    },
  }
};
</script>


<style>
.modal {
  transition: .3s ease-in;
  transform: translateX(800px);
}

.modalShow {
  transform: translateX(0px);
}
</style>

<style module>
.mainContainer {
  background: var(--bg-light);
  border-radius: 48px;
}

.dark .mainContainer {
  background: var(--night-darken);
}

.topContainer {
  display: flex;
  justify-content: space-between;
  padding: 56px 64px 40px 64px;
}

.left {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  user-select: none;
}

.leftText {
  margin-right: 12px;
}

.dark .leftText {
  color: var(--white);
}

.selectType {
  margin-right: 10px;
  padding-right: 15px;
  font-size: 40px;
  line-height: 40px;
  font-weight: 700;
  color: var(--primary-color);
  border: none;
  background: var(--bg-light);
  background-image: url("~static/img/ic-arrow-down.svg");
  background-repeat: no-repeat;
  background-position: 195px 20px;
  cursor: pointer;
  outline: none;
  appearance: none;
  transition: .2s ease;
}

.dark .selectType {
  background-color: var(--night-darken);
}

.selectType:hover {
  color: var(--primary-hover);
}

.right {
  display: flex;
  align-items: center;
  user-select: none;
}

.rightText {
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: var(--primary-color);
  transition: .2s ease;
}

.right:hover .rightText {
  color: var(--primary-hover);
}

.right:active .rightText {
  color:var(--primary-active);
}

.buttonAdd {
  width: 48px;
  height: 48px;
  margin-left: 20px;
  background: var(--primary-color);
  border: none;
  border-radius: 16px;
  font-size: 22px;
  color: var(--white);
  cursor: pointer;
  transition: .2s ease;
  outline: none;
}

.right:hover .buttonAdd {
  background: var(--primary-hover);
}

.right:active .buttonAdd {
  background: var(--primary-active);
}

.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 0;
  padding: 0 64px;
  list-style: none;
}

.listItem {
  width: 20%;
  padding: 0 15px;
  user-select: none;
}

.listItemLink {
  display: flex;
  margin-bottom: 32px;
  padding: 25px 32px;
  background: var(--white);
  border-radius: 32px;
}

.dark .listItemLink {
  background-color: var(--night);
}

.itemImg {
  width: 88px;
  height: 88px;
  margin-right: 24px;
  border-radius: 24px;
}

.itemContent {
  display: flex;
  flex-direction: column;
}

.itemTitle {
  margin: 0 0 12px 0;
  font-weight: 700;
  line-height: 18px;
  color: var(--night);
}

.dark .itemTitle {
  color: var(--white);
}

.itemDescription {
  margin: 0 0 16px 0;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  color: var(--light-text);
}

.dark .itemDescription {
  color: var(--night-text);
}

.itemRent {
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: var(--secondary);
}

@media (max-width: 1700px) {
  .listItem {
    width: 30%;
  }
}

@media (max-width: 1150px) {
  .listItem {
    width: 46%;
  }
}

@media (max-width: 950px) {
  .listItem {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .topContainer {
    padding: 46px 30px 40px 30px;
  }

  .list {
    padding: 0 30px;
  }

  .listItemLink {
    margin-bottom: 20px;
  }

  .left {
    font-size: 30px;
  }

  .selectType {
    font-size: 30px;
    background-position: 145px 20px;
  }

  .buttonAdd {
    width: 30px;
    height: 30px;
    border-radius: 10px;
  }
}

@media (max-width: 520px) {
  .topContainer {
    padding: 26px 20px 25px 20px;
  }
  .mainContainer {
    margin-right: -20px;
    margin-left: -20px;
    border-radius: 24px;
  }

  .list {
    margin: 0;
    padding: 0 20px;
  }

  .listItem {
    padding: 0;
  }

  .listItemLink {
    padding: 20px;
  }

  .itemImg {
    margin-right: 20px;
  }

  .itemTitle {
    font-size: 16px;
  }

  .left {
    font-size: 24px;
    line-height: 29px;
  }

  .leftText {
    margin-right: 5px;
  }

  .selectType {
    font-size: 24px;
    line-height: 29px;
    background-position: 115px 13px;
  }

  .rightText {
    font-size: 16px;
    line-height: 22px;
  }

  .buttonAdd {
    width: 32px;
    height: 32px;
    margin-left: 12px;
    font-size: 18px;
  }
}

@media (max-width: 400px) {
  .topContainer {
    padding: 26px 16px 25px 16px;
  }

  .list {
    padding: 0 16px;
  }
}

@media (max-width: 350px) {
  .left {
    font-size: 20px;
  }

  .selectType {
    font-size: 20px;
    background-position: 95px 13px;
  }
}

</style>
