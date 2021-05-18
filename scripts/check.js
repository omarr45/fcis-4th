let links = document.getElementsByClassName('addCheck');

for (let i = 0; i < links.length; i++) {
  links.item(i).insertAdjacentHTML(
    'afterend',
    `<label class="custom-check">
      <input type="checkbox" class="chk">
      <span class="checkmark"></span>
    </label>`
  );
}

let checkBoxes = document.getElementsByClassName('chk');

for (let i = 0; i < checkBoxes.length; i++) {
  const current = checkBoxes.item(i);
  // Check if saved, load it
  if (JSON.parse(localStorage.getItem(document.title + links.item(i).text))) {
    current.checked = JSON.parse(
      localStorage.getItem(document.title + links.item(i).text)
    );
  }
  // else save it
  else {
    localStorage.setItem(document.title + links.item(i).text, current?.checked);
  }
}

for (let i = 0; i < checkBoxes.length; i++) {
  const current = checkBoxes.item(i);
  current?.addEventListener('click', () => {
    localStorage.setItem(document.title + links.item(i).text, current?.checked);
  });
}
