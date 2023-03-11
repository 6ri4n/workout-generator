navSelected();
contentRemove(".exercise");
contentRemove(".x-sm-exercise");

function contentRemove(className) {
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
      let classValue = e.target.attributes.class.value;
      classValue = classValue.slice(0, classValue.indexOf("exercise") - 1);

      const rowContent = document.querySelectorAll(`.${classValue}`);
      for (let col of rowContent) {
        col.remove();
      }
    });
  }
}

function navSelected() {
  const url = document.URL;

  if (url.includes("upper")) {
    const upperNav = document.querySelector("#upper");
    upperNav.style.backgroundColor = "rgb(233, 233, 237)";
  } else if (url.includes("lower")) {
    const upperNav = document.querySelector("#lower");
    upperNav.style.backgroundColor = "rgb(233, 233, 237)";
  } else {
    const upperNav = document.querySelector("#core");
    upperNav.style.backgroundColor = "rgb(233, 233, 237)";
  }
}
