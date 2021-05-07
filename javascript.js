function openCard(btn, div){
  btn.classList.remove('collapsed');
  btn.setAttribute('aria-expanded', 'true');
  div.classList.add('show');
}
