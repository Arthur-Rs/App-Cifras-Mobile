/* ============================================== *\
 * @Title: Utils                                  *
 * @Author: Arthur Reis <arthurreis074@gmail.com> *
 * @Version: 1.0                                  *
 * @Revision: 30/06/2020                          *
 * ============================================== */
const query = location.search.replace("?", "");

const lessHalfTone = () => {
  const cifras = document.getElementsByTagName("b");

  for (i = 0; i < cifras.length; i++) {
    if (!mapMenosMeioTom[cifras[i].innerHTML]) {
      console.log("Cifra no mapeada");
      continue;
    }

    cifras[i].innerHTML = mapMenosMeioTom[cifras[i].innerHTML];
  }
};

const plusHalfTone = () => {
  const cifras = document.getElementsByTagName("b");

  for (i = 0; i < cifras.length; i++) {
    if (!mapMaisMeioTom[cifras[i].innerHTML]) {
      console.log("Cifra no mapeada", cifras[i].innerHTML);
      continue;
    }

    cifras[i].innerHTML = mapMaisMeioTom[cifras[i].innerHTML];
  }
};

// ! ==== Other author ==== ! \\
const init = () => {
  new musicControl({
    //Aqui eu carrego a classe que criei no documento "musicControl.js" ;D
    title_H4: document.getElementById("titulo_Musica"), //SUA TAG TITULO
    link_A: document.getElementById("link_music"), //SUA TAG LINK
    content_Pre: document.getElementById("texto_Musica"), //SUA TAG ONDE FICARA A LETRA ! XD
    music_List: musics["musicas"], //AQUI ESTA O SEU JSON SENDO MANDADO PARA TRATAMENTO
    music_Id: query, //AQUI ESTÁ O ID DA MUSICA! o/
  });
};

init();
