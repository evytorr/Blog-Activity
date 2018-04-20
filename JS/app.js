// document.getElementById("input.content").style.height="200px";
// document.getElementById("input.content").style.width="400px";


document.getElementById("btn").addEventListener("click", function(){

    var input = document.getElementById("input.title").value;

    var newTitle = document.createElement("h3");

    var newContent = document.createTextNode(input);

    var container = document.getElementById("container");

    newTitle.appendChild(newContent);

    var container = document.getElementById("container");

    container.appendChild(newTitle);
});

document.getElementById("btn").addEventListener("click", function(){

    var input2 = document.getElementById("input.content").value;

    var newTitle2 = document.createElement("p");

    var newContent2 = document.createTextNode(input2);

    var container = document.getElementById("container");

    newTitle2.appendChild(newContent2);

    var container = document.getElementById("container");

    container.appendChild(newTitle2);
})