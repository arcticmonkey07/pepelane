<template>
  <div>
    <ul :class="$style.specList">
      <li :class="$style.specItem" v-for="(tab, index) in tabs" :key="index">
        <a
          :class="[$style.specLink, { 'is-active': tab.isActive }]"
          href="#"
          @click="selectTab(tab)"
        >
          {{ tab.name }}
        </a>
      </li>
    </ul>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: []
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name === selectedTab.name;
      });
    }
  },
  created() {
    this.tabs = this.$children;
  }
};
</script>

<style scoped>
.is-active {
  color: #4959ff;
}
</style>

<style module>
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
  color: #677b8f;
  transition: .2s ease;
}

.specLink:hover {
  color: #293afa;
}

.specLink:active {
  color: #707cfa;
}

.description {
  margin: 0 0 32px 0;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #677b8f;
}

@media (max-width: 900px) {
  .specList {
    margin-bottom: 24px;
  }
}

@media (max-width: 400px) {
  .specList {
    margin-bottom: 20px;
  }

  .specLink {
    margin-right: 20px;
  }
}

@media (max-width: 400px) {
  .specLink {
    margin-right: 18px;
    font-size: 14px;
  }
}

</style>
