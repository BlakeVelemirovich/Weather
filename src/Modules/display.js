const displayWeatherCard = (weatherContent) => {
    const weatherCard = document.querySelector('.weatherCard');
    weatherCard.innerHTML = ' ';
    //City Name
    let cityName = document.createElement('h2');
    cityName.innerText = weatherContent.name;
    weatherCard.appendChild(cityName);
    //Temperature
    weatherCard.appendChild(contentConstructor('Temperature:', weatherContent.main.temp, 'h2', '°C'));
    //Feels Like
    weatherCard.appendChild(contentConstructor('Feels Like:', weatherContent.main.feels_like, 'p', '°C'));
    //Humidity
    weatherCard.appendChild(contentConstructor('Humidity:', weatherContent.main.humidity, 'p', '%'));
    //Wind
    weatherCard.appendChild(contentConstructor('Wind Speed:', weatherContent.wind.speed, 'p', 'Km/h'));
}

const contentConstructor = (name, type, element, symbol) => {
    let content = document.createElement(element);
    content.innerText = name + ' ' + type + ' ' + symbol;
    return content;
}

export default displayWeatherCard;