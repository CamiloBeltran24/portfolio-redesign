import { projects } from './data/projects.mjs';

(() => {
  'use strict';
  //HTML REFERENCES
  let header = document.querySelector('.header');
  let animateTitle = document.querySelector('.animate-title');
  const filterOptions = document.querySelectorAll(
    '.projects__filter--container .filter-option',
  );

  window.onscroll = function () {
    let scrollY = window.scrollY;
    if (scrollY > 0) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  };

  const createAnimateTitle = (message = 'Frontend Developer') => {
    let customHTML = '';

    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      customHTML += `
        <span class="animate-letter letter ${
          letter === ' ' ? 'space' : ''
        }">${letter}</span>`;
    }

    return customHTML;
  };

  const startTitleAnimation = () => {
    animateTitle.innerHTML = createAnimateTitle('Portfolio');
    let letters = document.querySelectorAll('.animate-title .animate-letter');
    let delay = 0;
    for (const letter of letters) {
      delay += 0.1;
      letter.style.animationDelay = `${delay}s`;
    }
  };

  const createProjectBox = ({
    name,
    repo,
    image,
    site = '',
    description = '',
  }) => {
    const project = `
      <div class='projects__block--item'>
        <figure class="image">
          <img src="${image}" alt="image of ${name} project" />
        </figure>
        <aside class='info-block'>
          <h3>${name}</h3>
          <div class="text">
            <p>${description}</p>
            <div class="buttons">
              <a target="_blank" href="${site}" class="btn btn-project"></a>
              <a target="_blank" href="${repo}" class="btn btn-repo"></a>
            </div>
          </div>
        </aside>
      </div>
    `;

    return project;
  };

  const renderProjects = () => {
    const projectsContainer = document.querySelector('.projects__block');
    projects.forEach((project) => {
      let myProjectHTML = createProjectBox(project);
      projectsContainer.innerHTML += myProjectHTML;
    });
  };

  const toggleClass = (option, MyOptions) => {
    for (const item of MyOptions) {
      item.classList.contains('active')
        ? item.classList.remove('active')
        : null;
    }
    option.classList.toggle('active');
  };

  const hiddeSections = () => {
    const form = document.querySelector('.getInTouch');
    const projects = document.querySelector('.projects__block');

    let sections = [form, projects];

    for (const section of sections) {
      section.classList.add('hidden');
      section.classList.remove('active');
    }

    console.log(sections);
  };

  const showSection = (MyValue) => {
    let element = '';

    hiddeSections();

    switch (MyValue) {
      case 'contact':
        element = document.querySelector('.getInTouch');
        break;

      default:
        element = document.querySelector('.projects__block');
        let listOption = document.querySelector("[data-value='projects']");
        listOption.classList.add('active');
        break;
    }

    element.classList.remove('hidden');
  };

  const filterFunctionality = ([...MyOptions]) => {
    MyOptions.forEach((option) => {
      option.addEventListener('click', () => {
        toggleClass(option, filterOptions);
        showSection(option.dataset.value);
      });
    });
  };

  const startApp = () => {
    startTitleAnimation();
    renderProjects();
    showSection('');
    filterFunctionality(filterOptions);
  };

  startApp();
})();
