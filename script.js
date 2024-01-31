var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItems.style.maxHeight == '0px') {
    MenuItems.style.maxHeight = '200px';
  } else {
    MenuItems.style.maxHeight = '0px';
  }
}




/// JavaScript to move the cursor element
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// JavaScript to change cursor on links and buttons
const linksAndButtons = document.querySelectorAll('a, button');

linksAndButtons.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.custom-cursor');
        cursor.src = 'src/cursor_hover.png'; // Change to the path of your hover image
    });

    element.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.custom-cursor');
        cursor.src = 'src/cursor.png'; // Change to the path of your normal image
    });
});








//////////////3d///////////////////
let isMouseOver = false;

  function handleMouseMove(event) {
    isMouseOver = true;

    const container = document.querySelector('.threed');
    const img = document.querySelector('.offer-img');

    const containerRect = container.getBoundingClientRect();

    // Calculate the position of the cursor within the container
    const x = (event.clientX - containerRect.left) / containerRect.width;
    const y = (event.clientY - containerRect.top) / containerRect.height;

    // Adjust rotation angles based on cursor position
    const rotateY = (x - 0.5) * 3; // Adjust the multiplier for sensitivity
    const rotateX = (0.5 - y) * 3;

    // Adjust the rotation along the Z-axis (top, bottom, right, left)
    const rotateZ = Math.atan2(y - 0.5, x - 0.5) * (30 / Math.PI);

    // Apply the rotation
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
  }

  function handleMouseLeave() {
    if (!isMouseOver) return;

    const img = document.querySelector('.offer-img');
    
    // Reset the transform to its original position
    img.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    isMouseOver = false;
  }









  document.addEventListener('DOMContentLoaded', function() {
    let loadMoreBtn = document.querySelector('.more');
    let currentItem = 4;
  
    loadMoreBtn.onclick = () => {
      let boxes = [...document.querySelectorAll('.small-container .col-4')];
  
      for (let i = currentItem; i < currentItem + 5 && i < boxes.length; i++) {
        boxes[i].style.display = 'block';
      }
  
      currentItem += 4;
  
      if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
        // Adding the following line to hide the jQuery element with class 'more'
        document.querySelector('.more').style.display = 'none';
      }

      
    };
  });
  