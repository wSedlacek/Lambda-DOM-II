document.querySelector('html').style.overflowX = 'hidden';

const blocks = document.querySelector('.blocks');
Array.from(blocks.children).forEach(block => {
  block.style.transition = 'all 3s ease-in';

  const top = () => blocks.prepend(block);
  const rocket = () => (block.style.transform = 'translateX(10000%)');
  const reset = () => (block.style.transform = '');

  block.addEventListener('mousedown', e => rocket());
  block.addEventListener('mouseup', e => reset());
  block.addEventListener('mouseleave', e => reset());
  block.addEventListener('click', e => top());
});
