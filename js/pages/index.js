/*
 *@Author: Arthur Reis <arthurreis074@gmail.com>
 *@Version: 1.1
 *@Revision: 02/07/2020
 */

const drawTableByCategory = (category) => {
  visibleReturn();

  clearList();
  const musicsFilter = getSortByCategory(category);

  addGenericInDOM(data);
  addTitleInDOM(category);
  musicsFilter.forEach((music, index) => {
    addMusicInDOM(music);
  });
};

const drawTable = () => {
  invisibleReturn();

  clearList();

  let data = {
    text: "Todos",
    link: `./all.html`,
    classList: "active",
  };
  addGenericInDOM(data);

  data = {
    text: "playlist",
    link: `./playlist.html`,
    classList: "active",
  };
  addGenericInDOM(data);
  addGenericInDOM({ text: " ⠀⠀⠀⠀⠀⠀⠀⠀ " });

  categories.forEach((category) => {
    addCategoryInDOM(category);
  });
};

addCommandInReturn("drawTable()");
drawTable();
