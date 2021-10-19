//definir elementos como vars constantes

const icon=document.querySelector("temperatura-icon")
const local_icon=document.querySelector("local-icon")
const temp=document.querySelector("temperatura p")
const desc=document.querySelector("temperatura-desc p")
const local=document.querySelector("local")
const notificacao=document.querySelector("notificacao")

var input = document.getElementById("procurar")
let cidade=""
let latitude=0.0
let longitude=0.0


input=addEventListener("keyup", function(event){
    if (event.keyCode===13){
        event.preventDefault();

        cidade=input.value
        getTempo(cidade)
        console.log(cidade)
    }
})

const tempo={}

tempo.temperatura={
    unit:"Celsius"
}

const KELVIN = 273

const key="d8ebd123de07217c34a8edfad6a2376f"

if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,showError)
} else {
    notificacao.style.display="block"
    notificacao.innerHTML="<p>Browser não é suportado...hr..</p>"
}

function setPosition (pos){
    latitude=pos.coords.latitude
    longitude=pos.coords.longitude

    getTempo(latitude,longitude)
}

/*local_icon.addEventListener("click",function(event){
    console.log("olá")
    getTempo(latitude,longitude)
})*/

function showError(er){
    notificacao.style.display="block"
    notificacao.innerHTML='<p> ${er.message}</p>'
}

function getTempoProcura(cidade){
    let api=`http://api.openweather.org/data/2.5/weather?q=${cidade}&appid=${key}`

    fetch(api)
    .then(function (response) {
        let data=response.json()
        return data
    })
    .then (function (data) {
        tempo.temperatura.value=Math.floor(data.main.temp -KELVIN)
        tempo.desc=data.tempo[0].desc
        tempo.iconId=data.tempo[0].icon
        tempo.cidade=data.name
        tempo.country=data.sys.country
    })
    .then(function(){
        displayTempo()
    })
}

function getTempo (latitude,longitude){
    let api=`http://api.openweather.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`

    fetch(api)
    .then(function (response) {
        let data=response.json()
        return data
    })
    .then (function (data) {
        tempo.temperatura.value=Math.floor(data.main.temp -KELVIN)
        tempo.desc=data.tempo[0].desc
        tempo.iconId=data.tempo[0].icon
        tempo.cidade=data.name
        tempo.country=data.sys.country
    })
    .then(function(){
        displayTempo()
    })

}

function displayTempo(){

    icon.innerHTML=`<img srd="icons/${tempo.iconId}.png" />`
    temp.innerHTML=`${tempo.temperatura.value} *<span>C<span>`
    desc.innerHTML=tempo.desc
    local.innerHTML=`${tempo.cidade}, ${tempo.country}`
}