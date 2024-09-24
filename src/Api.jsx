import.meta.env.VITE_REACT_APP_API_KEY
export const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

export async function getWeather(city) {
        if(city === undefined || city === "") {
                return;
        }
        const geoLocation = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`);
        let geoResponse = await geoLocation.json();

        if(geoResponse.length == 0 ){
                return;
        }
        let lat = geoResponse[0].lat;
        let lon = geoResponse[0].lon;
        
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        let response = await api_call.json();
        return response;
}
