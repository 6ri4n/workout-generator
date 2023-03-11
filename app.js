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

hoverRemove(".exercise");
hoverRemove(".x-sm-exercise");

function hoverRemove(className) {
  const contentList = document.querySelectorAll(className);

  for (let content of contentList) {
    const originalText = content.innerText;

    content.addEventListener("mouseover", (e) => {
      e.target.innerText = "❌";
    });

    content.addEventListener("mouseout", (e) => {
      e.target.innerText = originalText;
    });
  }
}
