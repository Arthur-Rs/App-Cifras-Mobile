/*
 *@Author: unknown
 *@ModifieBy: Arthur Reis <arthurreis074@gmail.com>
 *@Version: 2.0
 *@Revision: 30/07/2020
 */

window.onDomReady = function dgDomReady(fn) {
  if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", fn, false);
};

class musicControl {
  constructor(data) {
    this.id = data.music_Id;
    this.music = musics.filter((music) => music.id === Number(this.id))[0];
    this.data = data;

    this.addMusicInDOM();
  }

  addMusicInDOM() {
    this.title = document.createElement("title");
    this.link = document.createElement("a");
    this.content = document.createElement("pre");

    this.title = this.data.title_H4;
    this.title.innerHTML = this.music.name;

    this.link = this.data.link_A;
    this.link.innerHTML = this.music.link;

    this.content = this.data.content_Pre;
    this.content.innerHTML = this.music.conteudo;
  }
}
