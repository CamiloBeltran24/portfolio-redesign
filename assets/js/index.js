(() => {
  'use strict';

  let currentScroll = window.scrollY;

  //HTML REFERENCES
  let header = document.querySelector('.header');
  let animateTitle = document.querySelector('.animate-title')

  window.onscroll = function(){
    let scrollY = window.scrollY;
    if(scrollY > 0) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }

  const createAnimateTitle = (message = 'Frontend Developer') => {
    let customHTML = "";

    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      customHTML += `
        <span class="animate-letter letter ${ ( letter === ' ' ) ? 'space' : ''}">${letter}</span>`;
    }

    return customHTML;
  }

  const startTitleAnimation = () => {
    let letters = document.querySelectorAll('.animate-title .animate-letter')
    let delay = 0;
    for (const letter of letters) {
        delay += 0.1;
        letter.style.animationDelay = `${delay}s`
      }
  }

  animateTitle.innerHTML = createAnimateTitle('Frontend Developer')

  startTitleAnimation()

})()