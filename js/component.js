// コンポーネントの登録
// 第一引数に名前 第二引数にデータを入れる
Vue.component("hello", {
  template: "<p>こんにちは</p>"
});

new Vue({
  el: ".hello",
  data: {
    name: "名前",
  },
})


