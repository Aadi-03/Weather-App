import './SearchBox.css';
import { getWeather } from './Api';
import { useContext } from 'react';
import { dataContext } from './Context';


function SearchBox() {
        const data=useContext(dataContext);
        function Weather_Details(){
                const city = document.querySelector('.input_field').value;
                let response = getWeather(city);
                let weatherData = {};
                response.then((data2) => {
                        weatherData = data2;
                        data.setData(weatherData);
                });
        }
        return (
                <div className="Search-box">
                        <input className = "input_field" type="text" placeholder="Search..." />
                        <img src="https://cdn-icons-png.flaticon.com/128/3128/3128287.png" onClick = {Weather_Details} alt="search"></img>
                </div>
                
        );
}

export default SearchBox;