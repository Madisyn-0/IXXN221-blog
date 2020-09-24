function changeMode() {
  const screen = document.querySelectorAll(".screen");
  const july = document.querySelectorAll(".julyM");
  const month = document.querySelectorAll(".month");
  const blogEntry = document.querySelectorAll(".blog-entry");
  const blogEntry2 = document.querySelectorAll(".blog-entry2");
  
if(document.getElementById("july").getAttribute("class") === "julyM"){
  makeDark(screen);
  makeDark(july);
  makeDark(month);
  makeDark(blogEntry);
  makeDark(blogEntry2);

  } else {
  makeLight(screen);
  makeLight(july);
  makeLight(month);
  makeLight(blogEntry);
  makeLight(blogEntry2);
  }
}

function makeDark(element){
  element.forEach(function(el) {
      el.classList.remove("julyM");
      el.classList.add("all");
  });
}

function makeLight(element){
  element.forEach(function(el) {
      el.classList.remove("all");
      el.classList.add("julyM");
  });
}