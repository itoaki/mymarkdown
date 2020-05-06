<template>
  <button class="simpleButton" @click="onclick">{{ text }}</button>
</template>

<script>

export default {
  name: 'simpleButton',
  props: ['text'],
  methods: {
    onclick() {
      this.$emit('onclick');
    },
  },
};

</script>
<style lang="scss" scoped>
  .simpleButton {
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #668ad8;/*ボタン色*/
    color: #FFF;
    border-bottom: solid 4px #627295;
    border-radius: 3px;
  }
  .simpleButton:active {
    /*ボタンを押したとき*/
    -webkit-transform: translateY(4px);
    transform: translateY(4px);/*下に動く*/
    border-bottom: none;/*線を消す*/
  }
</style>
