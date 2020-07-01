/* ============================================== *\
 * @Title: Utils                                  *
 * @Author: Arthur Reis <arthurreis074@gmail.com> *
 * @Version: 1.0                                  *
 * @Revision: 30/06/2020                          *
 * ============================================== */

alphabet.forEach((letter) => {
  const sortMusics = getSortByLetter(letter);
  if (sortMusics.length !== 0) {
    addLetterTitleInDOM(letter);
    sortMusics.forEach((music) => {
      addMusicInDOM(music);
    });
  }
});
