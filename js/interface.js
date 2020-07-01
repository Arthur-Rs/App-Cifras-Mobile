/* ============================================== *\
 * @Title: DOM Music                              *
 * @Author: Arthur Reis <arthurreis074@gmail.com> *
 * @Version: 1.0                                  *
 * @Revision: 30/06/2020                          *
 * ============================================== */

//  ===== DOM Manipulation ===== \\

const list = document.querySelector("#list");

// ==> Clear

const clearList = () => {
  list.innerHTML = "";
};

// ==> Music
const addMusicInDOM = (music) => {
  const newMusic = document.createElement("li");
  newMusic.classList.add("list-group-item");

  const linkMusic = document.createElement("a");
  linkMusic.setAttribute("href", `./music.html?${music.id}`);
  linkMusic.innerHTML = music.name;

  newMusic.appendChild(linkMusic);
  list.append(newMusic);
};

// ==> Letter Title
const addLetterTitleInDOM = (letter) => {
  const newLetter = document.createElement("li");
  newLetter.classList.add("list-group-item");
  newLetter.classList.add("active");
  newLetter.innerHTML = letter;

  list.append(newLetter);
};

// ==> Title
const addTitileInDOM = (text) => {
  const newLetter = document.createElement("li");
  newLetter.classList.add("list-group-item");
  newLetter.classList.add("active");
  newLetter.innerHTML = text;

  list.appendChild(newLetter);
};

// ==> Category
const addCategoryInDOM = (categories, fun) => {
  categories.forEach((category, index) => {
    const newLetter = document.createElement("li");

    newLetter.classList.add("list-group-item");
    index === 0 && newLetter.classList.add("active");

    newLetter.innerHTML = category;

    newLetter.setAttribute("onclick", `drawTableByCategory("${category}")`);

    list.appendChild(newLetter);
  });
};
