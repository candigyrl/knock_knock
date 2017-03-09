
//Knock Knock JS Code

//hide parts of the joke to reveal later

document.getElementById("joke-two").classList.add("hide");
document.getElementById("button2").classList.add("hide");
document.getElementById("joke-three").classList.add("hide");
document.getElementById("button3").classList.add("hide");

//show second part of joke when button 1 is clicked

document.getElementById("button1").addEventListener("click", function() {
  document.getElementById("joke-two").classList.add("show");
  document.getElementById("button2").classList.add("show");
});

//show third part of joke when button 2 is clicked

document.getElementById("button2").addEventListener("click", function() {
  document.getElementById("joke-three").classList.add("show");
  document.getElementById("button3").classList.add("show");
});

//start the Knock Knock joke over again
document.getElementById("button3").addEventListener("click", function() {
  document.getElementById("joke-two").classList.remove("show");
  document.getElementById("button2").classList.remove("show");
  document.getElementById("joke-three").classList.remove("show");
  document.getElementById("button3").classList.remove("show");

});
