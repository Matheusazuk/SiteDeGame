document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        document.getElementById("popUp").style.opacity="1";
        document.getElementById("popUp").style.visibility="visible";
    }, 2000);
  }  );

  document.querySelector(".close-button").addEventListener("click", function(){
  document.getElementById("popUp").style.opacity="0";
        document.getElementById("popUp").style.visibility="hidden";


    });