const clock = document.querySelector("#clock")
setInterval(function(){
    let time = new Date().toLocaleTimeString();
    clock.innerHTML=`<span>${time}</span>`

},1000)


