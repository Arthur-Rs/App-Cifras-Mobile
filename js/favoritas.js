
	
	function adicionar_favoritos(id){													//a função que irá fazer a gravação das musicas para favoritas
	
	var estrela_dourada = "estrela_dourada.png";										//o caminho do icone para adicinar as favoritas
	
	var tipo_estrela_ativa = document.getElementById(id).src;							//identifica se a musica esta clicada para favoritas ou não
	var id_musica = "m_" + id;															//pega o proximo valor do array retornando o nome da musica id
	var link_musica = document.getElementById(id_musica).href;							//retorna o link da musica
	var nome_musica = document.getElementById(id_musica).innerHTML;						//retorna o nome da musica
	var conteudo_gravar = "##" + id_musica + "&&" + link_musica + "&&" + nome_musica;	//monta o conteudo a ser gravado Musica + Link, será trabalhado na pagina favoritas
	
	var favoritas_anteriores = localStorage.getItem('favoritas');	//resgata todos os dados já armazenados anteriormente
	var conteudo_final = favoritas_anteriores + conteudo_gravar;	//junta os dados anteriores mais a nova musica selecionada
	var conteudo_limpo = conteudo_final.replace("null", "");		//limpa qualquer valor nulo

	localStorage.setItem("favoritas", conteudo_limpo);
	
	var quebra_favoritas_anteriores = favoritas_anteriores.split("##");	//separa os dados de cada musica
	var elemento_buscado = id_musica + "&&" + link_musica + "&&" + nome_musica;	//cria um filtro da musica para pesquisa
		
	if(quebra_favoritas_anteriores.indexOf(elemento_buscado) != -1) {  //verifica se a musica já está adicionada a favoritos se estiver exibe alerta e limpla qualquer conteudo duplicado
	alert("A musica " + nome_musica + "\nja existe em Favoritas!");
	} 
	else {  
	alert("A musica " + nome_musica + "\nfoi adicionada as Favoritas com sucesso!");
	} 
				
	}	
	



