document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PAGE NAVIGATION
  ========================= */

  const pages = document.querySelectorAll(".page");
  const nextButtons = document.querySelectorAll("[data-next]");
  const currentPage = document.getElementById("currentPage");

  let current = 0;

  function showPage(index) {

    if (index < 0 || index >= pages.length) return;

    pages.forEach(page => {
      page.classList.remove("active");
    });

    pages[index].classList.add("active");

    current = index;

    if (currentPage) {
      currentPage.textContent =
        String(current + 1).padStart(2, "0");
    }
  }


  /* =========================
     NEXT BUTTONS
  ========================= */

  nextButtons.forEach(button => {

    button.addEventListener("click", event => {

      event.preventDefault();

      showPage(current + 1);

    });

  });


  /* =========================
     KEYBOARD
  ========================= */

  document.addEventListener("keydown", event => {

    if (
      event.key === "ArrowRight" ||
      event.key === "Enter"
    ) {
      showPage(current + 1);
    }

    if (event.key === "ArrowLeft") {
      showPage(current - 1);
    }

  });


  /* =========================
     SWIPE
  ========================= */

  let touchStartX = 0;

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

      const touchEndX =
        event.changedTouches[0].screenX;

      const difference =
        touchStartX - touchEndX;

      if (Math.abs(difference) < 60) return;

      if (difference > 0) {
        showPage(current + 1);
      } else {
        showPage(current - 1);
      }

    },
    { passive: true }
  );


  /* =========================
     YOUR SONG
  ========================= */

  const song = document.getElementById("song");
  const songButton = document.getElementById("songButton");


  if (song && songButton) {

    song.preload = "auto";

    songButton.addEventListener("click", async () => {

      if (song.paused) {

        /*
          Your song starts at 00:20
          and stops at 00:30
        */

        song.currentTime = 20;

        try {

          await song.play();

          songButton.textContent = "Ⅱ";

        } catch (error) {

          console.error("Song error:", error);

        }

      } else {

        song.pause();

        songButton.textContent = "♫";

      }

    });


    song.addEventListener("timeupdate", () => {

      if (song.currentTime >= 30) {

        song.pause();

        song.currentTime = 20;

        songButton.textContent = "↻";

      }

    });

  }


  /* =========================
     CANON IN D
  ========================= */

  const canon = document.getElementById("canon");
  const canonButton = document.getElementById("canonButton");


  if (canon && canonButton) {

    canon.preload = "auto";

    canonButton.addEventListener("click", async () => {

      /*
        PLAY
      */

      if (canon.paused) {

        try {

          /*
            IMPORTANT:
            No currentTime = 110 here.
            Canon starts normally.
          */

          await canon.play();

          canonButton.innerHTML = `
            ✦
            <span>playing...</span>
          `;

        } catch (error) {

          console.error(
            "Canon playback error:",
            error
          );

        }

      }

      /*
        PAUSE
      */

      else {

        canon.pause();

        canonButton.innerHTML = `
          ✦
          <span>let it play</span>
        `;

      }

    });


    /*
      When Canon finishes
    */

    canon.addEventListener("ended", () => {

      canonButton.innerHTML = `
        ✦
        <span>play again</span>
      `;

    });

  }


  /* =========================
     NEVER PLAY BOTH
  ========================= */

  if (song && canon) {

    song.addEventListener("play", () => {

      if (!canon.paused) {
        canon.pause();
      }

      if (canonButton) {

        canonButton.innerHTML = `
          ✦
          <span>let it play</span>
        `;

      }

    });


    canon.addEventListener("play", () => {

      if (!song.paused) {
        song.pause();
      }

      if (songButton) {
        songButton.textContent = "♫";
      }

    });

  }


  /* =========================
     PRELOAD IMAGES
  ========================= */

  const images = [

    "martina-childhood.jpg",

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

    const img = new Image();

    img.src = src;

  });


  /* =========================
     INITIAL PAGE
  ========================= */

  showPage(0);

});
