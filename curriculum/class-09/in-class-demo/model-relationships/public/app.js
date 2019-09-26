
const list = document.getElementById('cat-list');

const template = cat => /*html*/`<li>${cat.name}</li>`;

fetch('http://localhost:3000/api/cats')
  .then(r => r.json())
  .then(cats => {
    list.innerHTML = cats
      .map(cat => template(cat))
      .join('');
  });