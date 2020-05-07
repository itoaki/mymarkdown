<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn class="simpleButton" v-on="on" @click="onclick" color="primary">
        <v-icon color="#FFF">{{ icon }}</v-icon> {{ text }}
      </v-btn>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'simpleButton',
  props: [
    'icon',
    'text',
    'tooltip',
  ],
  methods: {
    onclick() {
      this.$emit('onclick');
    },
  },
};
</script>

<style lang="scss" scoped>
  .simpleButton {
    color: #FFF;
    margin: 2px;
  }

</style>
