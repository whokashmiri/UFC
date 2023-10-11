
var countDownDate = new Date("Oct 21, 2023 15:37:25").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo").innerHTML = days + ":" + hours + ":"
  + minutes + ":" + seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



let ml = 100;

let slider = setInterval(()=>{
    // console.log(-ml)
    document.getElementById('corousal').style.marginLeft = -ml +"%";
    document.getElementById('corousal').style.transition = ".8s";

   
    if (ml==400) 
    {
        setTimeout(()=>{
            ml=100;
            document.getElementById('corousal').style.transition = "0s";
            document.getElementById('corousal').style.marginLeft = 0;
       
        },800)
      
        
    }
        ml+=100;

},3000)
