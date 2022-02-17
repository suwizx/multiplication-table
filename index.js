let numberInput = document.getElementById('form');
let runButton = document.getElementById('search');
let output = document.getElementById('answer');

function printMultiply() {
  let number = Number(numberInput.value);
  let outputHtml = '';
  for (let i = 1; i <= 12; i++) {
    outputHtml += '<p>';
    outputHtml += number + ' x ' + i + ' = ' + (number*i);
    outputHtml += '</p>';
  }
  output.innerHTML = outputHtml;
}

runButton.addEventListener('click', printMultiply);

console.log('เพิ่มข้อมูลตำแหน่งแรก')