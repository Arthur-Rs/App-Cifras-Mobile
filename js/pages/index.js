/*
 *@Author: Arthur Reis <arthurreis074@gmail.com>
 *@Version: 1.1
 *@Revision: 02/07/2020
 */

const drawTableByCategory = (category) => {
  visibleReturn();

  clearList();
  const musicsFilter = getSortByCategory(category);

  addTitleInDOM(category);
  musicsFilter.forEach((music, index) => {
    addMusicInDOM(music);
  });
};

const drawTable = () => {
  invisibleReturn();

  clearList();
  categories.forEach((category) => {
    addCategoryInDOM(category);
  });
};

addCommandInReturn('drawTable()');
drawTable();
