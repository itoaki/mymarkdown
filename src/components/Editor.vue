<template>
  <div class="editor">
    <v-content>
      <v-container>
        <v-layout row>
          <v-flex md24>
            <img alt="MyMarkDown" src="../assets/logo.png">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex md12>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                  <v-btn color="info" class="addMemoBtn" @click="addMemo" icon v-on="on">
                    <v-icon>note_add</v-icon>
                  </v-btn>
              </template>
              <span>新しいメモを追加</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn color="info" class="saveMemosBtn" @click="saveMemos" icon v-on="on">
                  <v-icon>save</v-icon>
                </v-btn>
              </template>
              <span>メモを保存</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn color="error" class="deleteMemoBtn" v-if="memos.length > 1" @click="deleteMemo" icon v-on="on">
                  <v-icon>delete</v-icon>
                </v-btn>
              </template>
              <span>選択中のメモを削除</span>
            </v-tooltip>
          </v-flex>
          <v-flex md12 class="accountRow">
            <span>ようこそ！{{ user.displayName }}さん</span>
            <v-btn color=info @click="logout"><v-icon dark left>exit_to_app</v-icon>ログアウト</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex md4>
            <div class="memoList" v-for="(memo, index) in memos" @click="selectMemo(index)" :key="index" :data-selected="index == selectedIndex">
              <p class="memoTitle">{{displayTitle(memo.markdown)}}</p>
            </div>
          </v-flex>
          <v-flex md10>
            <v-textarea id="textid001" class="markdown textid001" v-model="memos[selectedIndex].markdown" height=500 box></v-textarea>
          </v-flex>
          <v-flex md10>
              <div class="preview markdown-body" v-html="preview()"></div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
        console.log();
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
    logout() {
      firebase.auth().signOut();
    },
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
  .v-textarea.v-text-field--enclosed .v-text-field__slot textarea {
    margin-top: 0px;
  }
  .preview {
    margin-left: 5px;
    height: 500px;
    overflow: scroll;
  }
  .memoList {
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    border-bottom:  1px solid #000;
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
  .accountRow {
    text-align: right;
  }
</style>
