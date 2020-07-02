/*
 *@Author: Arthur Reis <arthurreis074@gmail.com>
 *@Version: 1.0
 *@Revision: 02/07/2020
 */

const drawPlaylist = () => {
  clearList();
  addTitleInDOM("Playlist");
  playlist.forEach((list, id) => {
    const data = { text: list.name, id, fun: `selectPlaylist(${id})` };
    const btnData = {
      id,
      img: "delete",
      fun: `deletePlaylist(${id})`,
      _class: "icon",
    };
    addGenericInDOM(data, btnData);
  });

  addCommandInReturn("goBack()");
};

const selectPlaylist = (id) => {
  const { name, musicsId } = playlist[id];

  clearList();
  addTitleInDOM(name);
  musicsId.forEach((musicid) => {
    const functionName = `deleteMusicInPlaylist(${id}, ${musicid})`;
    addMusicInDOM(musics[musicid], "delete", functionName);
  });
  addCommandInReturn("drawPlaylist()");
};

drawPlaylist();
