const adviceTitle = document.querySelector('.advice__title');
const adviceText = document.querySelector('.advice__text');
const adviceButton = document.querySelector('.advice__button');

const urlApiAdvice = "https://api.adviceslip.com/advice";

async function fetchApiAdvice() {
   try {
      const response = await fetch(urlApiAdvice);
      const data = await response.json();
      console.log(data.slip);
      adviceTitle.innerText = `Advice #${data.slip.id}`;
      adviceText.innerText = `“${data.slip.advice}”`
   } catch (error) {
      console.log(error);
   }   
}

adviceButton.addEventListener('click', e => {
   fetchApiAdvice();
})