import $ from 'jquery';

const texts = [
  "Plis pencet",
  "makasih yah!, klik sekali lagi 🥺",
  "I like you, I like you, I like you Sorry, I never meant to But who we kidding, it wasn't like I had a say One look at you and I won't have it any other way I want you, I want you, I want youI want you to want me too",
  "gabut mas",
  "tidur gih",
  "Never gonna give you up Never gonna let you down Never gonna run around and desert youNever gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you",
];

let i = 0;

$("#button").click(() => {
  i = (i + 1) % texts.length;
  $("#title").text(texts[i]);
});
