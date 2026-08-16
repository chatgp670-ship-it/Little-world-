/* ==========================================
PAGE NAVIGATION
========================================== */

const pages =
document.querySelectorAll(".page");

const nextButtons =
document.querySelectorAll("[data-next]");

const currentPage =
document.getElementById("currentPage");

let current = 0;

function showPage(index) {

if (
index < 0 ||
index >= pages.length
) {
return;
}

pages[current]
.classList
.remove("active");

current = index;

pages[current]
.classList
.add("active");

currentPage.textContent =
String(current + 1)
.padStart(2, "0");

}

nextButtons.forEach(button => {

button.addEventListener("click", () => {

showPage(current + 1);

});

});

/* ==========================================
KEYBOARD NAVIGATION
========================================== */

document.addEventListener(
"keydown",
event => {

if (  
  event.key === "ArrowRight" ||  
  event.key === "Enter"  
) {  

  showPage(current + 1);  

}  

if (event.key === "ArrowLeft") {  

  showPage(current - 1);  

}

}
);

/* ==========================================
SWIPE NAVIGATION
========================================== */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener(
"touchstart",
event => {

touchStartX =  
  event.changedTouches[0].screenX;

},
{ passive: true }
);

document.addEventListener(
"touchend",
event => {

touchEndX =  
  event.changedTouches[0].screenX;  

const difference =  
  touchStartX - touchEndX;  

if (Math.abs(difference) < 60) {  
  return;  
}  

if (difference > 0) {  

  showPage(current + 1);  

} else {  

  showPage(current - 1);  

}

},
{ passive: true }
);

/* ==========================================
SONG
========================================== */

const song =
document.getElementById("song");

const songButton =
document.getElementById(
"songButton"
);

songButton.addEventListener(
"click",
async () => {

if (song.paused) {  

  song.currentTime = 20;  

  try {  

    await song.play();  

    songButton.innerHTML = "Ⅱ";  

  } catch(error) {  

    console.log(error);  

  }  

} else {  

  song.pause();  

  songButton.innerHTML = "♫";  

}

}
);

song.addEventListener(
"timeupdate",
() => {

if (song.currentTime >= 30) {  

  song.pause();  

  song.currentTime = 20;  

  songButton.innerHTML = "↻";  

}

}
);

/* ==========================================
CANON
========================================== */

const canon =
document.getElementById("canon");

const canonButton =
document.getElementById(
"canonButton"
);

canonButton.addEventListener(
"click",
async () => {

if (canon.paused) {  

  canon.currentTime = 110;  

  try {  

    await canon.play();  

    canonButton.innerHTML = `  
      ✦  
      <span>playing...</span>  
    `;  

  } catch(error) {  

    console.log(error);  

  }  

} else {  

  canon.pause();  

  canonButton.innerHTML = `  
    ✦  
    <span>let it play</span>  
  `;  

}

}
);

/* ==========================================
DON'T PLAY BOTH SONGS
========================================== */

song.addEventListener(
"play",
() => {

canon.pause();

}
);

canon.addEventListener(
"play",
() => {

song.pause();

}
);

/* ==========================================
PRELOAD NEXT IMAGES
========================================== */

const images = [
"flowerhorn.jpg",
"oscar-blackey.jpg",
"oscar-lemon.jpg",
"betta.jpg",
"tanks-setup.jpg",
"drawing-01.jpg",
"drawing-02.jpg",
"drawing-03.jpg",
"drawing-04.jpg",
"1000228743.jpg",
"1000228745.jpg"
];

images.forEach(src => {

const image =
new Image();

image.src = src;

}); دا css
