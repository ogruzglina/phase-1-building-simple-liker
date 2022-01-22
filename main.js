// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartBtns = document.querySelectorAll('span.like-glyph');

for (const heartBtn of heartBtns) {
  heartBtn.addEventListener("click", likeClickHandler);
}

function likeClickHandler (e) {
  const heartBtn = e.target;
    mimicServerCall()
      .then(function(){
        if ( heartBtn.textContent === EMPTY_HEART) {
          heartBtn.textContent = FULL_HEART;
          heartBtn.className = "activated-heart";
        } else {
          heartBtn.textContent = EMPTY_HEART;
          heartBtn.className = "";
        }
      })
      .catch(error => {
          const errorDiv = document.getElementById('modal');
          errorDiv.textContent = error;
          errorDiv.removeAttribute('class');
          setTimeout(() =>  
            errorDiv.setAttribute('class', 'hidden'), 3000);
      });
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
