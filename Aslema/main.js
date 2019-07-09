function makeItalic() {
    if (document.getElementById("myText").style.fontStyle =="normal")
        document.getElementById("myText").style.fontStyle ="italic";

else {  
    document.getElementById("myText").style.fontStyle = "normal";
}
}
function makeBold() {
    if (document.getElementById("myText").style.fontWeight =="normal")
        document.getElementById("myText").style.fontWeight ="Bold";

else {  
    document.getElementById("myText").style.fontWeight = "normal";
}
}
function makeUnderline() {
    if (document.getElementById("myText").style.textDecoration =="none")
        document.getElementById("myText").style.textDecoration ="underline";

else {  
    document.getElementById("myText").style.textDecoration ="none";
}
}
function changeSize() {
    var x=document.getElementById("size").value;
       document.getElementById("myText").style.fontSize=document.getElementById("size").value;
}
function changePolice() {
   document.getElementById("myText").style.fontFamily=document.getElementById("police").value;
}
function name(champ) { 
    champ.value=champ.value.replace(/[^a-z]$/,'');
}
function mail(champ) { 
    champ.value=champ.value.replace(/[^a-z]$/,'');
}
function number(champ) { 
    champ.value=champ.value.replace(/[^0-9]$/,'');
}
$(document).ready(function(){
    $("#aze").mouseenter(function(){
        $(".btn").show()
    });
    $("#aze").mouseleave(function(){
        $(".btn").hide()
    });
});
 