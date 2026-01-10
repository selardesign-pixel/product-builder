
document.addEventListener('DOMContentLoaded', () => {
  const lottoNumbersContainer = document.querySelector('.lotto-numbers');
  const generateBtn = document.querySelector('.generate-btn');
  const themeToggle = document.querySelector('.theme-toggle');
  const themeStorageKey = 'lotto-theme';

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

  function getPreferredTheme() {
    const storedTheme = localStorage.getItem(themeStorageKey);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.textContent = isDark ? '화이트 모드' : '다크 모드';
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme);
  }

  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  themeToggle.addEventListener('click', toggleTheme);

  // 페이지 로드 시 초기 번호 생성
  const initialNumbers = generateLottoNumbers();
  displayNumbers(initialNumbers);
});
