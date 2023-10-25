const clickerButton = document.getElementById('clickerButton'); 
const clickCountDisplay = document.getElementById('clickCount'); 
let clickCount = 0; 
function updateClickCount() { 
  clickCountDisplay.textContent = clickCount; 
} 
clickerButton.addEventListener('click', () => {
  clickCount++; 
  updateClickCount(); 
});
