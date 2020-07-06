const category = location.search.replace("?", "").split(",");
addCommandInReturn("goBack()");

const drawTableByCategory = (category) => {
  visibleSearch();
  visibleReturn();

  clearList();

  const [idlist, idmusic] = category;

  const categoryName = categories[idlist][idmusic];

  const musicsFilter = getSortByAlpahabet(getSortByCategory(categoryName));

  addTitleInDOM(categoryName);
  musicsFilter.forEach((music, index) => {
    addMusicInDOM(music);
  });
};

drawTableByCategory(category);
