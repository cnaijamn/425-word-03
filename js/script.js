"use strict";

const $slow = document.getElementById("slow");
const $text = document.getElementById("text");
const $qAndA = document.getElementById("q_and_a");
const audio = new Audio();

let data = null;

// 初期化
$text.style.display = "none";

// 乱数データを取得
const getRandomData = () => {
  var idx = Math.floor(Math.random() * DATA.length);

  //console.log(idx);
  return DATA[idx];
};

// 質問表示
const displayQuestion = () => {
  data = getRandomData();
  console.log(data);

  // 削除
  while ($qAndA.hasChildNodes()) {
    $qAndA.removeChild($qAndA.firstChild);
  }
  $text.textContent = "";
  $text.style.display = "none";

  // 追加
  for (const qAndA of data.results) {
    const $tr = document.createElement("tr");

    const $question = document.createElement("td");
    $question.textContent = "Q: " + qAndA.question;
    $question.className = "text question";
    $question.onclick = displayAnswer;
    $question.qAndA = qAndA;
    $tr.append($question);

    const $answer = document.createElement("td");
    //$answer.textContent = qAndA.answer;
    $answer.textContent = "A: ";
    $answer.className = "text answer";
    $tr.append($answer);

    $question.$answer = $answer;

    $qAndA.appendChild($tr);
  }

  // 音声更新
  $slow.textContent = 1.0;
  audio.src = "./data/" + data.audio;
  audio.currentTime = 0;
  audio.playbackRate = $slow.textContent;

  // 再生
  playAudio();
};

// 再生
const playAudio = () => {
  if (audio.src == "") {
    console.log("audio.src is 'null'");
    return;
  }

  audio.currentTime = 0;
  audio.play();
};

// スロー
const slowAudio = () => {
  if (audio.src == "") {
    console.log("audio.src is 'null'");
    return;
  }

  let playbackRate = audio.playbackRate;

  if (playbackRate <= 0.6) {
    console.log("audio.playbackRate is " + playbackRate);
    return;
  }

  //playbackRate -= 0.1;
  playbackRate = Math.round((playbackRate - 0.1) * 10) / 10;

  $slow.textContent = playbackRate;
  audio.currentTime = 0;
  audio.playbackRate = playbackRate;
};

// テキスト表示
const displayText = () => {
  if (data == null) {
    console.log("data is 'null'");
    return;
  }

  $text.style.display = "block";
  $text.textContent = data.text;
};

// 答え表示
const displayAnswer = (e) => {
  const qAndA = e.srcElement.qAndA;
  const $answer = e.srcElement.$answer;

  $answer.textContent = "A: " + qAndA.answer;
};
