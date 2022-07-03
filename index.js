
for(var i=0; i < (document.querySelectorAll("button").length); i++){

  document.querySelectorAll("button")[i].addEventListener("click", function(){

     makeSound(this.innerHTML);
     buttonAnimation(this.innerHTML);

  });

}
document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(anykey){

  if( anykey === "w" ){
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
  } else if( anykey ===  "a" ){
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
  }
  if( anykey === "s" ){
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
  }
  if( anykey === "d" ){
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
  }
  if( anykey === "j" ){
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
  }
  if( anykey === "k" ){
    var crash = new Audio("sounds/snare.mp3");
    crash.play();
  }
  if( anykey === "l" ){
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
  }
}

function buttonAnimation(buttonKey){

    var activeButton = document.querySelector("." + buttonKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove( "pressed" );} , 100 );


}
