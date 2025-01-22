let btn = document.querySelector("button");
let div = document.querySelector(".img1");
let div2 = document.querySelector("#img2");
let video = document.querySelector("video");
btn.addEventListener("click", () => {
    btn.innerText = "Let's Dance Now😁";
    let h1 = document.querySelector("body");
    div.style.display = "none";
    div2.style.display = "block";
    playVideo();
    video.style.display = "none";
    setInterval( () => {
        h1.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    },20);
});

function playVideo() {
    
    video.play();
};