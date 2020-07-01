/* ============================================== *\
 * @Title: Utils                                  *
 * @Author: Arthur Reis <arthurreis074@gmail.com> *
 * @Version: 1.0                                  *
 * @Revision: 30/06/2020                          *
 * ============================================== */

const getSortByLetter = (letter) => {
  return musics.filter((music) => music.name[0] === letter);
};

const getSortByCategory = (category) => {
  return musics.filter((music) => music.category === category);
};

const clearCiphers = () => {
  const ciphers = document.querySelectorAll("b");
  ciphers.forEach((cipher) => {
    cipher.remove();
  });
};
