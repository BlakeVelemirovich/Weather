import './SASS/styles.scss';
import apiCall from './Modules/weatherAPI';
import displayWeatherCard from './Modules/display';

//API Link: https://api.openweathermap.org/data/2.5/weather?q=halifax&units=metric&appid=6b7c74fe198dc0987ac9d6b11134fc89
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', async() => {
    const weatherInput = {
        cityName: searchInput.value,
        apiLink: `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=6b7c74fe198dc0987ac9d6b11134fc89`    
    };
    const weatherContent = await apiCall(weatherInput);
    displayWeatherCard(weatherContent);
})  
