

function refreshPage(){
    window.location.reload();
}

var randomnumber = Math.floor(Math.random() * 2) + 1;
var randomimg = "img" + randomnumber + ".png";
var randomdice = "images/" + randomimg;
window.onload = function ()
{
  var image1 = document.getElementById("coin");
  image1.setAttribute("src", randomdice);
  if (randomnumber==1)
  {
    document.querySelector("h3").innerHTML="Head";
  }
  else{
      document.querySelector("h3").innerHTML="Tail";
  }

}
