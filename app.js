selectedNav();
removeContent(".exercise");
removeContent(".x-sm-exercise");

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
      let classValue = e.target.attributes.class.value;
      classValue = classValue.slice(0, classValue.indexOf(" "));

      const rowContent = document.querySelectorAll(`.${classValue}`);
      for (let col of rowContent) {
        col.remove();
      }
    });
  }
}

function selectedNav() {
  let url = document.URL;
  url = url.slice(-11);
  url = url.slice(url.indexOf("/") + 1, url.indexOf("."));
  const upperNav = document.querySelector(`#${url}`);
  upperNav.style.backgroundColor = "rgb(233, 233, 237)";
}
