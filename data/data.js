const DATA = [
  {
    audio: "01.mp3",
    text: "赤い鉛筆で間違いを直す。",
    results: [
      { question: "間違いをどうするのですか", answer  : "直す" },
      { question: "どんな鉛筆ですか", answer: "赤い" },
      { question: "何を直すのですか", answer: "間違い" },
      { question: "何で直すのですか", answer: "鉛筆" },
    ]
  },
  {
    audio: "02.mp3",
    text: "ビルの屋上から風船を飛ばす。",
    results: [
      { question: "風船をどうするのですか", answer: "飛ぶ" },
      { question: "ビルのどこからですか", answer: "屋上" },
      { question: "何を飛ばすのですか", answer: "風船" },
      { question: "どこの屋上からですか", answer: "ビル" },
    ]
  },
  {
    audio: "03.mp3",
    text: "手当が早かったので命をとりとめた。",
    results: [
      { question: "命をどうしたのですか", answer: "とりとめた" },
      { question: "何が早かったのでか", answer: "手当" },
      { question: "何をとりとめたのですか", answer: "命" },
      { question: "手当はどうだったのですか", answer: "早かった" },
    ]
  },
  {
    audio: "04.mp3",
    text: "朝食のおかずに目玉焼きを作った。",
    results: [
      { question: "目玉焼きをどうしたのですか", answer: "作った" },
      { question: "何のおかずですか", answer: "朝食" },
      { question: "何を作ったのですか", answer: "目玉焼き" },
      { question: "朝食の何ですか", answer: "おかず" },
    ]
  },
  {
    audio: "05.mp3",
    text: "ペンキを塗ったので「注意」の紙を貼った。",
    results: [
      { question: "「注意」の紙をどうしたのですか", answer: "貼った" },
      { question: "何を塗ったのですか", answer: "ペンキ" },
      { question: "何を貼ったのですか", answer: "「注意」の紙" },
      { question: "ペンキをどうしたのですか", answer: "塗った" },
    ]
  },
  {
    audio: "06.mp3",
    text: "きのう図書館で本を借りました。",
    results: [
      { question: "本をどうしたのですか", answer: "借りた" },
      { question: "どこで借りましたか", answer: "図書館" },
      { question: "何を借りましたか", answer: "本" },
      { question: "いつ借りましたか", answer: "きのう" },
    ]
  },
  {
    audio: "07.mp3",
    text: "朝から冷たい雨が降っています。",
    results: [
      { question: "雨がどうしていますか", answer: "降っている" },
      { question: "どんな雨ですか", answer: "冷たい" },
      { question: "何が降っていますか", answer: "雨" },
      { question: "いつから降っていますか", answer: "朝から" },
    ]
  },
  {
    audio: "08.mp3",
    text: "電話でおすしを五人前注文する。",
    results: [
      { question: "おすしをどうするのですか", answer: "注文する" },
      { question: "何を注文するのですか", answer: "おすし" },
      { question: "どれだけ注文するのですか", answer: "五人前" },
      { question: "何で注文するのですか", answer: "電話" },
    ]
  },
  {
    audio: "09.mp3",
    text: "デパートで流行の洋服を母に買ってもらった。",
    results: [
      { question: "洋服をどうしてもらったのですか", answer: "買ってもらった" },
      { question: "どんな洋服ですか", answer: "流行の洋服" },
      { question: "誰に買ってもらったのですか", answer: "母" },
      { question: "どこで買ってもらったのですか", answer: "デパート" },
    ]
  },

  /*
  {
    audio: "00.mp3",
    text: "",
    results: [
      { question: "", answer: "" },
      { question: "", answer: "" },
      { question: "", answer: "" },
      { question: "", answer: "" },
    ]
  },
  */
];
