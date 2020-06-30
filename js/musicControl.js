/* Dom Ready */
window.onDomReady = function dgDomReady(fn){
	if(document.addEventListener)	//W3C
		document.addEventListener("DOMContentLoaded", fn, false);
} // Evitar problemas caso a váriavel seja declarada no "head"


var musicControl = function(data) { // ----------------- Função principal
		var musics; // ----- Seu JSON
		var music;  // ----- Sua Musica
		var id; // --------- O ID que vou receber do GET
		musics = data["music_List"];
		id = data["music_Id"];
		
		
		for(i = 0; i < musics.length; i++) { // ------------------------ Percorre o seu JSON
			
			if (musics[i]["id"] == id) { // ------------------------------- Se o ID que peguei do GET for igual ao ID da musica que eu quero
				music = musics[i];
			}	
		}
		
		
		this.set(data["title_H4"],data["link_A"],data["content_Pre"], music); // ------- Faz as alterações na pagína ;D
}

musicControl.prototype = {
	
	titulo : document.createElement('title'),
	linkVideo : document.createElement('a'),
	conteudo : document.createElement('pre'),
	
	
	set: function(title, linkA, content, musica) { // ------------------------------------------- define os elementos DOM a serem preenchidos
			
			this.titulo = title;
			this.titulo.innerHTML = musica["name"];
			
			this.linkVideo = linkA;
			this.linkVideo.innerHTML = musica["link"];
			
			this.conteudo = content;
			this.conteudo.innerHTML = musica["conteudo"];
		
	},
  

};