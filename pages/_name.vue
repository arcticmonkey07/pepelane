<template>
  <div :class="{ [$style.dark]: this.$store.state.vehicles.isNightMode }">
    <section :class="$style.detailContainer">
      <div :class="$style.imageContainer">
        <img :class="$style.image" :src="`${vehicle.image}`" alt="detail-image" />
      </div>
  
      <div>
        <h2 :class="$style.title">{{ vehicle.name }}</h2>
  
        <DetailTabs>
          <DetailTab name="Specifications" selected="true">
            <p :class="$style.description">{{ vehicle.specifications_text }}</p>
  
            <h3 :class="$style.featuresHeader">Features:</h3>
  
            <ul :class="$style.featuresList">
              <li :class="$style.featuresItem">
                <span
                  :class="[$style.featuresItemIcon, $style.featuresItemIconCup]"
                ></span>
                <div :class="$style.featuresItemContainer">
                  <h4 :class="$style.featuresItemHeader">
                    A challenge for a true champion
                  </h4>
                  <p :class="$style.featuresItemText">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </li>
              <li :class="$style.featuresItem">
                <span
                  :class="[$style.featuresItemIcon, $style.featuresItemIconPerson]"
                ></span>
                <div :class="$style.featuresItemContainer">
                  <h4 :class="$style.featuresItemHeader">Pilot's sweaty hands</h4>
                  <p :class="$style.featuresItemText">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </li>
            </ul>
          </DetailTab>
    
          <DetailTab name="Team">
            <p :class="$style.description">{{ vehicle.team_text }}</p>
  
            <h3 :class="$style.featuresHeader">Qualified specialists </h3>
  
            <ul :class="$style.specList">
              <li :class="$style.specItem">
                <img  :class="$style.specImg" src="@/static/img/specialist01.jpg" alt="specialist-img">
                <div :class="$style.specContent">
                  <h4 :class="$style.specHeader">Marvin McKinney</h4>
                  <span :class="$style.specText">Pilot assistant</span>
                </div>
              </li>
              <li :class="$style.specItem">
                <img :class="$style.specImg" src="@/static/img/specialist02.jpg" alt="specialist-img">
                <div :class="$style.specContent">
                  <h4 :class="$style.specHeader">Savannah Nguyen</h4>
                  <span :class="$style.specText">Mechanic</span>
                </div>
              </li>
              <li :class="$style.specItem">
                <img :class="$style.specImg" src="@/static/img/specialist03.jpg" alt="specialist-img">
                <div :class="$style.specContent">
                  <h4 :class="$style.specHeader">Courtney Henry</h4>
                  <span :class="$style.specText">Stewardess</span>
                </div>
              </li>
            </ul>
  
            <p :class="$style.description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </DetailTab>
    
          <DetailTab name="Rent terms">
            <p :class="$style.description">{{ vehicle.term_text }}</p>
  
            <h4 :class="$style.termsHeader">Additional conditions:</h4>
  
            <ul :class="$style.termsList">
              <li :class="$style.termsItem">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
              <li :class="$style.termsItem">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
              <li :class="$style.termsItem">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
            </ul>
          </DetailTab>
        </DetailTabs>
  
        <div :class="$style.rentBackgroundMobile">
          <div :class="$style.rentContainer">
            <span :class="$style.rentPrice"
              >Rent for <span>{{ vehicle.rent }} $/h</span></span
            >
            <button :class="$style.rentButton">Rent now</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DatailTabs from "@/components/DetailTabs";
import DatailTab from "@/components/DetailTab";

export default {
  computed: {
    vehicle() {
      const pageName = this.$route.params.name;
      const vehicles = this.$store.state.vehicles.vehicles;
      const vehicle = vehicles.filter(item => item.name === pageName);
      const vehicleItem = { ...vehicle[0] };
      return vehicleItem;
    }
  }
};
</script>

<style module>
.detailContainer {
  display: flex;
  justify-content: space-between;
}

.image {
  margin-right: 64px;
  border-radius: 24px;
}

.title {
  margin: 0 0 32px 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: var(--night);
}

.dark .title {
  color: var(--white);
}

.specList {
  display: flex;
  margin: 0 0 32px 0;
  padding: 0;
  list-style: none;
}

.specLink {
  display: block;
  margin-right: 32px;
  font-weight: 700;
  line-height: 16px;
  color: var(--light-text);
}

.description {
  margin: 0 0 32px 0;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: var(--light-text);
}

.dark .description {
  color: var(--night-text);
}

.featuresHeader {
  margin: 0 0 32px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: var(--night);
}

.dark .featuresHeader {
  color: var(--white);
}

.featuresList {
  margin: 0 0 45px 0;
  padding: 0;
  list-style: none;
}

.featuresItem {
  display: flex;
  margin: 0 0 16px 0;
}

.featuresItem:last-child {
  margin: 0;
}

.featuresItemIcon {
  position: relative;
  display: block;
  width: 80px;
  height: 96px;
  margin: 0 24px 0 0;
  background: var(--bg-light);
  border-radius: 16px;
}

.dark .featuresItemIcon {
  background-color: var(--night-darken);
}

.featuresItemIcon:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background-position: center;
  transform: translate(-50%, -50%);
}

.featuresItemIconCup:before {
  width: 30px;
  height: 24px;
  background-image: url("~static/img/ic-cup.svg");
}

.featuresItemIconPerson:before {
  width: 22px;
  height: 28px;
  background-image: url("~static/img/ic-person.svg");
}

.featuresItemHeader {
  margin: 0 0 8px 0;
  font-weight: 700;
  line-height: 24px;
  color: var(--night);
}

.dark .featuresItemHeader {
  color: var(--white);
}

.featuresItemText {
  margin: 0;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: var(--light-text);
}

.dark .featuresItemText {
  color: var(--night-text);
}

.rentContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 16px 32px;
  background: var(--bg-light);
  border-radius: 16px;
}

.dark .rentContainer {
  background: var(--night-darken);
}

.rentPrice {
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: var(--night);
}

.dark .rentPrice {
  color: var(--white);
}

.rentPrice span {
  color: var(--secondary);
}

.rentButton {
  padding: 17px 32px;
  font-weight: 700;
  line-height: 16px;
  color: var(--white);
  background: var(--primary-color);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: .2s ease;
  outline: none;
  user-select: none;
}

.rentButton:hover {
  background: var(--primary-hover);
}

.rentButton:active {
  background: var(--primary-active);
}

.specList {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

.specItem {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}

.specImg {
  width: 162px;
  height: 96px;
  margin-bottom: 16px;
  border-radius: 16px;
}

.specHeader {
  margin: 0 0 8px 0;
  font-weight: 700;
  line-height: 16px;
  color: var(--night)
}

.dark .specHeader {
  color: var(--white);
}

.specText {
  margin: 0;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  color: var(--light-text);
}

.dark .specText {
  color: var(--night-text);
}

.termsHeader {
  margin: 0 0 24px 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--night);
}

.dark .termsHeader {
  color: var(--white);
}

.termsList {
  margin: 0 0 78px 0;
  padding: 0;
  list-style: none;
}

.termsItem {
  position: relative;
  margin-bottom: 16px;
  padding-left: 20px;
}

.dark .termsItem {
  color: var(--night-text);
}

.termsItem:last-child {
  margin-bottom: 0;
}

.termsItem:before {
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  width: 4px;
  height: 4px;
  background: var(--secondary);
  border-radius: 50%;
}

@media (max-width: 1800px) {
  .image {
    width: 700px;
    height: 700px;
  }
}

@media (max-width: 1620px) {
  .featuresItemContainer {
    width: 74%;
  }
}

@media (max-width: 1300px) {
  .image {
    width: 500px;
    height: 500px;
  }
}

@media (max-width: 1150px) {
  .specList {
    margin-left: -10px;
    margin-right: -10px;
  }

  .specImg {
    width: inherit;
    height: inherit;
  }

  .specItem {
    width: 100%;
    padding: 0 10px;
  }
}

@media (max-width: 1000px) {
  .image {
    width: 400px;
    height: 400px;
  }
}

@media (max-width: 900px) {
  .detailContainer {
    flex-direction: column;
  }

  .imageContainer {
    margin: 0 auto 22px auto;
  }

  .image {
    margin: 0;
  }

  .title {
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 38px;
  }

  .description {
    margin-bottom: 24px;
  }

  .featuresHeader {
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 28px;
  }

  .featuresList {
    margin-bottom: 32px;
  }
}

@media (max-width: 520px) {
  .imageContainer {
    width: 100%;
  }
  .image {
    width: inherit;
    height: inherit;
    margin: 0;
  }

  .rentContainer {
    padding: 15px 26px;
  }
}

@media (max-width: 480px) {
  .specList {
    flex-direction: column;
  }

  .specItem {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 12px;
  }

  .specImg {
    width: 132px;
    height: 80px;
    margin: 0 16px 0 0;
  }

  .specHeader {
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 24px;
  }

  .specContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media (max-width: 400px) {
  .detailContainer {
    margin-bottom: 130px;
  }

  .title {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 29px;
  }

  .description {
    margin-bottom: 24px;
  }

  .description:last-child {
    margin-bottom: 0;
  }

  .featuresList {
    margin: 0;
  }

  .featuresItem {
    margin-bottom: 12px;
  }

  .featuresItemIcon {
    width: 64px;
    height: 80px;
    margin-right: 16px;
  }

  .featuresItemHeader {
    margin-bottom: 4px;
  }

  .rentContainer {
    position: fixed;
    bottom: 0;
    left: 16px;
    right: 16px;
    z-index: 2;
    padding: 12px 24px;
    background: var(--bg-light);
  }

  .rentBackgroundMobile {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 130px;
    background: linear-gradient(180deg,rgba(252, 252, 252, 0) 0%, #FCFCFC 30%, #FCFCFC 100%);
  }

  .rentPrice {
    font-size: 16px;
    line-height: 22px;
  }

  .rentButton {
    padding: 15px 24px;
    font-size: 14px;
    line-height: 14px;
  }

  .termsList {
    margin-bottom: 0;
  }

  .termsHeader {
    margin-bottom: 16px;
  }

  .termsItem {
    margin-bottom: 8px;
    padding-left: 16px;
    font-size: 14px;
    line-height: 20px;
  }
}

@media (max-width: 350px) {
  .rentContainer {
    padding: 15px 18px;
  }

  .rentButton {
    padding: 12px 20px;
    font-size: 13px;
    line-height: 13px;
  }
}

</style>
