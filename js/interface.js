/*
 *@Author: Arthur Reis <arthurreis074@gmail.com>
 *@Version: 1.1
 *@Revision: 02/07/2020
 */

// ==> definitions

const genericData = {
  id: null,
  tag: "li",
  classList: null,
  text: null,
  fun: null,
};

const genericButton = {
  id: null,
  tag: "img",
  img: null,
  _class: "icon",
  fun: null,
};

//  ===== DOM Manipulation ===== \\

const list = document.querySelector("#list");

// ==> Clear

const clearList = () => {
  list.innerHTML = "";
};

// ==> Music
const addMusicInDOM = (music, btnIcon = null, btnFun = null) => {
  GLOBAL_MUSIC_ID_SELECTED = music.id;

  const newMusic = document.createElement("li");
  newMusic.classList.add("list-group-item");

  const linkMusic = document.createElement("a");
  linkMusic.setAttribute("href", `./music.html?${music.id}`);
  linkMusic.innerHTML = music.name;

  const iconName = btnIcon ? btnIcon : "add";
  const iconFunction = btnFun ? btnFun : `addPopupPlaylist(${music.id})`;

  const icon = document.createElement("img");
  icon.classList.add("icon");
  icon.setAttribute("src", `images/${iconName}.svg`);
  icon.setAttribute("alt", "add");
  icon.setAttribute("onclick", iconFunction);

  newMusic.appendChild(linkMusic);
  newMusic.appendChild(icon);
  list.appendChild(newMusic);
};

// ==> Letter Title
const addLetterTitleInDOM = (letter) => {
  const newLetter = document.createElement("li");
  newLetter.classList.add("list-group-item");
  newLetter.classList.add("active");
  newLetter.innerHTML = letter;

  list.appendChild(newLetter);
};

// ==> Title
const addTitleInDOM = (text) => {
  const title = document.createElement("li");
  title.classList.add("list-group-item");
  title.classList.add("active");
  title.innerHTML = text;

  list.appendChild(title);
};

// ==> Category
const addCategoryInDOM = (categories) => {
  categories.forEach((category, index) => {
    const fun = `drawTableByCategory("${category}")`;
    const newLetter = document.createElement("li");

    newLetter.classList.add("list-group-item");
    index === 0 && newLetter.classList.add("active");
    index !== 0 && newLetter.setAttribute("onclick", fun);

    newLetter.innerHTML = category;

    list.appendChild(newLetter);
  });
};

// ==>

const addGenericInDOM = (data = genericData, button = genericButton) => {
  const generic = document.createElement("li");

  generic.classList.add("list-group-item");

  generic.classList.add(data.classList);

  generic.id = data.id;

  const text = document.createElement("span");
  text.setAttribute("onclick", data.fun);
  text.innerHTML = data.text;
  generic.append(text);

  if (button.img) {
    debugger;
    const btn = document.createElement("img");
    btn.classList.add(button._class);
    btn.setAttribute("onclick", button.fun);
    btn.id = button.id;
    btn.innerHTML = button.text;
    btn.setAttribute("src", `images/${button.img}.svg`);
    btn.setAttribute("alt", button.img);
    generic.append(btn);
  }

  list.appendChild(generic);
};

// ==== Popup ==== \\

// ==> playlist

const addPopupPlaylist = (idmusic) => {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const popupBox = document.createElement("div");
  popupBox.classList.add("popup-box");

  popupBox.innerHTML = popupPlaylistHTML({ idmusic });

  const popupList = document.createElement("ul");
  popupList.classList.add("list-group");
  popupList.classList.add("popup-list");
  playlist.forEach((list, idlist) => {
    const line = document.createElement("li");
    line.innerText = list.name;
    line.classList.add("list-group-item");
    line.classList.add("popup-line");
    line.setAttribute("onclick", `addInPlaylist(${idlist}, ${idmusic})`);
    popupList.appendChild(line);
  });

  popupBox.appendChild(popupList);
  popup.appendChild(popupBox);
  document.body.appendChild(popup);
};
