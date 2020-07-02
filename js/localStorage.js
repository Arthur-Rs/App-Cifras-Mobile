/*@ ============================================== *\
 * @Author: Arthur Reis <arthurreis074@gmail.com>  *
 * @Version: 1.0                                   *
 * @Revision: 02/07/2020                           *
\* =============================================  **/

// ==== Playlist ==== \\

const itemId = 'playlist';
const defaultPlaylist = [{ name: 'Sua playlist', musicsId: [] }];
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
  const name = prompt('Escolha o nome da playlist: ');
  playlist.push({ name, musicsId: [] });
  refreshPlaylist(id);
  setPlaylist();
};

const addInPlaylist = (idlist, idmusic) => {
  const checkingIdMusic = playlist[idlist].musicsId.indexOf(idmusic) !== -1;
  if (checkingIdMusic) {
    alert('Essa música já esta na playlist!');
    return;
  }
  playlist[idlist].musicsId.push(idmusic);
  closePopup();
  setPlaylist();
};

const deleteMusicInPlaylist = (idlist, idmusic) => {
  const indexMusic = playlist[idlist].musicsId.indexOf(idmusic);
  playlist[idlist].musicsId.splice(indexMusic, 1);
  refreshMusicPlaylist(idlist);
  setPlaylist();
};

const deletePlaylist = (idlist) => {
  playlist.splice(idlist, 1);
  drawPlaylist();
  setPlaylist();
};

getPlaylist();
