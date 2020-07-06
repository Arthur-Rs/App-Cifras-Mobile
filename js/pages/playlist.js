/*
 *@Author: Arthur Reis <arthurreis074@gmail.com>
 *@Version: 1.0
 *@Revision: 02/07/2020
 */

const id = location.search.replace("?", "");

const selectPlaylist = (id) => {
  visibleSearch();
  const { name, musicsId } = playlist[id];

  clearList();
  addTitleInDOM(name);
  musicsId.forEach((musicid) => {
    music = musics.filter((music) => music.id === musicid)[0];
    const functionName = `deleteMusicInPlaylist(${id}, ${musicid})`;
    addMusicInDOM(music, "delete", functionName);
  });
};

selectPlaylist(id);
