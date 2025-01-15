function init() {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'texto';
  input.placeholder = 'Digite um texto';

  const botaoAdicionar = document.createElement('button');
  botaoAdicionar.textContent = 'Adicionar';
  botaoAdicionar.id = 'botaoAdicionar';
  botaoAdicionar.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto) {
      let lista = document.querySelector('ul');
      if (!lista) {
        lista = document.createElement('ul');
        document.body.appendChild(lista);
      }
      const items = Array.from(lista.children).map(item => item.textContent);
      if (!items.includes(texto)) {
        const item = document.createElement('li');
        item.textContent = texto;
        lista.appendChild(item);
      } else {
        alert('Texto já existe na lista!');
      }
    } else {
      alert('Por favor, insira um texto antes de adicionar.');
    }
  });

  const botaoExcluir = document.createElement('button');
  botaoExcluir.textContent = 'Excluir';
  botaoExcluir.id = 'botaoExcluir';
  botaoExcluir.disabled = true;

  botaoExcluir.addEventListener('click', () => {
    const lista = document.querySelector('ul');
    if (lista && lista.lastChild) {
      lista.removeChild(lista.lastChild);
    }
    botaoExcluir.disabled = !lista || lista.children.length === 0;
  });

  const observer = new MutationObserver(() => {
    const lista = document.querySelector('ul');
    botaoExcluir.disabled = !lista || lista.children.length === 0;
  });

  observer.observe(document.body, { childList: true, subtree: true });

  document.body.appendChild(input);
  document.body.appendChild(botaoAdicionar);
  document.body.appendChild(botaoExcluir);
}

window.onload = init;