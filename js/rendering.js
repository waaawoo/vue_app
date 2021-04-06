new Vue({
  el: "#app",
  data: {
    ok: false,
    maybeOk: false,
    // 配列のレンダリング用
    fruits: [
      "リンご",
      "ばなな",
      "ぶどう"
    ],
    object: {
      firstName: "太郎",
      lastName: "田中",
      age: 21
    },

  },
  methods: {
    remove: function(){
      // 先頭削除する
      this.fruits.shift();
    }
  }

})
