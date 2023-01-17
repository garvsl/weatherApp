import { format, compareAsc, fromUnixTime } from 'date-fns'
import pageSetup, { currentWeather, nextWeather } from './pageSetup'

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

    console.log(forecastData)

    forecastData.list.forEach((element) => {
        const { pop } = element
        const { temp } = element.main
        const { description } = element.weather[0]
        const { icon } = element.weather[0]

        const dateArray = element.dt_txt.split('-')
        const dateEnd = dateArray[2].split(' ')
        dateArray.splice(2, 1)
        dateArray.push(dateEnd[0], dateEnd[1])
        const time = dateArray[3].split(':')

        if (time[0] === '00') {
            const day = format(
                new Date(dateArray[0], dateArray[1], dateArray[2]),
                'EEEE'
            )

            nextWeather(day, icon, temp, description, pop * 100)
        }
    })

    const currentDate = fromUnixTime(weatherData.dt)
    const newDate = currentDate.toString().split(' ').splice(0, 3).join(' ')
    currentWeather(newDate, icon, temp, weatherDesc)
}

function error() {
    console.log('Unable to retrieve location')
}

export default function getLoc() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(success, error)
    } else {
        console.log('Geolocation not supported/denied')
    }
}
