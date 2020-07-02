/*
 *@Author: Arthur Reis <arthurreis074@gmail.com>
 *@Version: 1.2
 *@Revision: 02/07/2020
 */

// ==> Sort
const getSortByLetter = (letter) => {
  return musics.filter((music) => music.name[0] === letter);
};

const getSortByCategory = (category) => {
  return musics.filter((music) => music.category === category);
};

// ==> Clear
const clearCiphers = () => {
  const ciphers = document.querySelectorAll('b');
  ciphers.forEach((cipher) => {
    cipher.remove();
  });
};

// ==> History API

const goBack = () => {
  history.back();
};

// ==> headerButtons

const returnBtn = document.querySelector('#return');

const invisibleReturn = () => {
  returnBtn.style.display = 'none';
};
const visibleReturn = () => {
  returnBtn.style.display = null;
};

const addCommandInReturn = (command = String) => {
  returnBtn.setAttribute('onclick', command);
};

const clearCommands = () => {
  playlistBtn.setAttribute('onclick', null);
  returnBtn.setAttribute('onclick', null);
};

const closePopup = () => {
  document.querySelector('.popup').remove();
};
