const projectsButton = document.getElementById('btn-projects');
const contentButton = document.getElementById('btn-content');

// const settingsButton = document.getElementById('btn-settings');



//------------------------------------------------------------------------------

projectsButton.addEventListener('click', function (event) {
    hideAllSections();
    document.getElementById('projects-section').classList.add('is-shown');
});

contentButton.addEventListener('click', function (event) {
    hideAllSections();
    document.getElementById('content-section').classList.add('is-shown');
});

// settingsButton.addEventListener('click', function (event) {
//     hideAllSections();
//     document.getElementById('settings-section').classList.add('is-shown');
// });

activateDefaultSection();

//------------------------------------------------------------------------------

function hideAllSections () {
  const sections = document.querySelectorAll('.section.is-shown')
  Array.prototype.forEach.call(sections, function (section) {
    section.classList.remove('is-shown');
  });
};

//------------------------------------------------------------------------------ 

function activateDefaultSection () {
  projectsButton.click();
}



// 80 //////////////////////////////////////////////////////////////////////////

