async function apiCall(weatherInput) {
    try {
        const response = await fetch(weatherInput.apiLink);
        const content = await response.json();
        return content;
    } catch (error) {
        alert(`City: ${weatherInput.cityName} not found`);
        return null;
    }
}

export default apiCall;