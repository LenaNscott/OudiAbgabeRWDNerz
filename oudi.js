"use strict";


document.getElementById("videoKugel").load();
aenderungVideoSrc();

window.addEventListener('resize', aenderungVideoSrc);

function aenderungVideoSrc(){
    var source = document.getElementById('source');
    var video = document.getElementById('videoKugel');
    if(window.innerWidth >= 679 && source.src.slice(source.src.length-22) == "Medien/Kugel_Video.mp4"){
      source.src = "Medien/videoWeisseKugel.mp4";
    }
    else if(window.innerWidth < 679 && source.src.slice(source.src.length-22) == "n/videoWeisseKugel.mp4"){
      source.src = "Medien/Kugel_Video.mp4";
    }    
    video.load();
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#uebersichtButton')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


window.addEventListener('scroll', function() {
  //console.log(window.pageYOffset);
  let bild = this.document.getElementById("infos");
  let text = this.document.getElementById("vorstellung");
  let wechselBild = this.document.getElementById("wechselAnimation");
  if(window.pageYOffset > 300 && window.pageYOffset < 2000){
    //console.log( window.matchMedia("(min-width:679px)"));
    //console.log(window.matchMedia);
    if(window.matchMedia("(max-width:768px)").matches){
    bild.style.height = 350 - (window.pageYOffset) * 0.2 + "px";  
    text.style.marginTop = -350 - (window.pageYOffset) * 0.2 + "px";
    wechselBild.style.marginTop = - (window.pageYOffset) * 0.14 + "px";
    }
    else if(window.matchMedia("(min-width:679px) and (max-width:1023px)").matches){
      bild.style.height = 400 - (window.pageYOffset) * 0.2 + "px";  
      text.style.marginTop = -500 - (window.pageYOffset) * 0.2 + "px";
      wechselBild.style.marginTop = - (window.pageYOffset) * 0.14 + "px";
      }
    else if(window.matchMedia("(min-width:1024px)").matches){
      bild.style.height = 400 - (window.pageYOffset) * 0.2 + "px";  
      text.style.marginTop = -400 - (window.pageYOffset) * 0.2 + "px";
      wechselBild.style.marginTop = - (window.pageYOffset) * 0.14 + "px";
      }  
  }  
});


function myScriptBild(){
    console.log(window.screenTop);
    let text = document.getElementById("infos");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    console.log(text.scrollTop);
    }
  }

let i = 1;

let numberOne = document.getElementById("erstesBildText");
numberOne.addEventListener('click', function(){
    i = 1;
    anzeige(i);
});

let numberTwo = document.getElementById("zweiterBildText");
numberTwo.addEventListener('click', function(){
    i = 2;
    anzeige(i);
});

let numberThree = document.getElementById("dritterBildText");
numberThree.addEventListener('click', function(){
    i = 3;
    anzeige(i);
});

let click = document.getElementById("pfeileGedreht");
click.addEventListener('click', function(){
  if(i == 1){
    i = 3
  }
  else{
    i--;
  }
  //console.log(i);
  anzeige(i);
});

let click2 = document.getElementById("pfeile");
click2.addEventListener('click', function(){
  if(i == 3){
    i = 1
  }
  else{
    i++;
  }
  //console.log(i);
  anzeige(i);
});

function hrOpacity(){
  document.getElementById("hr1").style.opacity = 0;
  document.getElementById("hr2").style.opacity = 0;
  document.getElementById("hr3").style.opacity = 0;
  document.getElementById("number1").style.fontWeight = "lighter";
  document.getElementById("number2").style.fontWeight = "lighter";
  document.getElementById("number3").style.fontWeight = "lighter";
};

function anzeige(int){
  hrOpacity();
  if(int == 1){
    document.getElementById("hr1").style.opacity = 1;
    document.getElementById("number1").style.fontWeight = "bold";
    let bild = document.getElementById("bilderWechseln");
    bild.src = "Medien/RoteKuhelSonnenuntergang.jpeg";
    document.getElementById("textDiv").innerText = "Mit dynamischer Linienf??hrung stellt der Oudi K8 Rounding seinen rundlichen Charakter unter Beweis.";
    document.getElementById("h2Ueberschrift").innerText = "Exterieur";
  }
  else if (int == 2){
    document.getElementById("hr2").style.opacity = 1;
    document.getElementById("number2").style.fontWeight = "bold";
    let bild = document.getElementById("bilderWechseln");
    bild.src = "Medien/roteKuglTurmH.jpg";
    document.getElementById("textDiv").innerText = "Der Innenraum des Oudi K8 Rounding ist hochwertig gestaltet.";
    document.getElementById("h2Ueberschrift").innerText = "Interieur";
  }
  else if(int == 3){
    document.getElementById("hr3").style.opacity = 1;
    document.getElementById("number3").style.fontWeight = "bold";
    let bild = document.getElementById("bilderWechseln");
    bild.src = "Medien/KugelSteinVertikal.jpeg";
    document.getElementById("textDiv").innerText = "Machen Sie mit dem Oudi K8 Rounding jeden Weg und jede Stra??e zu Ihrem Revier.";
    document.getElementById("h2Ueberschrift").innerText = "Rollerlebnis";
  }
};

let divPlayStop = document.getElementById("buttonStart");

document.getElementById('videoKugel').addEventListener('ended',myHandler,false);
  function myHandler(e) {
    document.getElementById("imgWiederholenPlay").src = "Medien/wiederholenButton.png";
    divPlayStop.style.opacity = 1;
  };

  

  function start(){
    let videoKugel = document.getElementById("videoKugel").play();
    divPlayStop.style.opacity = 0;
  };