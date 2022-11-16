const btn1 = document.getElementById("submit_button");
const warning = document.getElementById("warning");
let commentTotal = document.getElementById("comment_input");
let commentLimit = 140;
let finalAmount = document.getElementById("final_count");
var submittedComments = [];
const txt1 = document.getElementById("comment_input");
const txt2 = document.getElementById("name_input");
var commentBox = document.getElementById("comments");

btn1.addEventListener("click", submitComment);

function submitComment(event){
    event.preventDefault();

    submittedComments.push(txt2.value + "<br/>" + "<br/>" + txt1.value);
   
    txt2.value = "";
    txt1.value = "";
    commentBox.innerHTML = "";
    commentBox.innerHTML += "" + submittedComments.join ("<br/>") + "<br/>";

};

commentTotal.addEventListener("input", commentCount);

function commentCount(){
    let commentLength = commentTotal.value.length;
    finalAmount.textContent = 0 + "/" + commentLimit + " characters used";
    finalAmount.textContent = commentLength + "/" + commentLimit + " characters used";

    if (commentLength > commentLimit){
        commentTotal.style.borderColor = "#ff2851";
        warning.innerHTML = "Character limit exceeded!";
    } 

};