const untouchableAstronaut = document.getElementById('astronaut');
const offset = 1;

untouchableAstronaut.addEventListener('click', () => {
    alert('NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!');
});

document.addEventListener('mousemove', (e) => {
    console.log(e);
    const x = e.pageX;
    const y = e.pageY;
    const buttonBox = untouchableAstronaut.getBoundingClientRect();
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);
    const horizontalOffset = buttonBox.width / 2 + offset;
    const verticalOffset = buttonBox.height / 2 + offset;
    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
      setButtonPosition(
        buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
        buttonBox.y + verticalOffset / verticalDistanceFrom * 10
      )
    }
  })
  
  function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect();
    const buttonBox = untouchableAstronaut.getBoundingClientRect();
  
    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
      left = windowBox.right - buttonBox.width - offset;;
    }
    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
      left = windowBox.left + offset;;
    }
    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
      top = windowBox.bottom - buttonBox.height - offset;;
    }
    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
      top = windowBox.top + offset;;
    }
  
    untouchableAstronaut.style.left = `${left}px`;
    untouchableAstronaut.style.top = `${top}px`;
  }
  
  function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2;
  }


