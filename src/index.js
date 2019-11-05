import 'babel-polyfill';
import './styles/main.css';
import getTodos from './js/fetchJSON';

getTodos()
  .then(data => printToScreen(data))
  .catch(err => console.log(err));

function printToScreen(todos) {
  for (let todo of todos) {
    const p = document.createElement('p');
    p.textContent = todo.title;
    document.querySelector('.text-container').appendChild(p);
  }
}