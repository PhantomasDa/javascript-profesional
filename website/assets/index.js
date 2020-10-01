
    const video = document.querySelector('video');
    const button = document.querySelector('button');
    
    function MediaPlayer(config){
      this.media = config.el
    }

    MediaPlayer.prototype.play = function(){
      this.media.play();
    }
    MediaPlayer.prototype.pause = function(){
      this.media.pause();
    }
    const player = new MediaPlayer({el: video});
    // reto de la clase pausar y activar
    //onclikc me permite ver cuando se active el boton y con eso ejecuto una funcion que vea si el boton es presionado y esta pausado retorne play y si esta en play retorne pause
    button.onclick = () => { 
      if(video.paused){
        player.play();
      }else if (video.played){
        player.pause();
      }
    };