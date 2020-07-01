/* ============================================== *\
 * @Title: Utils                                  *
 * @Author: Arthur Reis <arthurreis074@gmail.com> *
 * @Version: 1.0                                  *
 * @Revision: 30/06/2020                          *
 * ============================================== */
const returnBtn = document.querySelector("#return");

const drawTableByCategory = (category) => {
  returnBtn.style.display = null;
  clearList();
  const musicsFilter = getSortByCategory(category);

  addTitileInDOM(category);
  musicsFilter.forEach((music, index) => {
    addMusicInDOM(music);
  });
};

const drawTable = () => {
  returnBtn.style.display = "none";
  clearList();
  categories.forEach((category) => {
    addCategoryInDOM(category);
  });
};

returnBtn.addEventListener("click", () => drawTable());
drawTable();
