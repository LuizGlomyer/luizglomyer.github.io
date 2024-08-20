var audio = document.createElement("AUDIO");
document.body.appendChild(audio);
audio.src = "bgm.mp3"

document.body.addEventListener("click", function () {
  audio.play();
  console.log("Song from SiIvaGunner\n" +
    "https://www.youtube.com/watch?v=UzjRRATCQ0g"
  );
});