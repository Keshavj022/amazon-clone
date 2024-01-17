// for search bar
function mdown(obj){
  obj.style.border = "3px solid orange";
  obj.style.borderRadius = "6px";
  obj.style.height = "45px";
}
//for back to top
let backToTop = document.querySelector(".a-backtotop");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//for address modal
var modal = document.getElementById("a-address-modal");
var btn = document.getElementById("a-addressbox")
btn.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// for language
var labels = document.getElementsByClassName("label");
const label_pressed = e =>{
  var setname = document.getElementById("a-language-shown");
  setname.innerText = e.target.id;
} 
for (let label of labels) {
  label.addEventListener("click", label_pressed);
}

// for pincode
function m2down(obj){
  obj.style.boxShadow = "3px 3px #A6F6FF, -3px -3px #A6F6FF";
  obj.style.borderRadius = "4px";
}
function m3down(obj){
  obj.style.boxShadow = "3px 3px #A6F6FF, -3px -3px #A6F6FF";
  obj.style.borderRadius = "4px";
}