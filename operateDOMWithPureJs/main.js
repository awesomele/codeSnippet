function getFavs() {
  let favList = [];
  // querySelectorAll for getting all the input element
  // don't use querySelector
  const inputs = document.querySelectorAll("input");
  
  //const chk_1 = document.getElementById("chk_1");
  
  // Note: it is "of"
  for (const input of inputs) {
    if (input.checked) {
      favList.push(input.parentNode.textContent); 
    } 
  }
  alert(favList.join(','));
  document.querySelector('.favorites').textContent = favList.join(',');
}

function logCheckboxClick() {
  console.log("checkbox clicked");
}

var foo = function() {
  // only one button, so it is fine.
  document.querySelector("button").onclick = getFavs;
  const inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    input.onchange = logCheckboxClick
  }

  // Note: the code below only add handler to the first input element. not all
  //document.querySelector("input").onchange = logCheckboxClick;
}

// Note: calling foo when "DOMContentLoaded" to ensure document.querySelector("button") and
// document.querySelectorAll("input") have returns, otherwise null.
document.addEventListener("DOMContentLoaded", foo);
