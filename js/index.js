// vueインスタンスの宣言
new Vue({
  // ターゲットの宣言 IDがappに対してvueを使用 elはエレメント
  el: '#app',
  // いかにいろんなオブジェクトを記載できる
  data: {
    message: "HelloWorld"
  },
  // メソッド作成
  methods: {
    reverseMessage: function(){
      // this.messageはdataの中のmessageオブジェクトにアクセスする
      this.message = this.message.split('').reverse().join('')
    }
  }
})
