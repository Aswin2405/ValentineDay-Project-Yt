document.addEventListener("DOMContentLoaded",function(){
    startCountdown()
})

function showLove(){
    pulseHeart();
    createConfetti();
    alert("I Love you! Happy Valentine's day")
}

function pulseHeart(){
  const heart = document.getElementById("heart");
  heart.style.transform = "scale(1.2)";
  setTimeout(()=>{
    heart.style.transform = "scale(1)"
  },300)
}

function createConfetti(){
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  document.body.appendChild(confetti);

  setTimeout(()=>{
    confetti.remove();
  },3000)
}

function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  const valentinesDay = new Date("2024-02-14T16:00:00").getTime();

  function updateCountdown(){
    const now = new Date().getTime();
    const distance = valentinesDay  - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

    if(distance < 0){
        countdownElement.innerHTML = "Happy Valentine's Day!"
    }
  }

  setInterval(updateCountdown,1000)
}

function changeBackgroundColor() {
 const bgColorPicker = document.getElementById("bgColorPicker");
 document.body.style.backgroundColor = bgColorPicker.value;
}

