const sortButton = document.querySelector("#sortBtn");

const drawAllMusics = () => {
  sortButton.innerHTML = "Ordenar por últimas adicionadas";
  sortButton.setAttribute("onclick", "drawAllMusicsByRecents()");
  clearList();
  alphabet.forEach((letter) => {
    const sortMusics = getSortByAlpahabet(getSortByLetter(letter));

    if (sortMusics.length !== 0) {
      addLetterTitleInDOM(letter.toUpperCase());
      sortMusics.forEach((music) => {
        addMusicInDOM(music, null, null, true);
      });
    }
  });
};

const drawAllMusicsByRecents = () => {
  clearList();
  sortButton.innerHTML = "Voltar por ordem afabética";
  sortButton.setAttribute("onclick", "drawAllMusics()");
  const sortMusics = musics
    .sort((musica, musicb) => musica.id - musicb.id)
    .reverse();

  sortMusics.forEach((music) => {
    addMusicInDOM(music, null, null, true);
  });
};

drawAllMusics();
