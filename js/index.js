// vueインスタンスの宣言
new Vue({
  // ターゲットの宣言 IDがappに対してvueを使用 elはエレメント
  el: '#app',
  // いかにいろんなオブジェクトを記載できる
  data: {
    message: "HelloWorld",
    number: 3,
    ok: true,
    html: "<h1>h１です</h1>",
    url: "https://google.com",
    attribute: "href",
    // 動的にurlを生成する方法 指定したい属性へnumberを入れてあげる オブジェクトにまとめらる
    // urlTwitter: "https://twitter.com",
    // number: 31
    twitterObject: {
      href: "https://twitter.com",
      id: 31
    }

  },
  // メソッド作成
  methods: {
    reverseMessage: function(){
      // this.messageはdataの中のmessageオブジェクトにアクセスする
      this.message = this.message.split('').reverse().join('')
    },
    sayHi: function(){
      // 自分のオブジェクトを返したい場合thisを記載する（インスタンスないでデータを扱いたい場合）
      this.message = "HelloVueJS";
      return this.message;
    }
  }
})
