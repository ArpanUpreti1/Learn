function updateClock(){
    var now = new Date()
    var dayName = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    oe = "AM";
    var months = ["January","February","March","April","May","June","July","Agust","September","October","November","December"]
    var week = ["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"]
    var ids=["Day","Month","daynum","Year","hour","minutes","seconds","period"]
    var values = [dayName,mo,dnum,hou,min,sec,oe]
    for(var i = 0;i<ids.length;i++){
        document.getElementById(ids[1]).firstChild.nodeValue = values[i]
    }
}
function initClock(){
    updateClock();
    window.setInterval("updateClock()",1)
}