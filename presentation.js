function instructionsOnOpen() {
  alert(`
  Here are some instructions:
1. Welcome to Lydia's fun CV. She made it so she didn't have to talk about herself for 5-10mins.
2. This is a puzzle for you to complete.
3. There is a prize.
4. Don't cheat and look at the code. It won't be as fun.
5. Hopefully you will have fun!`);
}

instructionsOnOpen();

const answerArray = ['73', '2', '154', 'd', 'cricklewoodlane'];

document.addEventListener('DOMContentLoaded', function () {
  const inputValues = [];
  const inputBoxes = document.querySelectorAll('.inputBox');
  const outputText = document.getElementById('outputText');
  const newLink = document.getElementById('newLink');
  const secretMessage = document.getElementsByClassName('secret-message')[0];
  const languages = document.getElementsByClassName('cv-article languages')[0];

  inputBoxes.forEach(function (inputBox, index) {
    inputBox.addEventListener('input', function () {
      inputValues[index] = inputBox.value;
    });

    inputBox.addEventListener('blur', function () {
      if (inputValues[index] !== answerArray[index]) {
        inputBox.style.border = '2px solid red';
        inputBox.value = '';
      } else if (inputValues[index] === '') {
        inputBox.style.border = '2px solid blue';
        inputBox.value = '';
      } else {
        inputBox.style.border = '2px solid green';
      }

      let linkString = inputValues.join('')

      outputText.textContent = linkString;

      newLink.href = 'https://www.bit.ly/' + encodeURIComponent(outputText.textContent);

      if (linkString === '732154dcricklewoodlane') {
        const olElement = languages.querySelector('ol');
        olElement.style.display = 'none';
        secretMessage.style.display = 'block'
      }
    });
  });
});
