

window.addEventListener('load', function(){
  let btn = document.getElementById("showText");
  btn.addEventListener("click", showOrHideText);

  function showOrHideText(){
    let paragraphs = document.getElementsByTagName("p");
    let myP = paragraphs[0];

    //So menuvanje na klasi
    if(myP.classList.contains("hide")){
      myP.classList.add("show");
      myP.classList.remove("hide");
    } else {
      myP.classList.add("hide");
      myP.classList.remove("show");
    }

    //So menuvanje na CSS

   /*  if(myP.style.display == "none"){
      myP.style.display = "block";
    } else {
      myP.style.display = "none";
    }
 */

  }
}, false);