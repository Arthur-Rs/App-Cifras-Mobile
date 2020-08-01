const HandlerSearch = () => {
  const listMusics = document.querySelectorAll("#list li a");
  const treatedSearch = treatedString(searchBar.value);

  listMusics.forEach((music) => {
    const musicTitle = treatedString(music.innerText);
    if (musicTitle.indexOf(treatedSearch) === -1) {
      if (music.parentElement.tagName === "LI") {
        music.parentElement.style.display = "none";
        return;
      }
      music.parentElement.parentElement.style.display = "none";
    } else {
      if (music.parentElement.tagName === "LI") {
        music.parentElement.style.display = null;
        return;
      }
      music.parentElement.parentElement.style.display = null;
    }
  });

  if (treatedSearch !== "") {
    invisibleTitle();
  } else {
    visibleTitle();
  }
};

const invisibleTitle = () => {
  const titles = document.querySelectorAll("#list .active");
  titles.forEach((title) => {
    title.style.display = "none";
  });
};

const visibleTitle = () => {
  const titles = document.querySelectorAll("#list .active");
  titles.forEach((title) => {
    title.style.display = null;
  });
};
