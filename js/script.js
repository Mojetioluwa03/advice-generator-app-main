const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceButton = document.getElementById('new-advice');

const fetchAdvice = async () => {
  try {
    adviceText.textContent = 'Loading advice...';
    adviceId.textContent = '---';

    const response = await fetch('https://api.adviceslip.com/advice?timestamp=' + Date.now(), {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const slip = data?.slip;

    if (!slip?.advice || !slip?.id) {
      throw new Error('Unexpected API response');
    }

    adviceId.textContent = slip.id;
    adviceText.textContent = slip.advice;
  } catch (error) {
    adviceId.textContent = 'Oops';
    adviceText.textContent = 'Unable to load advice right now. Please try again.';
    console.error('Advice fetch failed:', error);
  }
};

diceButton.addEventListener('click', fetchAdvice);
window.addEventListener('load', fetchAdvice);
