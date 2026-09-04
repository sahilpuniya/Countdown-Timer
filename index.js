// using two function setInterval and clearIneterval

function update(){
    const end= new Date("2026-09-04T13:40:20").getTime()
    const start= new Date("2026-09-04T12:31:49").getTime()
    const current= new Date().getTime()
    const timeleft= end-current
    const calculation= 1000*60*60*24

    const days= Math.floor(timeleft/(calculation))
    const hours= Math.floor((timeleft%calculation)/(1000*60*60))
    const minutes= Math.floor((timeleft%1000*60*60)/(1000*60*60))
    const seconds= Math.floor((timeleft%(1000*60))/1000)

    document.getElementById("dys").innerHTML=days;
    document.getElementById("hrs").innerHTML=hours;
    document.getElementById("mins").innerHTML=minutes;
    document.getElementById("secs").innerHTML=seconds

}

setInterval(update,1000)