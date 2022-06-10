  //alert("Press Refresh button to start");

  function randomNumGen(){
  return Math.floor(Math.random() * 6) + 1;
  // console.log(randomNumber1);
  }

  var randomNumber1 = randomNumGen();
  var randomNumber2 = randomNumGen();
  console.log(randomNumber1);
  console.log(randomNumber2);
  //document.getElementByClassName("img1").src = "images\dice2.png";
    //document.querySelector(".img1").setAttribute("src", "images\dice2.png
var randomDiceImage1 = "dice"+randomNumber1+".png";
console.log(randomDiceImage1);
var randomDiceSource1 = "images/"+randomDiceImage1;
console.log(randomDiceSource1);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceSource1);
var randomDiceSource2 = "images/"+"dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🏆Player 1 WON !";
}
else if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").innerHTML="DRAW 😂";

}
else
{
  document.querySelector("h1").innerHTML="🏆Player 2 WON !"
}
