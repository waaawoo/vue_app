// vueインスタンスの宣言
new Vue({
  // -------------ターゲットの宣言 IDがappに対してvueを使用 elはエレメント-------------
  el: '#app',
  // -------------いかにいろんなオブジェクトを記載できる-------------
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
    message_change: "変えられるよ",

    // データは動的なものを扱うことはできな あくまで初期値
    counter: 0,
    // スタイルの判定用
    isActive: true,
    color: "red",
    bg: "bg-blue",
    // textColor: "red",
    // bgColor: "blue",
    // オブジェクトをdataへ格納する方法もある こっちの方がポピュラー
    styleObject: {
      color: 'red',
      'background-color': "blue"
    },
    // 複数のスタイルオブジェクト適応させる際に配列を使う
    baseStyles: {
      fontSize: "60px"
    }
  },
  // -------------動的なプロパティを扱いたい場合はcomputed:を使用して関数化する-------------
  computed: {
    // 関数作成
    lessThanThree: function(){
      // リターンする必要がある
      return this.counter > 3 ? "さんより上" : "さんよりした"
    },
    // クラスの付け替えを動的に行う
    classObject: function(){
      return{
        red: !this.isActive,
        'bg-blue': this.isActive
      }
    }
  },
  // -------------------------- watch --------------------------
  // 非同期の処理を書くことが多い returnを書くことができる
  watch: {
    counter: function(){
      // // thisは使えないので変数に一旦入れる
      let vm =  this;
      // 3秒後にcounterを0にする
      setTimeout(function(){
        vm.counter = 0
      }, 3000)
    }
  },
  // -------------メソッド作成-------------
  methods: {
    reverseMessage: function(){
      // this.messageはdataの中のmessageオブジェクトにアクセスする
      this.message = this.message.split('').reverse().join('')
    },
    sayHi: function(){
      // 自分のオブジェクトを返したい場合thisを記載する（インスタンスないでデータを扱いたい場合）
      this.message = "HelloVueJS";
      return this.message
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
