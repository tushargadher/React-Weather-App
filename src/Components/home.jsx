import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "./Logo";
import Table from "./Tables";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loader";
import MorningBG from '../assets/MorningBackGround.jpg';
import NightBG from '../assets/NigthTimeBg.jpg';
import EveningBG from '../assets/sunsetBg.jpg';
import AfterNoonBG from '../assets/afternoon.jpg';

const Home = () => {

    const [loaded, setLoaded] = useState(false);
    const [city, setCity] = useState('Delhi');
    const [weatherData, setWeatherData] = useState([]);
    const [bgImg, setBgImg] = useState(MorningBG);

    const hanldeClick = () => {
        setLoaded(false);
        if (city == '') {
            toast.error("Please enter city !");
            setLoaded(true);
        } else {
            fetchData();
        }
    }
    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const fetchData = async () => {
        try {
            // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lag}&appid=895284fb2d2c50a520ea537456963d9c`)
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=895284fb2d2c50a520ea537456963d9c`)
            const data = response.data;
            setWeatherData({ data: data });
            setLoaded(true);
        } catch (err) {
            toast.error(`Place ${city} not found !`);
            setLoaded(true);
        }
    }
    useEffect(() => {
        fetchData();
        setTimeout(() => {
            toast.info("Enter city name in search box and hit enter", {
                autoClose: 6000,
                style: {
                    width: "400px",
                }
            })
        }, 10000);
        changeImage();
    }, [])

    //changing the background according to time 
    let hour = new Date().getHours();

    const changeImage = () => {
        if (hour >= 5 && hour < 12) {
            setBgImg(MorningBG);
        }
        else if (hour >= 12 && hour < 18) {
            setBgImg(AfterNoonBG);
        }
        else if (hour >= 18 && hour < 20) {
            setBgImg(EveningBG);
        }
        else if (hour >= 20 || hour <= 5) {
            setBgImg(NightBG);
        }
    }

    return (
        <>
            <ToastContainer
                transition={Slide}
                position="top-center"
                autoClose={3000}
                style={{ fontSize: "14px", fontWeight: "bold" }}
            />
            <div className="container" style={{ background: `url('${bgImg}')` }}>
                <div className="header">
                    <Logo />
                    <div className="search">
                        <input type="text" placeholder="search place here" id="inputCity" value={city} onChange={handleChange} />
                        <button id="searchBtn" onClick={hanldeClick}><i className='bx bx-search-alt'></i></button>
                    </div>
                </div>

                <div className="section">
                    {loaded ? <Table data={weatherData.data} /> : <Loader />}
                </div>
                <span className="credit">Tushar Gadher @ 2023</span>
            </div>

        </>
    );
}
export default Home;