let token = '5456842713:AAHe5I3B88RZUFHimSRs1Hagw9A8GzNPKNQ';
let userID = '-1001743825462';
let input = document.getElementById('input');
let btn = document.getElementById('btn');
















var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}






















// function sendData() {
//   let userEmail = input.value;

//   let sendOrder = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${userID}&text=
// 	Новая заявка%0A
// Почта: ${userEmail}%0A
// `;


//   var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

//   var xhr = new XHR();
  
//   // (2) запрос на другой домен :)
//   xhr.open('GET', sendOrder, true);
  
//   xhr.onload = function() {
//   }
  
//   xhr.onerror = function() {
//   }
  
//   xhr.send();

// }

// btn.addEventListener('click', function() {
  
//     sendData();
    
// })



