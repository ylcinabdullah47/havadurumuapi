const url = `'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}';
const APIkey = '4dc5c40a615bbfe32af0768b72c2f4a1';

const setQuery = (e) =>{
    if(e.keyCode == '13')
    getResult(searchBar.value) 
}
const getResult = (cityName) => {
    let query = `${url}Weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch (query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${result.main.temp}`
}



const searchBar = document.getElementById( 'searchBar')
searchBar.addEventListener('keypress',setQuery)
 


