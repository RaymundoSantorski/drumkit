let keys = document.querySelectorAll('div.key');

let removePlaying = (e) => {
    if(e.propertyName !== 'border-bottom-color') return;
    e.target.classList.remove('playing');
}

document.addEventListener('keydown', (e) => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
});

keys.forEach(key => {
    key.addEventListener('transitionend', removePlaying);
});
