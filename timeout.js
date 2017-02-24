// var color = document.getElementById("firstHeading"),
// left = 0,
// timer;
// timer = setInterval(function){
//   color.style.left = (left += 10) + "px";
//   if (left == 400){
//     clearInterval(timer)
//   }
// }, 16);



function changeColor() {
  setTimeout(function(){
    document.getElementById("firstHeading").style.background = "blue";
    setTimeout(function(){
      document.getElementById("firstHeading").style.background = "green";
      setTimeout(function(){
        document.getElementById("firstHeading").style.background = "yellow";
        setTimeout(function(){
          document.getElementById("firstHeading").style.background = "orange";
        }, 1000);  
      }, 1000);
    }, 1000);  
  }, 1000);
}






// function firtsTask(){
//   console.log("First taks done!");
// }

// function SecondTask(){
//   console.log("Second task done!");
// }

// function thirdTask(){
//   console.log("Third task done!");
// }

// setTimeout(firtsTask, 2000);
// setTimeout(SecondTask, 4000);
// setTimeout(thirdTask, 6000);



