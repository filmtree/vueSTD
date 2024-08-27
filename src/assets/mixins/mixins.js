function applyEllipsis(element, lines) {
  const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
  const maxHeight = lineHeight * lines;

  if (element.scrollHeight > maxHeight) {
      while (element.scrollHeight > maxHeight) {
          const text = element.innerText;
          element.innerText = text.slice(0, -1);
      }
      element.innerText += '...';
  }
}

// 사용 예
const myElement = document.querySelector('.multiline-ellipsis');
applyEllipsis(myElement, 3);
