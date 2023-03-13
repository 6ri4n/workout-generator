defaultSelected();
difficultyButton();
generateButton();
clearButton();

function clearButton() {
  const clear = document.querySelector("#clear");
  clear.addEventListener("click", () => {
    const contentList = document.querySelectorAll(".content-list div");
    for (let i = 4; i < contentList.length; i++) {
      contentList[i].remove();
    }
  });
}

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
      generateExercise(workoutSelection, workoutData);
      // let startIndex = (contentListLength - 4) / 4 + 1;

      // for (let i = startIndex; i <= 5; i++) {
      //   generateExercise(workoutSelection, workoutData);
      // }
    }

    removeContent(".exercise");
    removeContent(".x-sm-exercise");
  });
}

function difficultyButton() {
  const difficulty = document.querySelectorAll("#difficulty span");
  for (let button of difficulty) {
    button.addEventListener("click", () => {
      for (let b of difficulty) {
        b.style.backgroundColor = "";
      }

      if (button.className === "beginner") {
        button.style.backgroundColor = "#9dc08b";
      } else if (button.className === "normal") {
        button.style.backgroundColor = "#ffe9a0";
      } else {
        button.style.backgroundColor = "#ff7d7d";
      }
    });
  }
}

function generateExercise(workoutSelection, workoutData) {
  const difficultySelected = getDifficulty();
  const workoutListLength = Object.keys(workoutData[workoutSelection]).length;
  let randomIndex = Math.floor(Math.random() * workoutListLength);
  let randomExercise = workoutData[workoutSelection][randomIndex];

  while (isExerciseDuplicate(randomExercise.name)) {
    randomIndex = Math.floor(Math.random() * workoutListLength);
    randomExercise = workoutData[workoutSelection][randomIndex];
  }

  const contentIndex = getContentIndex();
  const xSmExercise = document.createElement("div");
  const exercise = document.createElement("div");
  const rep = document.createElement("div");
  const set = document.createElement("div");

  xSmExercise.innerText = `${randomExercise.name}: ${randomExercise.difficulty[difficultySelected].reps} reps - ${randomExercise.difficulty[difficultySelected].sets} sets`;
  exercise.innerText = randomExercise.name;
  rep.innerText = randomExercise.difficulty[difficultySelected].reps;
  set.innerText = randomExercise.difficulty[difficultySelected].sets;

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

function getContentIndex() {
  const exerciseList = document.querySelectorAll(".exercise");
  const indexArray = [1, 2, 3, 4, 5];

  for (let i = 0; i < exerciseList.length; i++) {
    const exerciseClassValue = exerciseList[i].classList.value;
    const exerciseContentIndex = parseInt(
      exerciseClassValue.slice(0, exerciseClassValue.indexOf(" ")).slice(-1)
    );

    for (let j = 0; j < indexArray.length; j++) {
      if (exerciseContentIndex === indexArray[j]) {
        indexArray.splice(j, 1);
        break;
      }
    }
  }

  return indexArray[0];
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

function defaultSelected() {
  let parsedUrl = document.URL;
  parsedUrl = parsedUrl.slice(-11);
  parsedUrl = parsedUrl.slice(
    parsedUrl.indexOf("/") + 1,
    parsedUrl.indexOf(".")
  );

  const defaultNav = document.querySelector(`#${parsedUrl}`);
  defaultNav.style.backgroundColor = "rgb(233, 233, 237)";

  const defaultDifficulty = document.querySelector("#difficulty span");
  defaultDifficulty.style.backgroundColor = "#9dc08b";
}

function getDifficulty() {
  const difficulty = document.querySelectorAll("#difficulty span");

  for (let button of difficulty) {
    if (button.style.backgroundColor !== "") {
      return button.className;
    }
  }

  return "beginner";
}

function getWorkoutData() {
  const data = {
    upper: {
      0: {
        name: "upper 1",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      1: {
        name: "upper 2",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      2: {
        name: "upper 3",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      3: {
        name: "upper 4",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      4: {
        name: "upper 5",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      5: {
        name: "upper 6",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      6: {
        name: "upper 7",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      7: {
        name: "upper 8",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      8: {
        name: "upper 9",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      9: {
        name: "upper 10",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
    },
    lower: {
      0: {
        name: "lower 1",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      1: {
        name: "lower 2",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      2: {
        name: "lower 3",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      3: {
        name: "lower 4",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      4: {
        name: "lower 5",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      5: {
        name: "lower 6",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      6: {
        name: "lower 7",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      7: {
        name: "lower 8",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      8: {
        name: "lower 9",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      9: {
        name: "lower 10",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
    },
    core: {
      0: {
        name: "core 1",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      1: {
        name: "core 2",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      2: {
        name: "core 3",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      3: {
        name: "core 4",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      4: {
        name: "core 5",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      5: {
        name: "core 6",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      6: {
        name: "core 7",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      7: {
        name: "core 8",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      8: {
        name: "core 9",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
      9: {
        name: "core 10",
        difficulty: {
          beginner: {
            reps: "4-6",
            sets: "2",
          },
          normal: {
            reps: "6-12",
            sets: "3-4",
          },
          advanced: {
            reps: "16-20",
            sets: "4-5",
          },
        },
      },
    },
  };

  return data;
}
