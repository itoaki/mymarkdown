<template>
  <div>
    <SimpleButton
      :icon="'fas fa-plus'"
      :tooltip="'追加'"
      @onclick="onclick('addMemo')">
    </SimpleButton>
    <SimpleButton
      :icon="'fas fa-trash-alt'"
      :tooltip="'削除'"
      v-if="memos.length > 1"
      @onclick="onclick('deleteMemo')">
    </SimpleButton>
    <SimpleButton
      :icon="'fas fa-save'"
      :tooltip="'保存'"
      @onclick="onclick('saveMemos')">
    </SimpleButton>
  </div>
</template>

<script>
import SimpleButton from './SimpleButton.vue';
export default {
  name: 'memoActions',
  props: [
    'memos',
  ],
  components: {
    SimpleButton,
  },
  methods: {
    onclick(method) {
      this.$emit(method);
    },
  },
};
</script>
