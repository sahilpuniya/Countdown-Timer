// using two function setInterval and clearIneterval


let timer= setInterval(update,1000)


function update(){
    const end= new Date("2026-09-04T15:13:00").getTime()
    const start= new Date("2026-09-04T14:55:49").getTime()
    const current= new Date().getTime()
    const total= end-start
    const timeleft= end-current
    const calculation= 1000*60*60*24
    // this part was very confusing
    const days= Math.floor(timeleft/(calculation))
    const hours= Math.floor((timeleft%(calculation))/(1000*60*60))
    const minutes= Math.floor((timeleft%(1000*60*60))/(1000*60))
    const seconds= Math.floor((timeleft%(1000*60))/1000)

    document.getElementById("dys").innerHTML=days;
    document.getElementById("hrs").innerHTML=hours;
    document.getElementById("mins").innerHTML=minutes;
    document.getElementById("secs").innerHTML=seconds;

     const pwidth= (((current-start)/total)*100)
     document.getElementById("progress-bar").style.width= pwidth +"%";



    if(timeleft <= 0){
        clearInterval(timer)
         document.getElementsByClassName("bottom")[0].innerHTML=""
        document.getElementsByClassName("time")[0].innerHTML= `"Error: TimeOut" </br> "check value of Time"`;
        //  when we use class in get element we must use [0] either this class is only

        alert("timer is complete")
            }

    //  else if(timeleft <= 0){
    //     alert("timer is complete")
    //  }
        
    

}

