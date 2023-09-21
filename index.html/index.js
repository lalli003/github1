var colors = ["red","pink","yellow","violet"],
index = 0;
document.getElementById("colorify").onclick = function(){
    document.body.style.background = colors[index];
    index = (index + 1) % colors.length ;
    
}