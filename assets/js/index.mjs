import { projects } from './data/projects.mjs';

(() => {
  'use strict';
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
    animateTitle.innerHTML = createAnimateTitle('Frontend Developer')
    let letters = document.querySelectorAll('.animate-title .animate-letter')
    let delay = 0;
    for (const letter of letters) {
        delay += 0.1;
        letter.style.animationDelay = `${delay}s`
      }
  }

  const createProjectBox = ({ name , repo, image, site = "", description = "" }) => {

    const project = `
      <div class='projects__block--item'>
        <figure class="image">
          <img src="${ image }" alt="image of ${ name } project" />
        </figure>
        <aside class='info-block'>
          <h3>${ name }</h3>
          <div class="text">
            <p>${ description }</p>
            <div class="buttons">
              <a target="_blank" href="${ site }" class="btn btn-project"></a>
              <a target="_blank" href="${ repo }" class="btn btn-repo"></a>
            </div>
          </div>
        </aside>
      </div>
    `

    return project;
  }

  const renderProjects = () => {
    const projectsContainer = document.querySelector('.projects__block');
    projects.forEach( ( project ) => {
      let myProjectHTML = createProjectBox(project);
      projectsContainer.innerHTML += myProjectHTML;
    })

  }

  const startApp = () => {
    startTitleAnimation();
    renderProjects();
  }

  startApp()

})()