const questions = document.querySelectorAll('.FAQcard');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.querySelector('.answer');
    answer.classList.toggle('show');
  });
});
const questions = document.querySelectorAll('#FAQcard h5');
questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('show');
  });
});
