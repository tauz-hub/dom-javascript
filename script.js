function init() {
  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.id = 'textInput';
  textInput.placeholder = 'Enter a text';

  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  addButton.id = 'addButton';
  addButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text) {
      let list = document.querySelector('ul');
      if (!list) {
        list = document.createElement('ul');
        document.body.appendChild(list);
      }
      const items = Array.from(list.children).map(item => item.textContent);
      if (!items.includes(text)) {
        const listItem = document.createElement('li');
        listItem.textContent = text;
        list.appendChild(listItem);
      } else {
        alert('Text already exists in the list!');
      }
    } else {
      alert('Please enter a text before adding.');
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.id = 'deleteButton';
  deleteButton.disabled = true;

  deleteButton.addEventListener('click', () => {
    const list = document.querySelector('ul');
    if (list && list.lastChild) {
      list.removeChild(list.lastChild);
    }
    deleteButton.disabled = !list || list.children.length === 0;
  });

  const observer = new MutationObserver(() => {
    const list = document.querySelector('ul');
    deleteButton.disabled = !list || list.children.length === 0;
  });

  observer.observe(document.body, { childList: true, subtree: true });

  document.body.appendChild(textInput);
  document.body.appendChild(addButton);
  document.body.appendChild(deleteButton);
}

window.onload = init;
