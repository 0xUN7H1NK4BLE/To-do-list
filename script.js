var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");
// to add element in list 

button.addEventListener("click",function() {
    if (input.value.length > 0) {
        createListElement();
            
    }
})

input.addEventListener("keypress",function(event){
    if (input.value.length >0 && event.keyCode === 13) {
    createListElement();
    

}})

// with enter and click/

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    // creat button
    var but1 = document.createElement("button");
    var but2 = document.createElement("button");
    but1.innerHTML = "done";
    but2.innerHTML = "delete";
    li.appendChild(but1);
    li.appendChild(but2);
    // remove elememt
    but2.addEventListener("click", function(){
        li.parentNode.removeChild(li);
    });
    
but1.addEventListener("click",function(){
    li.classList.toggle("done");
});
ul.append(li);
input.value="";
}

Array.from(items).forEach(function(item){
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  //creates buttons
  btn1.innerHTML = "Done";
  btn2.innerHTML = "Delete";
  item.appendChild(btn1);
  item.appendChild(btn2);
  // removes element
  btn2.addEventListener("click", function () {
    item.parentNode.removeChild(item);
  });
  //continue code
  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });
})
