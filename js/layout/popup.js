const popupPlaylistHTML = (params) => `

  <div class='header'>
  <span>Playlists</span>
    <div>
      <img onclick="createNewPlaylist(${params.idmusic})" class="popup-icon" src="images/create.svg" alt="create"/>
      <img onclick="closePopup()" class="popup-icon" src="images/close.svg" alt="close"/>
    </div>
  </div>
`;
