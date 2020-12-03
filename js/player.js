player.playCurrent = function() {
    player.jPlayer("setMedia", playlist[currentTrack]).jPlayer("play");
  }
  
  player.playNext = function() {
   currentTrack = (currentTrack == (numTracks -1)) ? 0 : ++currentTrack;
   player.playCurrent();
  };
  
  player.playPrevious = function() {
     currentTrack = (currentTrack == 0) ? numTracks - 1 : --currentTrack;
     player.playCurrent();
  };

  $('.player-next').click(function() {
    player.playNext();
 });
 
 $('.player-prev').click(function() {
   player.playPrevious();
 });