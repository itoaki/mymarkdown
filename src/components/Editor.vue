<template>
<div class="editor">
  <div class="editorWrapper">
    <div class="memoListWrapper">
      <div class="memoList" v-for="(memo, index) in memos" :key="index" @click="selectMemo(index)" :data-selected="index == selectedIndex">
        <p class="memoTitle">{{ displayTitle(memo.markdown) }}</p>
      </div>
      <button class="addMemoBtn" @click="addMemo">メモの追加</button>
      <button class="deleteMemoBtn" v-if="memos.length > 1" @click="deleteMemo">選択中のメモの削除</button>
      <button class="saveMemosBtn" @click="saveMemos">メモの保存</button>
    </div>
    <textarea class="markdown" v-model="memos[selectedIndex].markdown"></textarea>
    <div class="preview markdown-body" v-html="preview()"></div>
  </div>
</div>
</template>

<script>
import marked from 'marked';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'editor',
  props: ['user'],
  data() {
    return {
      memos: [{
        markdown: '無題のメモ',
      }],
      selectedIndex: 0,
    };
  },
  created() {
    firebase
      .firestore()
      .collection('memos')
      .doc(this.user.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.memos = doc.data().value;
        }
      })
      .catch((err) => {
        console.log('Error getting document', err);
      });
  },

  mounted() {
    document.onkeydown = (e) => {
      if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
        this.saveMemos();
        return false;
      }
    };
  },
  beforeDestoroy() {
    document.onkeydown = null;
  },

  methods: {
    addMemo() {
      this.memos.push({
        markdown : '無題のメモ',
      });
    },
    deleteMemo() {
      this.memos.splice(this.selectedIndex, 1);
      if (this.selectedIndex > 0) {
        this.selectedIndex--;
      }
    },
    saveMemos() {
      firebase
        .firestore()
        .collection('memos')
        .doc(this.user.uid)
        .set({
          value: this.memos,
        });
    },
    selectMemo(index) {
      this.selectedIndex = index;
    },
    preview() {
      return marked(this.memos[this.selectedIndex].markdown);
    },
    displayTitle(text) {
      return text.split(/\n/)[0];
    },
  },
};
</script>

<style lang="scss" scoped>
  .editor {
    width: 100%;
    text-align: center;
  }
  .editorWrapper {
    display: flex;
  }
  .memoListWrapper {
    width: 20%;
    border-top: 1px solid #000;
  }
  .memoList {
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    border-bottom: 1px solid #000;
    &:nth-child(even) {
      background-color: #ccc;
    }
    &[data-selected="true"] {
      background-color: #ccf;
    }
  }
  .memoTitle {
    height: 1.5em;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .addMemoBtn {
    margin-top: 20px;
  }
  .deleteMemoBtn {
    margin: 10px;
  }
  .markdown {
    width: 40%;
    height: 500px;
  }
  .preview {
    width: 40%;
    text-align: left;
  }
</style>
