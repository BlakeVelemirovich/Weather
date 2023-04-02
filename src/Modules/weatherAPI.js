async function apiCall(weatherInput) {
    try {
        //Call api and return stringified content
        const response = await fetch(weatherInput.apiLink);
        const content = await response.json();
        return content;
    } catch (error) {
        alert(`City: ${weatherInput.cityName} not found`);
        return null;
    }
}

export default apiCall;