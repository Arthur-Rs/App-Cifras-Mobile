/*
 *@Author: Arthur Reis <arthurreis074@gmail.com>
 *@Version: 1.1
 *@Revision: 30/07/2020
 */

// ==> Get music id
const query = location.search.replace('?', '');
let activeSize = 6;
const sizes = [
  '08px',
  '10px',
  '08px',
  '10px',
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '22px',
  '24px',
  '26px',
  '28px',
  '30px',
  '32px',
  '34px',
  '36px',
  '38px',
];

// ==== Tone Controller ==== \\
const lessHalfTone = () => {
  const ciphers = document.querySelectorAll('b');

  ciphers.forEach((cipher) => {
    cipher.innerHTML = mapMenosMeioTom[cipher.innerHTML];
  });
};

const plusHalfTone = () => {
  const ciphers = document.querySelectorAll('b');

  ciphers.forEach((cipher) => {
    cipher.innerHTML = mapMaisMeioTom[cipher.innerHTML];
  });
};

// ==== Font Controller ==== \\

const plusSizeFont = () => {
  if (activeSize < sizes.length) {
    activeSize++;
    updateSizeFont();
  }
};

const minusSizeFont = () => {
  if (activeSize > 0) {
    activeSize--;
    updateSizeFont();
  }
};

const updateSizeFont = () => {
  const texts = document.querySelectorAll('pre');
  texts.forEach((text) => {
    text.style.fontSize = sizes[activeSize];
  });
};

// ! ==== Other author ==== ! \\

const getMusic = () => {
  new musicControl({
    //Aqui eu carrego a classe que criei no documento "musicControl.js" ;D
    title_H4: document.getElementById('titulo_Musica'), //SUA TAG TITULO
    link_A: document.getElementById('link_music'), //SUA TAG LINK
    content_Pre: document.getElementById('texto_Musica'), //SUA TAG ONDE FICARA A LETRA ! XD
    music_List: musics['musicas'], //AQUI ESTA O SEU JSON SENDO MANDADO PARA TRATAMENTO
    music_Id: query, //AQUI ESTÁ O ID DA MUSICA! o/
  });
};

addCommandInReturn('goBack()');
getMusic();
