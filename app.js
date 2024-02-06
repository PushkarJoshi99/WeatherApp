const apiKey = '24745027f064e850c670078dc4017371'

const input = document.querySelector('input')
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
  checkWeather(input.value)
})

const checkWeather = async cityName => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    )
  } catch {
    input.value = ''
    alert('City name is invalid')
  }

  document.querySelector('.city').textContent = response.data.name
  document.querySelector('.temp').textContent = response.data.main.temp + '°C'
  document.querySelector('.humidity').textContent =
    response.data.main.humidity + '%'
  document.querySelector('.wind').textContent =
    response.data.wind.speed + 'km/hr'
  const img = document.querySelector('.weather-icon')
  const howIsWeather = response.data.weather[0].main
  console.log(howIsWeather)

  if (howIsWeather == 'Clouds') {
    img.setAttribute('src', 'images/clouds.png')
  } else if (howIsWeather == 'Smoke') {
    img.setAttribute('src', 'images/clear.png')
  } else if (howIsWeather == 'Rain') {
    img.setAttribute('src', 'images/rain.png')
  } else if (howIsWeather == 'Drizzle') {
    img.setAttribute('src', 'images/drizzle.png')
  } else if (howIsWeather == 'Mist') {
    img.setAttribute('src', 'images/mist.png')
  }
  document.querySelector('.weather').style.display = 'block'
}

//comment