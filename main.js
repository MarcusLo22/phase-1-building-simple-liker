// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('errorModal');
errorModal.classList.add('hidden');

const emptyHeart = document.getElementById('Heart');

emptyHeart.addEventListener('click', () => {
  mimicServerCall()
    .then(response => {
      // Handle the successful response from the server
      console.log(response);
    })
    .catch(() => {
      // Handle the error response from the server
      // Show an error message to the user
      showErrorModal();
      
    });
});

function mimicServerCall() {
  // Simulate a server request using a timeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful response from the server
      // resolve('Server request successful');
      // Simulate an error response from the server
      reject('Server request failed');
    }, 1000); // Simulate a delay of 1 second
  });
}

function showErrorModal(errorMessage) {
  const errorModal = document.getElementById('errorModal');
  const errorMessageElement = document.getElementById('errorMessage');
  errorMessageElement.textContent = errorMessage;
  errorModal.classList.remove('hidden');
}
const modal = document.querySelector('.modal');
setTimeout(function() {
  modal.classList.add('hidden');
}, 3000);
fetch('https://api.example.com/data')
  .then(response => {
    if (response.ok) {
      // Success status code (2xx range)
      return response.json(); // process the response data as JSON
    } else {
      throw new Error('Request failed');
    }
  })
  .then(data => {
    // Update the UI or perform any other actions with the response data
    console.log(data);
    // ...
  })
  .catch(error => {
    // Handle any errors that occurred during the request or processing
    console.error(error);
  });
  
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
