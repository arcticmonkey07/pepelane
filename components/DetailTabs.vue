<template>
  <div :class="{ [$style.dark]: this.$store.state.vehicles.isNightMode }">
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
  color: var(--light-text);
  transition: .2s ease;
  user-select: none;
}

.dark .specLink {
  color: var(--night-text);
}

.specLink:hover {
  color: var(--primary-hover);
}

.specLink:active {
  color: var(--primary-active);
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

<style scoped>
.is-active {
  color: var(--primary-color);
}
</style>