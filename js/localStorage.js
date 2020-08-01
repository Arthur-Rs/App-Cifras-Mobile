/*
 * @Author: Arthur Reis <arthurreis074@gmail.com>
 * @Version: 1.1
 * @Revision: 10/07/2020
 */

// ==== Playlist ==== \\

const itemId = "playlist";
const defaultPlaylist = [{ name: "Sua playlist", musicsId: [] }];
let playlist = [];

// ==> LocalStorage Controller

const getPlaylist = () => {
  const data = JSON.parse(localStorage.getItem(itemId));
  playlist = data ? data : defaultPlaylist;
  setPlaylist();
};

const setPlaylist = () => {
  return localStorage.setItem(itemId, JSON.stringify(playlist));
};

// ==> Playlist controller

// ==> refresh

const refreshPlaylist = (id) => {
  closePopup();
  addPopupPlaylist(id);
};

const refreshMusicPlaylist = (id) => {
  selectPlaylist(id);
};

const createNewPlaylist = (id) => {
  const name = prompt("Escolha o nome da playlist: ");

  if (name === null) {
    return;
  }

  if (name.trim() === "") {
    alert("Você precisa escolher um nome para sua playlist");
    createNewPlaylist(id);
    return;
  }

  let nameExist = false;

  playlist.forEach((list) => {
    if (list.name === name) {
      nameExist = true;
      return;
    }
  });

  if (nameExist) {
    alert("Essa playlist já existe!");
    createNewPlaylist(id);
    return;
  }

  playlist.push({ name, musicsId: [] });
  try {
    drawPlaylist();
  } catch (error) {}
  try {
    refreshPlaylist(id);
  } catch (error) {}

  setPlaylist();
};

const addInPlaylist = (idlist, idmusic) => {
  const checkingIdMusic = playlist[idlist].musicsId.indexOf(idmusic) !== -1;
  if (checkingIdMusic) {
    alert("Essa música já esta na playlist!");
    return;
  }
  playlist[idlist].musicsId.push(idmusic);
  closePopup();
  setPlaylist();
};

const deleteMusicInPlaylist = (idlist, idmusic) => {
  const confirmDelete = confirm("Deseja realmente deletar essa música?");

  if (!confirmDelete) {
    return;
  }

  const indexMusic = playlist[idlist].musicsId.indexOf(idmusic);
  playlist[idlist].musicsId.splice(indexMusic, 1);
  refreshMusicPlaylist(idlist);
  setPlaylist();
};

const deletePlaylist = (idlist) => {
  const confirmDelete = confirm("Deseja realmente deletar essa playlist?");

  if (!confirmDelete) {
    return;
  }

  playlist.splice(idlist, 1);
  drawPlaylist();
  setPlaylist();
};

getPlaylist();
