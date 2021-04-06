// vueインスタンスの宣言
new Vue({
  // ターゲットの宣言 IDがappに対してvueを使用 elはエレメント
  el: '#app',
  // いかにいろんなオブジェクトを記載できる
  data: {
    message: "HelloWorld",
    number: 0,
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
    },

    // マウスのx軸y軸
    x: 0,
    y: 0,
    x2: 0,
    y2: 0,
    // カウントアップ
    number2: 0,


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
    },
    // カウントアップ関数
    clickCountUp: function(){
      return this.number += 1;
    },

    // eventを引数におくとイベントオブジェクトを取れる eventオブジェクトの中のclientから情報を取得する
    changeMouse: function(e){
      this.x = e.clientX;
      this.y = e.clientY;
    },
    changeMouse2: function(e){
      this.x2 = e.clientX;
      this.y2 = e.clientY;
    },
    clickCountUp2: function(num) {
      this.number2 += 1 * num;
    },
    noEvent: function(event){
      // stopPropagationはバブリングをさせない
      // 両方イベント発火しないようにする
      // event.stopPropagation() → v-onに.stopで同様の効果がある

    },
    myAlert: function(){
      alert("アラート");
    }
  }
})
