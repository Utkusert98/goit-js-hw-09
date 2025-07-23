document.addEventListener('DOMContentLoaded', () => {
  const STATE_NAME = 'feedback-form-state';

  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  if (!feedbackForm || !emailInput || !messageInput) return;

  // 1. Sayfa yüklendiğinde localStorage'dan verileri yükle
  const savedState = localStorage.getItem(STATE_NAME);
  if (savedState) {
    const parsedState = JSON.parse(savedState);
    emailInput.value = parsedState.email || '';
    messageInput.value = parsedState.message || '';
  }

  // 2. Input değişikliklerinde localStorage'ı güncelle
  const saveState = () => {
    const currentState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(STATE_NAME, JSON.stringify(currentState));
  };

  emailInput.addEventListener('input', saveState);
  messageInput.addEventListener('input', saveState);

  // 3. Form submit işlemi
  feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!email || !message) {
      alert('⚠️ Boş form gönderilemez ⚠️');
      return;
    }

    console.log({ email, message });

    localStorage.removeItem(STATE_NAME);
    feedbackForm.reset();
  });
});
