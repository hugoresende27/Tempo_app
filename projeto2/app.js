/*
http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d8ebd123de07217c34a8edfad6a2376f
c52b669e-3118-11ec-a0f8-0242ac130002-c52b6752-3118-11ec-a0f8-0242ac130002
*/

window.addEventListener('load',()=>{    //arrow function

const lat = 58.7984;
const lng = 17.8081;
const params = 'waveHeight,airTemperature';

const teste = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`;

  console.log(teste);


    let longitude;
    let latitude;

    if (navigator.geolocation)//só funciona se no browser tiver a funcionalidade de permitir a localização
    {
        navigator.geolocation.getCurrentPosition(posicao => {
                console.log(posicao);//print na consola das coordenadas lidas no browser
                longitude = posicao.coords.longitude;
                latitude = posicao.coords.latitude;


             
        });
    }
    else
    {
        document.getElementById('timezones').innerHTML="ERRO, localização não ativa";
    }
});