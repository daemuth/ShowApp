const ipc = require('electron').ipcRenderer;

const homeButton = document.getElementById('btn-home');
// const searchButton = document.getElementById('btn-search');
const userButton = document.getElementById('btn-user');
const contentButton = document.getElementById('btn-content');
const previewButton = document.getElementById('btn-preview');




//------------------------------------------------------------------------------

homeButton.addEventListener('click', function (event) {
    hideAllSections();
    document.getElementById('home-section').classList.add('is-shown');
    ipc.send('home');
});

userButton.addEventListener('click', function (event) {
    hideAllSections();
    document.getElementById('users-section').classList.add('is-shown');
    ipc.send('user');
});

contentButton.addEventListener('click', function (event) {
    hideAllSections();
    document.getElementById('content-section').classList.add('is-shown');
    ipc.send('list');
});

// searchButton.addEventListener('click', function (event) {
//     ipc.send('search');
// });

previewButton.addEventListener('click', function (event) {
    ipc.send('preview');
});


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
  homeButton.click();
}



// 80 //////////////////////////////////////////////////////////////////////////

