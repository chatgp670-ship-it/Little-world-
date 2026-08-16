document.addEventListener("DOMContentLoaded", function () {

  /* ==========================================
     PAGES
  ========================================== */

  const pages = document.querySelectorAll(".page");
  const buttons = document.querySelectorAll("[data-next]");
  const pageCounter = document.getElementById("currentPage");

  let currentPageIndex = 0;

  function showPage(index) {

    if (index < 0 || index >= pages.length) {
      return;
    }

    pages.forEach(function (page) {
      page.classList.remove("active");
    });

    pages[index].classList.add("active");

    currentPageIndex = index;

    if (pageCounter) {
      pageCounter.textContent =
        String(index + 1).padStart(2, "0");
    }
  }


  /* ==========================================
     NEXT BUTTONS
  ========================================== */

  buttons.forEach(function (button) {

    button.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      showPage(currentPageIndex + 1);

    });

  });


  /* ==========================================
     KEYBOARD
  ========================================== */

  document.addEventListener("keydown", function (event) {

    if (
      event.key === "ArrowRight" ||
      event.key === "Enter"
    ) {
      showPage(currentPageIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      showPage(currentPageIndex - 1);
    }

  });


  /* ==========================================
     SWIPE
  ========================================== */

  let startX = 0;

  document.addEventListener(
    "touchstart",
    function (event) {

      startX =
        event.changedTouches[0].screenX;

    },
    { passive: true }
  );


  document.addEventListener(
    "touchend",
    function (event) {

      const endX =
        event.changedTouches[0].screenX;

      const difference =
        startX - endX;

      if (Math.abs(difference) < 60) {
        return;
      }

      if (difference > 0) {
        showPage(currentPageIndex + 1);
      } else {
        showPage(currentPageIndex - 1);
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
    document.getElementById("songButton");


  if (song && songButton) {

    songButton.addEventListener(
      "click",
      async function () {

        if (song.paused) {

          song.currentTime = 20;

          try {

            await song.play();

            songButton.textContent = "Ⅱ";

          } catch (error) {

            console.error(
              "Song error:",
              error
            );

          }

        } else {

          song.pause();

          songButton.textContent = "♫";

        }

      }
    );


    song.addEventListener(
      "timeupdate",
      function () {

        if (song.currentTime >= 30) {

          song.pause();

          song.currentTime = 20;

          songButton.textContent = "↻";

        }

      }
    );

  }


  /* ==========================================
     CANON IN D
  ========================================== */

  const canon =
    document.getElementById("canon");

  const canonButton =
    document.getElementById("canonButton");


  if (canon && canonButton) {

    canonButton.addEventListener(
      "click",
      async function () {

        if (canon.paused) {

          canon.currentTime = 110;

          try {

            await canon.play();

            canonButton.innerHTML =
              "✦<span>playing...</span>";

          } catch (error) {

            console.error(
              "Canon error:",
              error
            );

          }

        } else {

          canon.pause();

          canonButton.innerHTML =
            "✦<span>let it play</span>";

        }

      }
    );


    canon.addEventListener(
      "ended",
      function () {

        canonButton.innerHTML =
          "✦<span>play again</span>";

      }
    );

  }


  /* ==========================================
     STOP OTHER MUSIC
  ========================================== */

  if (song && canon) {

    song.addEventListener(
      "play",
      function () {

        canon.pause();

        if (canonButton) {

          canonButton.innerHTML =
            "✦<span>let it play</span>";

        }

      }
    );


    canon.addEventListener(
      "play",
      function () {

        song.pause();

        if (songButton) {
          songButton.textContent = "♫";
        }

      }
    );

  }


  /* ==========================================
     PRELOAD IMAGES
  ========================================== */

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


  images.forEach(function (src) {

    const img = new Image();

    img.src = src;

  });


  /* ==========================================
     START
  ========================================== */

  showPage(0);

});
