import { format, compareAsc, fromUnixTime } from 'date-fns'
import { currentWeather, nextWeather } from './pageSetup'

function weekForecast(forecastData) {
    forecastData.forEach((element) => {
        const { pop } = element
        const { temp } = element.main
        const { description } = element.weather[0]
        const { icon } = element.weather[0]

        const currentDate = fromUnixTime(element.dt)
        const newDate = currentDate.toString().split(' ').splice(0, 3).join(' ')

        const dateArray = currentDate.toString().split(' ')
        const time = dateArray[4].split(':')

        if (time[0] === '01') {
            nextWeather(
                newDate,
                icon,
                temp,
                description,
                (pop * 100).toFixed(1)
            )
        }
    })
}

function addInput() {
    const input = document.querySelector('input')
    input.placeholder = 'City Name, Country'
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            onInput(input.value).catch((element) => {
                currentWeather(
                    'error',
                    'error',
                    'error',
                    'error',
                    'error',
                    'error'
                )
                addInput()
            })
        }
    })
}

async function onInput(value) {
    const next = document.querySelectorAll('.next')
    next.forEach((element) => {
        element.remove()
    })
    const current = document.querySelector('.current').remove()
    const title = document.querySelector('.title').remove()

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,
        { mode: 'cors' }
    )
    const weatherData = await response.json()

    const place = weatherData.name
    const { country } = weatherData.sys

    const currentDate = fromUnixTime(weatherData.dt)
    const newDate = currentDate.toString().split(' ').splice(0, 3).join(' ')
    const { icon } = weatherData.weather[0]
    const { temp } = weatherData.main
    const { description } = weatherData.weather[0]

    currentWeather(newDate, icon, temp, description, place, country)

    const forecastResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,
        { mode: 'cors' }
    )

    const forecastData = await forecastResponse.json()

    weekForecast(forecastData.list)

    addInput()
}

async function success(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,
        { mode: 'cors' }
    )
    const weatherData = await response.json()

    const forecastResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,
        { mode: 'cors' }
    )

    const forecastData = await forecastResponse.json()

    weekForecast(forecastData.list)

    const place = weatherData.name
    const { country } = weatherData.sys

    const currentDate = fromUnixTime(weatherData.dt)
    const newDate = currentDate.toString().split(' ').splice(0, 3).join(' ')
    const { icon } = weatherData.weather[0]
    const { temp } = weatherData.main
    const { description } = weatherData.weather[0]

    currentWeather(newDate, icon, temp, description, place, country)

    addInput()
}

async function error() {
    console.log('Unable to retrieve location')

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,
        { mode: 'cors' }
    )
    const weatherData = await response.json()

    const place = weatherData.name
    const { country } = weatherData.sys

    const currentDate = fromUnixTime(weatherData.dt)
    const newDate = currentDate.toString().split(' ').splice(0, 3).join(' ')
    const { icon } = weatherData.weather[0]
    const { temp } = weatherData.main
    const { description } = weatherData.weather[0]

    currentWeather(newDate, icon, temp, description, place, country)

    const forecastResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=New York&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,
        { mode: 'cors' }
    )

    const forecastData = await forecastResponse.json()

    weekForecast(forecastData.list)

    addInput()
}

export default function getLoc() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(success, error)
    } else {
        console.log('Geolocation not supported/denied')
    }
}

// add a location to the thing input and since the location doesnt work just have it by default to new york
