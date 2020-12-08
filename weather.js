const city = document.getElementById('city')
const condition = document.getElementById('condition')
const temperature = document.getElementById('temperature')
const icon = document.getElementById('icon')

//Kelvin - Celsius
function celsius(val){
    return val - 273.15
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

 
   //Fetch WEather
async function getWeather() {
    //Change city 
    let city = 'Bremen'
    let apiKey  //Enter your api key
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            
    const responseData = await response.json()
        .then(data =>{
        console.log(data)
        city.textContent = `${data.name}`
        condition.textContent = capitalizeFirstLetter(`${data.weather[0].description}`)
        icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        temperature.textContent = `${celsius(data.main.temp).toFixed(1)} \u00B0 C`
        })
            return responseData
        }

        
    

    