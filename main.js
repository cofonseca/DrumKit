window.addEventListener('keydown', function(event) {

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return; // This will just stop the function
    
    audio.currentTime = 0; // Resets the play time of the audio allowing you to play over and over
    audio.play();

    key.classList.add('active');

    function removeTransition(x){
        this.classList.remove('active')
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));


});