var colors = ["red","yellow","green"];
var i = 0
var n = 1
function signals(){
    var l = document.getElementsByClassName('light');
    for(var j = 0;j<l.length;j++){
        l[j].style.background = "black"
        l[j].innerHTML="";
    }
    l[i].style.background = colors[i];
    if(i<l.length){
        if(n<=3){
            l[i].innerHTML = n;
            n++
        }
        if(n==4){
            i++;
            n = 1;
            if(i==3){
                i = 0
            }
        }

    }
   
}
setInterval(signals,1000)