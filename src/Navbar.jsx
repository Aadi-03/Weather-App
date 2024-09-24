import './Navbar.css';
import { useEffect, useState } from 'react';

function Navbar(){
        const [darkMode, setDarkMode] = useState(false);
        const [backimage, setImage] = useState('/src/assests/images/lightmode.jpg');

        const handleDarkMode = () => {
                const image = document.querySelector('.image');
                if(!darkMode) {
                        image.classList.remove('slide-left');
                        image.classList.add('slide-right');
                        document.querySelector('.darkmode').style.backgroundColor = 'darkgray';
                }
                else{
                        image.classList.remove('slide-right');
                        image.classList.add('slide-left');
                        document.querySelector('.darkmode').style.backgroundColor = 'white';
                }
                setDarkMode(!darkMode);
        }


        useEffect(() => {
                if(!darkMode){
                        setImage('/src/assests/images/darkmode.jpg');
                }
                else{
                        setImage('/src/assests/images/lightmode.jpg');
                }
                document.body.style.backgroundImage = `url(${backimage})`;
                
        }, [darkMode]);


        return (
        <nav className="navbar">
                <button className='darkmode' onClick = {handleDarkMode}>
                        <img className = "image" src = {(darkMode && "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWrKhwlPY9cc-90SmfomQE7fpmYqiG_wUuuB9Gu0QVp2zbHZkeFr82ZREiVVY7fGyn2c&usqp=CAU")|| ("https://sjinnovation.com/sites/default/files/inline-images/Let%20There%20Be%20Light%20Mode.png")}/>
                </button>
        </nav>
        )
}

export default Navbar;
