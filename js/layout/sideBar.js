const sideBarHTML = `
<nav id="sidebar">
    <div id="dismiss" onclick="closeSideBar()">
        <img src="images/arrow-left-solid.svg" width="30px" height="30px">
    </div>
    <div class="sidebar-header">
        <img src="images/logo_cifras.png">
    </div>
    <ul class="list-unstyled components"> 
      <li>
        <a href="#"><img src="images/home.png" width="18px" height="18px"> Home</a>
        <a href="#"><img src="images/playlist.png" width="18px" height="18px"> Minhas Playlists (Breve)</a>
        <a target="blank_" href="${addNewMusic}"><img src="images/upload.png" width="18px" height="18px"> Enviar Cifra (Online)</a>
        <a href="${whatsappGroup_1}" target="blank_"><img src="images/whats.png" width="18px" height="18px"> Grupo do Whatsapp</a>
        <a href="${whatsappGroup_2}" target="blank_"><img src="images/whats.png" width="18px" height="18px"> Grupo do Whatsapp 2</a>
        <a href="${telegramGroup}" target="blank_"><img src="images/telegram.png" width="18px" height="18px"> Grupo do Telegram</a>
        <a href=${web} target="blank_"><img src="images/web.png" width="18px" height="18px"> Versão Web do APP</a>
        <a href="abault.html"><img src="images/sobre.png" width="18px" height="18px"> Sobre</a>
        <a href="version.html"><img src="images/versao.png" width="18px" height="18px"> Versão</a>
      </li>
    </ul>
    <ul class="list-unstyled CTAs">
      <li>
        <p>Contamos com sua doação para manter o Aplicativo! <a href="${donate}" target="_blank"><img src="images/btn_doar.png"></a></p>
      </li>
      <li>
        <a href="https://play.google.com/store/apps/details?id=com.mliellweb.cifrascatolicasoffline" target="_blank" class="download"><img src="imagens/estrela_dourada.png" width="18px" height="18px"> Avalie o Aplicativo na Google Play</a>
      </li>
    </ul>
</nav>
`;
