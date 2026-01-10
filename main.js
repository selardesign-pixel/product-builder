
document.addEventListener('DOMContentLoaded', () => {
  const lottoNumbersContainer = document.querySelector('.lotto-numbers');
  const generateBtn = document.querySelector('.generate-btn');

  function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  function displayNumbers(numbers) {
    lottoNumbersContainer.innerHTML = '';
    numbers.forEach(number => {
      const span = document.createElement('span');
      span.textContent = number;
      lottoNumbersContainer.appendChild(span);
    });
  }

  generateBtn.addEventListener('click', () => {
    const newNumbers = generateLottoNumbers();
    displayNumbers(newNumbers);
  });

  // 페이지 로드 시 초기 번호 생성
  const initialNumbers = generateLottoNumbers();
  displayNumbers(initialNumbers);
});
