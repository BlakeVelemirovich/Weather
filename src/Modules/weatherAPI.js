async function apiCall(weatherInput) {
    try {
        //Call api and return stringified content
        const response = await fetch(weatherInput.apiLink);
        if (!response.ok) throw new Error(`City ${weatherInput.cityName} not found`);
        const content = await response.json();
        return content;
    } catch (error) {
        alert(error);
        return null;
    }
}

export default apiCall;