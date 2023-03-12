selectedNav();
generateButton();

function generateButton() {
  const generate = document.querySelector("#generate");
  generate.addEventListener("click", () => {
    let workoutSelection = document.URL;
    workoutSelection = workoutSelection.slice(-11);
    workoutSelection = workoutSelection.slice(
      workoutSelection.indexOf("/") + 1,
      workoutSelection.indexOf(".")
    );
    const contentListLength =
      document.querySelectorAll(".content-list div").length;

    if ((contentListLength - 4) / 4 !== 5) {
      const workoutData = getWorkoutData();
      let startIndex = (contentListLength - 4) / 4 + 1;

      for (let i = startIndex; i <= 5; i++) {
        generateExercise(i, workoutSelection, workoutData);
        removeContent(".exercise");
        removeContent(".x-sm-exercise");
      }
    }
  });
}

function generateExercise(contentIndex, workoutSelection, workoutData) {
  const workoutListLength = Object.keys(workoutData[workoutSelection]).length;
  let randomIndex = Math.floor(Math.random() * workoutListLength);
  let randomExercise = workoutData[workoutSelection][randomIndex];

  while (isExerciseDuplicate(randomExercise.name)) {
    randomIndex = Math.floor(Math.random() * workoutListLength);
    randomExercise = workoutData[workoutSelection][randomIndex];
  }

  const xSmExercise = document.createElement("div");
  const exercise = document.createElement("div");
  const rep = document.createElement("div");
  const set = document.createElement("div");

  xSmExercise.innerText = `${randomExercise.name}: ${randomExercise.reps} reps - ${randomExercise.sets} sets`;
  exercise.innerText = randomExercise.name;
  rep.innerText = randomExercise.reps;
  set.innerText = randomExercise.sets;

  xSmExercise.classList.add(
    `content-${contentIndex}`,
    "x-sm-exercise",
    "col-12",
    "text-center",
    "py-3"
  );
  exercise.classList.add(
    `content-${contentIndex}`,
    "exercise",
    "col-4",
    "text-center",
    "py-3"
  );
  rep.classList.add(
    `content-${contentIndex}`,
    "rep",
    "col-4",
    "text-center",
    "py-3"
  );
  set.classList.add(
    `content-${contentIndex}`,
    "set",
    "col-4",
    "text-center",
    "py-3"
  );

  const contentContainer = document.querySelector(".content-list");
  contentContainer.append(xSmExercise, exercise, rep, set);
}

function isExerciseDuplicate(exercise) {
  const contentList = document.querySelectorAll(".exercise");
  for (let row of contentList) {
    if (row.innerText.includes(exercise)) {
      return true;
    }
  }
  return false;
}

function removeContent(className) {
  const contentList = document.querySelectorAll(className);

  for (let content of contentList) {
    const originalText = content.innerText;

    content.addEventListener("mouseover", (e) => {
      e.target.innerText = "❌";
    });

    content.addEventListener("mouseout", (e) => {
      e.target.innerText = originalText;
    });

    content.addEventListener("click", (e) => {
      let rowContent = e.target.attributes.class.value;
      rowContent = rowContent.slice(0, rowContent.indexOf(" "));

      const rowContentList = document.querySelectorAll(`.${rowContent}`);
      for (let row of rowContentList) {
        row.remove();
      }
    });
  }
}

function selectedNav() {
  let parsedUrl = document.URL;
  parsedUrl = parsedUrl.slice(-11);
  parsedUrl = parsedUrl.slice(
    parsedUrl.indexOf("/") + 1,
    parsedUrl.indexOf(".")
  );

  const upperNav = document.querySelector(`#${parsedUrl}`);
  upperNav.style.backgroundColor = "rgb(233, 233, 237)";
}

function getWorkoutData() {
  const data = {
    upper: {
      0: {
        name: "text1",
        reps: "6-12",
        sets: "2-4",
      },
      1: {
        name: "text2",
        reps: "6-12",
        sets: "2-4",
      },
      2: {
        name: "text3",
        reps: "6-12",
        sets: "2-4",
      },
      3: {
        name: "text4",
        reps: "6-12",
        sets: "2-4",
      },
      4: {
        name: "text5",
        reps: "6-12",
        sets: "2-4",
      },
      5: {
        name: "text6",
        reps: "6-12",
        sets: "2-4",
      },
      6: {
        name: "text7",
        reps: "6-12",
        sets: "2-4",
      },
      7: {
        name: "text8",
        reps: "6-12",
        sets: "2-4",
      },
      8: {
        name: "text9",
        reps: "6-12",
        sets: "2-4",
      },
      9: {
        name: "text10",
        reps: "6-12",
        sets: "2-4",
      },
    },
    lower: {
      0: {
        name: "text1",
        reps: "6-12",
        sets: "2-4",
      },
      1: {
        name: "text2",
        reps: "6-12",
        sets: "2-4",
      },
      2: {
        name: "text3",
        reps: "6-12",
        sets: "2-4",
      },
      3: {
        name: "text4",
        reps: "6-12",
        sets: "2-4",
      },
      4: {
        name: "text5",
        reps: "6-12",
        sets: "2-4",
      },
      5: {
        name: "text6",
        reps: "6-12",
        sets: "2-4",
      },
      6: {
        name: "text7",
        reps: "6-12",
        sets: "2-4",
      },
      7: {
        name: "text8",
        reps: "6-12",
        sets: "2-4",
      },
      8: {
        name: "text9",
        reps: "6-12",
        sets: "2-4",
      },
      9: {
        name: "text10",
        reps: "6-12",
        sets: "2-4",
      },
    },
    core: {
      0: {
        name: "text1",
        reps: "6-12",
        sets: "2-4",
      },
      1: {
        name: "text2",
        reps: "6-12",
        sets: "2-4",
      },
      2: {
        name: "text3",
        reps: "6-12",
        sets: "2-4",
      },
      3: {
        name: "text4",
        reps: "6-12",
        sets: "2-4",
      },
      4: {
        name: "text5",
        reps: "6-12",
        sets: "2-4",
      },
      5: {
        name: "text6",
        reps: "6-12",
        sets: "2-4",
      },
      6: {
        name: "text7",
        reps: "6-12",
        sets: "2-4",
      },
      7: {
        name: "text8",
        reps: "6-12",
        sets: "2-4",
      },
      8: {
        name: "text9",
        reps: "6-12",
        sets: "2-4",
      },
      9: {
        name: "text10",
        reps: "6-12",
        sets: "2-4",
      },
    },
  };

  return data;
}
