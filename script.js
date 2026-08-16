/* =====================================================
   INTRO — THREE LITTLE SECRETS
===================================================== */

const introButton =
  document.getElementById("introButton");

const introSecret =
  document.querySelector("#introSecret span");

const introSecrets = [
  "full of life",
  "wala derly ferly",
  "i wish they became 1000"
];

let introIndex = 0;

introButton.addEventListener("click", () => {

  introSecret.classList.remove("show");

  setTimeout(() => {

    introSecret.textContent =
      introSecrets[introIndex];

    introSecret.classList.add("show");

    introIndex++;

    if (introIndex >= introSecrets.length) {
      introIndex = 0;
    }

  }, 300);

});


/* =====================================================
   SCROLL PROGRESS
===================================================== */

const progressBar =
  document.getElementById("progressBar");

window.addEventListener("scroll", () => {

  const total =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    (window.scrollY / total) * 100;

  progressBar.style.width =
    `${progress}%`;

});


/* =====================================================
   FISH — TAP TO FLIP
===================================================== */

const fishCards =
  document.querySelectorAll(".fish-card");

fishCards.forEach(card => {

  card.addEventListener("click", () => {

    card.classList.toggle("flipped");

  });

});


/* =====================================================
   AQUARIUM
===================================================== */

const aquariumCover =
  document.getElementById("aquariumCover");

aquariumCover.addEventListener("click", () => {

  aquariumCover.classList.add("open");

});


/* =====================================================
   ART — TAP TO REVEAL
===================================================== */

const artCards =
  document.querySelectorAll(".art-card");

artCards.forEach(card => {

  card.addEventListener("click", () => {

    card.classList.toggle("open");

  });

});


/* =====================================================
   MUSIC
===================================================== */

const song =
  document.getElementById("song");

const songButton =
  document.getElementById("songButton");


songButton.addEventListener("click", async () => {

  if (song.paused) {

    song.currentTime = 20;

    try {

      await song.play();

    } catch(error) {

      console.log(error);

    }

    songButton.innerHTML =
      "⏸ <span>pause</span>";

  } else {

    song.pause();

    songButton.innerHTML =
      "♪ <span>listen</span>";

  }

});


song.addEventListener("timeupdate", () => {

  if (song.currentTime >= 30) {

    song.pause();

    song.currentTime = 20;

    songButton.innerHTML =
      "↻ <span>again</span>";

  }

});


/* =====================================================
   SPACE — REVEAL IN STAGES
===================================================== */

const spaceExperience =
  document.getElementById(
    "spaceExperience"
  );

const spaceButton =
  document.getElementById(
    "spaceButton"
  );

const spaceText =
  document.getElementById(
    "spaceText"
  );

let spaceStage = 0;


spaceButton.addEventListener("click", () => {

  spaceStage++;


  if (spaceStage === 1) {

    spaceExperience
      .classList
      .add("stage-one");

    spaceText.innerHTML = `

      <span>
        KEEP LOOKING
      </span>

      <h3>
        There are galaxies
        beyond galaxies.
      </h3>

    `;

    spaceButton.textContent =
      "look closer";

  }


  else if (spaceStage === 2) {

    spaceExperience
      .classList
      .add("stage-two");

    spaceText.innerHTML = `

      <span>
        AND THEN
      </span>

      <h3>
        Someone is floating
        above it all.
      </h3>

    `;

    spaceButton.textContent =
      "one more time";

  }


  else {

    spaceText.innerHTML = `

      <span>
        YOUR UNIVERSE
      </span>

      <h3>
        Infinite,
        just like curiosity.
      </h3>

    `;

    spaceButton.style.display =
      "none";

  }

});


/* =====================================================
   FINAL — THREE STEPS
===================================================== */

const finalSteps =
  document.querySelectorAll(".final-step");

const mergeButton =
  document.getElementById(
    "mergeButton"
  );

const canonArea =
  document.getElementById(
    "canonArea"
  );

let finalIndex = 0;


mergeButton.addEventListener("click", () => {

  finalSteps[finalIndex]
    .classList
    .remove("active");

  finalIndex++;


  if (finalIndex < finalSteps.length) {

    finalSteps[finalIndex]
      .classList
      .add("active");

  }


  if (finalIndex === finalSteps.length - 1) {

    mergeButton.textContent =
      "let it play";

  }


  if (finalIndex >= finalSteps.length) {

    mergeButton.style.display =
      "none";

    canonArea.classList.add("show");

  }

});


/* =====================================================
   CANON IN D
===================================================== */

const canon =
  document.getElementById("canon");

const canonButton =
  document.getElementById(
    "canonButton"
  );

const finalMessage =
  document.getElementById(
    "finalMessage"
  );


canonButton.addEventListener(
  "click",
  async () => {

    if (canon.paused) {

      canon.currentTime = 110;

      try {

        await canon.play();

      } catch(error) {

        console.log(error);

      }

      canonButton.innerHTML = `
        ✦
        <span>
          playing...
        </span>
      `;


      /*
        Give the music a few seconds
        before revealing the final words.
      */

      setTimeout(() => {

        finalMessage.classList.add(
          "show"
        );

      }, 4500);


    } else {

      canon.pause();

      canonButton.innerHTML = `
        ✦
        <span>
          let it play
        </span>
      `;

    }

  }
);


/* =====================================================
   SUBTLE PARALLAX
===================================================== */

window.addEventListener(
  "mousemove",
  event => {

    const x =
      (event.clientX /
        window.innerWidth -
        .5) * 8;

    const y =
      (event.clientY /
        window.innerHeight -
        .5) * 8;

    document
      .querySelector(".memory-photo")
      ?.style.setProperty(
        "transform",
        `translate(${x * .25}px, ${y * .25}px)`
      );

  }
);


/* =====================================================
   PREVENT SONG + CANON PLAYING TOGETHER
===================================================== */

song.addEventListener("play", () => {

  canon.pause();

});

canon.addEventListener("play", () => {

  song.pause();

});
