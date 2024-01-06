window.addEventListener('keydown', function (e) {
      const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`); 
      audio.currentTime = 0 ; 

      if (!audio) { return;}  
      audio.play(); 

      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);


      key.classList.add('playing'); 


     const keys = Array.from(document.querySelectorAll('.key')) ; 
     console.log(keys);

     keys.forEach(key => {
       key.addEventListener('transitionend', () => {
         key.classList.remove('playing'); 
       });
     });
    

}); 