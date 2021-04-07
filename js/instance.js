// インスタンス1からインスタンス2へアクセスするには
// id1用 変数をとると外側からアクセスできる
let vm1 = new Vue({
  // elで指定する
  el: "#instance1",
  data: {
    message: "インスタンス１",
  },
})

// 外部から変更する際に、外部からプロパティを入れることは不可能(vm.name = "〇〇")はできない
// 厳密にはリアクティブにならない ビューに反映されない
// なぜか -> vueのインスタンスプロパティにデータをおかないとリアクティブに動作させれない
// vueインスタンスに設定してあるものはgetter、setterを用意している
// 外部で設定したものはgetter、setterがないため、リアクティブな処理を行うことができない
vm1.message = "変えました"
vm1.name = "名前"
// console.log(vm1);
// インスタンスを変数に入れたものデータを変えられる
vm1.message = "書き換えられました";


// ユーザー定義のプロパティやメソッドは$がついてる
// $dataは定義した情報が入ってくる
// vue.jsは外部のデータを参照することができる
let data = {
  message: "外部",
  name: "外部"
}


// id2用
let vm2 = new Vue({
  el: "#instance2",
  data: data,
  methods: {
    changeMessage1: function(){
      // vm１側のデータを変更できる
      vm1.message = "インスタンス2から変えました";
    },
  },
  computed: {
    myData: function(){
      // 自分の情報を外に参照させるときはthisを使う
      return this.$data;
    }
  }

})

// vueインスタンスのデータを全て見たい場合は$dataをする
// console.log(vm2.$data);
// console.log(data === vm2.$data);
// $mountメソッドはelプロパティを後付けできる
vm1.$mount('#app2')
