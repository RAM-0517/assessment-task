const boxes = document.querySelectorAll('.box');
const radios = document.querySelectorAll('input[type="radio"]');
const totalDisplay = document.getElementById('total');

// Add change event to all radio buttons
radios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    boxes.forEach((box, i) => {
      if (i === index) {
        box.classList.add('active');
        const price = parseFloat(box.getAttribute('data-price')).toFixed(2);
        totalDisplay.textContent = `Total: $${price} USD`;
      } else {
        box.classList.remove('active');
      }
    });
  });
});

// Set initial total on page load for default checked radio
document.addEventListener('DOMContentLoaded', () => {
  boxes.forEach((box) => {
    if (box.querySelector('input[type="radio"]').checked) {
      box.classList.add('active');
      const price = parseFloat(box.getAttribute('data-price')).toFixed(2);
      totalDisplay.textContent = `Total: $${price} USD`;
    } else {
      box.classList.remove('active');
    }
  });
});