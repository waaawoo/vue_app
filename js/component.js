// コンポーネントの登録
// 第一引数に名前 第二引数にデータを入れる
// Vue.component("hello", {
//   template: "<p></p>"
// });
// Vue.component("my-component",{
//   // コンポーネントは関数にする必要がある
//   data: function(){
//     // 情報はリターンする必要がある
//     return{
//       number: 12
//     }
//   },
//   template: "<p>いいね{{number}}<button @click='increment'>+1</button></p>",
//   methods: {
//     increment: function(){
//       this.number += 1;
//     }
//   }
// });


// ローカル登録用コンポーネント
let component = {
  data: function(){
    return{
      number: 12
    }
  },
  template: "<p>いいね{{number}}<button @click='increment'>+1</button></p>",
  methods: {
    increment: function(){
      this.number += 1;
    }
  }
}

new Vue({
  el: ".hello",
  // ローカルコンポーネントを使用する
  components: {
    // キーにコンポーネント名を決め、バリューに作成した変数を呼び出す
    'my-component': component
  },
  data: {
    name: "名前",
    // number: 12
  },

})

new Vue({
  el: ".app",
  data: {
    name: "App",
  },
});

