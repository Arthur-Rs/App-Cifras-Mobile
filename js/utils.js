/*
 *@Author: Arthur Reis <arthurreis074@gmail.com>
 *@Version: 1.2
 *@Revision: 02/07/2020
 */

// ==> Sort
const getSortByLetter = (letter) => {
  return musics.filter((music) => treatedString(music.name[0]) === letter);
};

const getSortByCategory = (category) => {
  return musics.filter((music) => music.category === category);
};

const getSortByAlpahabet = (list) => {
  return list.sort((a, b) => {
    const nameA = treatedString(a.name);
    const nameB = treatedString(b.name);
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
    return 0;
  });
};
// ==> Clear
const clearCiphers = () => {
  const ciphers = document.querySelectorAll("b");
  ciphers.forEach((cipher) => {
    cipher.remove();
  });
};

// ==> History API

const goBack = () => {
  history.back();
};

// ==> headerButtons

const returnBtn = document.querySelector("#return");

const invisibleReturn = () => {
  returnBtn.style.display = "none";
};
const visibleReturn = () => {
  returnBtn.style.display = null;
};

const invisibleSearch = () => {
  searchBar.style.display = "none";
};
const visibleSearch = () => {
  searchBar.style.display = null;
};

const addCommandInReturn = (command = String) => {
  returnBtn.setAttribute("onclick", command);
};

const clearCommands = () => {
  playlistBtn.setAttribute("onclick", null);
  returnBtn.setAttribute("onclick", null);
};

const closePopup = () => {
  document.querySelector(".popup").remove();
};

// ==> Strings

const treatedString = (text = String) => {
  const parsed = text
    .normalize("NFD")
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
    .toLowerCase();
  return parsed;
};
