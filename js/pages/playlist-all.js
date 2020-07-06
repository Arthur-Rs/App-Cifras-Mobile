const drawPlaylist = () => {
  clearList();

  data = {
    text: "Playlist",
    _class: "active",
  };

  btnData = {
    img: "create",
    _class: "icon",
    fun: "createNewPlaylist()",
  };

  addGenericInDOM(data, btnData);

  debugger;
  playlist.forEach((list, id) => {
    debugger;
    const data = {
      text: list.name,
      id,
      link: `playlist.html?${id}`,
    };
    const btnData = {
      id,
      img: "delete",
      fun: `deletePlaylist(${id})`,
      _class: "icon",
    };
    addGenericInDOM(data, btnData);
  });
};

drawPlaylist();
