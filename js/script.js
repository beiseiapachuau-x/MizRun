let list_index = 1;
let slide_flag = 0;

function load(){}

function navActive(signal){
  let nav = document.getElementsByClassName("nav-items");
  for(var i = 0; i < nav.length; i++){
    nav[i].style.color = "#000000";
  }
  nav[signal].style.color = "#3c3cda";
}

function plusSlides(n) {

  if(slide_flag === 1){
    slideMP(list_index += n);
  }else if(slide_flag === 2){
    slideMS(list_index += n)
  }else if(slide_flag === 3){
    slideJOB(list_index += n)
  }else if(slide_flag === 4){
    slideCLARI(list_index += n)
  }else if(slide_flag === 5){
    slideInst(list_index += n)
  }

}

function open_closeSlide(onOff, flag){
  if(onOff === "on"){

    document.getElementById("slide-container").style.display = "block";
  }else{

    document.getElementById("slide-container").style.display = "none";
    document.getElementById("mp-id").style.display = "none";
    document.getElementById("ms-id").style.display = "none";
    document.getElementById("jo-id").style.display = "none";
    document.getElementById("clari-id").style.display = "none";
    document.getElementById("inst-id").style.display = "none";

    list_index = 1;
  }

  switch(flag){

    case "mp-id": 
      document.getElementById("mp-id").style.display = "block";
       slide_flag = 1;
      slideMP(list_index); 
      break;
    case "ms-id": 
      document.getElementById("ms-id").style.display = "block";
       slide_flag = 2;
      slideMS(list_index);
      break;
    case "jo-id": 
      document.getElementById("jo-id").style.display = "block";
      slide_flag = 3;
      slideJOB(list_index);
      break;
    case "clari-id": 
      document.getElementById("clari-id").style.display = "block";
      slide_flag = 4;
      slideCLARI(list_index);
      break;
    case "inst-id": 
      document.getElementById("inst-id").style.display = "block";
      slide_flag = 5;
      slideInst(list_index);
      break;
  }
}

function slideMP(index){

  console.log(index);

  let slide = document.getElementsByClassName("mp-slide");

  if(index > slide.length){
    list_index = 1;
  }
  if(index < 1){
    list_index = slide.length
  }
  for(var i = 0; i < slide.length; i++){
    slide[i].style.display = "none";  
  }
  slide[list_index - 1].style.display = "block";
}

function slideMS(index){

  console.log(index);

  let slide = document.getElementsByClassName("ms-slide");

  if(index > slide.length){
    list_index = 1;
  }
  if(index < 1){
    list_index = slide.length
  }
  for(var i = 0; i < slide.length; i++){
    slide[i].style.display = "none";  
  }
  slide[list_index - 1].style.display = "block";
}
function slideJOB(index){

  console.log(index);

  let slide = document.getElementsByClassName("jo-slide");

  if(index > slide.length){
    list_index = 1;
  }
  if(index < 1){
    list_index = slide.length
  }
  for(var i = 0; i < slide.length; i++){
    slide[i].style.display = "none";  
  }
  slide[list_index - 1].style.display = "block";
}
function slideCLARI(index){

  console.log(index);

  let slide = document.getElementsByClassName("clari-slide");

  if(index > slide.length){
    list_index = 1;
  }
  if(index < 1){
    list_index = slide.length
  }
  for(var i = 0; i < slide.length; i++){
    slide[i].style.display = "none";  
  }
  slide[list_index - 1].style.display = "block";
}
function slideInst(index){

  console.log(index);

  let slide = document.getElementsByClassName("inst-slide");

  if(index > slide.length){
    list_index = 1;
  }
  if(index < 1){
    list_index = slide.length
  }
  for(var i = 0; i < slide.length; i++){
    slide[i].style.display = "none";  
  }
  slide[list_index - 1].style.display = "block";
}

function load(){
  window.location.href = "#home";
}
