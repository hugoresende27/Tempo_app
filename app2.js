let botao = document.querySelector('.button');
let input = document.querySelector('.inputValor');
let nome = document.querySelector('.nome');
let desc = document.querySelector('.desc');
let tempo = document.querySelector('.tempo');



botao.addEventListener('click', function(){
    //fetch ('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d8ebd123de07217c34a8edfad6a2376f')
    fetch ('http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=d8ebd123de07217c34a8edfad6a2376f&units=metric')
    .then(resposta => resposta.json())
    .then(data => //console.log(data))
    {
        let nomeValor=data['name'];
        let tempValor=data['main']['temp'];
        let descValor=data['weather'][0]['description'];

        fToC(tempValor);

        nome.innerHTML = nomeValor;
        tempo.innerHTML = tempValor;
        desc.innerHTML = descValor;

    })

    

    .catch (err => alert("Cidade não existe!"))
})

function fToC(fahrenheit) 
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
    console.log(message);
} 