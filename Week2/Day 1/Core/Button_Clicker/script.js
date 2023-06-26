// function like(id) {
//     console.log("like", document.getElementById(di).innerText);
//     var like = parseInt(document.getElementById(di).innerText);
//     like ++;
//     console.log("like", like);
//     document.getElementById(id).innerText = like;
// }
function like(e) {
    alert("ninja was liked")
 }
 function onLogin(e) {
   if (e.innerText == 'Login') {
     e.innerText = 'Logout'
   } else {
     e.innerText = 'Login'
   }
 
 }
 
 // function onLogout(id) {
 //     document.getElementById(id).innerText = 'Login'
 // }
 
 function remove(e) {
     e.remove();
     console.log("Element Removed ");
 
 }