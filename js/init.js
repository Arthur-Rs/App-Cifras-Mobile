/*
 *@Author: Arthur Reis <arthurreis074@gmail.com>
 *@Version: 1.0
 *@Revision: 30/06/2020
 */

const body = document.body;

const sideBar = document.createElement("div");
sideBar.classList.add("wrapper");
sideBar.classList.add("close");
sideBar.id = "sidebar";
sideBar.innerHTML = sideBarHTML;

const header = document.createElement("div");
header.classList.add("content");
header.id = "header";
header.innerHTML = headerHTML;

body.append(header);
body.append(sideBar);

const sidebar = document.querySelector("#sidebar");

const openSideBar = () => {
  sidebar.classList.replace("close", "open");
};
const closeSideBar = () => {
  sidebar.classList.replace("open", "close");
};
