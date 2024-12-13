const sound = document.querySelector("div#sound")
const text = document.querySelector("div#text")

console.log( sound, text );

sound.addEventListener("timeupdate", function() {
    console.log( sound.currentTime );
    text.style.fontSize = (sound.currentTime) * 200 + "px";

    const angle = sound.currentTime / sound.duration * 360;
   text.style.transform = `rotate(${angle}deg)`;
});

sound.addEventListener("volumechange", function() {
    console.log( sound.volume );
});x``