/*
 *@Author: Arthur Reis <arthurreis074@gmail.com>
 *@Version: 1.1
 *@Revision: 02/07/2020
 */

const drawTable = () => {
  clearList();

  categories.forEach((category, id) => {
    addCategoryInDOM(category, id);
  });
};

invisibleSearch();
drawTable();
