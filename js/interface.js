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
const searchBar = document.querySelector("#search");

// ==> Clear

const clearList = () => {
  list.innerHTML = "";
};

// ==> Music
const addMusicInDOM = (
  music,
  btnIcon = null,
  btnFun = null,
  category = false
) => {
  const newMusic = document.createElement("li");
  newMusic.classList.add("list-group-item");

  const box = document.createElement("div");

  const linkMusic = document.createElement("a");
  linkMusic.setAttribute("href", `./music.html?${music.id}`);
  linkMusic.setAttribute("id", music.id);
  linkMusic.innerHTML = music.name;

  const categoryMusic = document.createElement("span");
  categoryMusic.innerHTML = music.category;

  const iconName = btnIcon ? btnIcon : "add";
  const iconFunction = btnFun ? btnFun : `addPopupPlaylist(${music.id})`;

  const icon = document.createElement("img");
  icon.classList.add("icon");
  icon.setAttribute("src", `images/${iconName}.svg`);
  icon.setAttribute("alt", "add");
  icon.setAttribute("onclick", iconFunction);

  if (category) {
    box.append(linkMusic);
    box.append(categoryMusic);
    newMusic.appendChild(box);
  } else {
    newMusic.appendChild(linkMusic);
  }

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

const addCategoryInDOM = (categories, id) => {
  categories.forEach((category, index) => {
    const address = `category.html?${id},${index}`;
    const item = document.createElement("li");

    item.classList.add("list-group-item");
    index === 0 && item.classList.add("active");

    const link = document.createElement("a");
    index !== 0 && link.setAttribute("href", address);
    link.innerHTML = category;

    item.append(link);
    list.appendChild(item);
  });
};

// ==> Generic

const addGenericInDOM = (data = genericData, button = genericButton) => {
  const generic = document.createElement("li");

  generic.classList.add("list-group-item");

  generic.classList.add(data._class);

  generic.id = data.id;

  const text = document.createElement("a");
  text.setAttribute("onclick", data.fun ? data.fun : "");
  text.setAttribute("href", data.link ? data.link : "#");
  text.innerHTML = data.text;
  generic.append(text);

  if (button.img) {
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
