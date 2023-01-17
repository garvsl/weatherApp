import sky from './sky.jpeg'

const content = document.getElementById('content')

export function background() {
    const backgroundIMG = document.createElement('img')
    backgroundIMG.classList.add('backgroundIMG')
    backgroundIMG.src = sky
    content.appendChild(backgroundIMG)

    const nextContainer = document.createElement('div')
    nextContainer.classList.add('nextContainer')
    content.appendChild(nextContainer)
}

export function currentWeather(day, icon, temp, condition, place, country) {
    const current = document.createElement('div')
    current.classList.add('current')

    content.appendChild(current)

    const weekDay = document.createElement('h3')
    weekDay.textContent = `${day}`
    current.appendChild(weekDay)

    const tempImgCov = document.createElement('div')
    tempImgCov.classList.add('tempImgCov')
    current.appendChild(tempImgCov)

    const img = document.createElement('img')
    img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    tempImgCov.appendChild(img)

    const temperature = document.createElement('h1')
    temperature.textContent = `${temp}°`
    tempImgCov.appendChild(temperature)

    const currentCondition = document.createElement('h3')
    currentCondition.textContent = `${condition}`
    current.appendChild(currentCondition)

    const filterCirc = document.createElement('div')
    filterCirc.classList.add('filterCirc')
    current.appendChild(filterCirc)

    const titleHeader = document.createElement('div')
    titleHeader.classList.add('title')
    content.appendChild(titleHeader)

    const title = document.createElement('h1')
    title.textContent = `${place}, ${country}`
    titleHeader.appendChild(title)

    const input = document.createElement('input')
    titleHeader.appendChild(input)
}

export function nextWeather(day, icon, temp, condition, pop) {
    const nextContainer = document.querySelector('.nextContainer')

    const next = document.createElement('div')
    next.classList.add('next')
    nextContainer.appendChild(next)

    const weekDay = document.createElement('h3')
    weekDay.textContent = `${day}`
    next.appendChild(weekDay)

    const tempImgCov = document.createElement('div')
    tempImgCov.classList.add('tempImgCov')
    next.appendChild(tempImgCov)

    const img = document.createElement('img')
    img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    tempImgCov.appendChild(img)

    const temperature = document.createElement('h1')
    temperature.textContent = `${temp}°`
    tempImgCov.appendChild(temperature)

    const precip = document.createElement('h3')
    precip.textContent = `Chance of rain: ${pop}%`
    next.appendChild(precip)

    const currentCondition = document.createElement('h3')
    currentCondition.textContent = `${condition}`
    next.appendChild(currentCondition)
}
