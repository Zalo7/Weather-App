import React from 'react';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import styles from './components/styles/App.module.css';

const apiKey = process.env.REACT_APP_APIKEY
 

function App() {
  const [data, setData] = React.useState([]);

function onSearch(ciudad) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setData(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });

  }
  function handleOnClose(id) {
    
  setData(prevData => {
    return prevData.filter(city => city.id !==id)
  })
  
  }
  return (
    <div className={styles.app}>
      <div>
        <SearchBar
          onSearch={onSearch}
        />
      </div>
      {/* <div>
        <Card
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div> */}
      <hr />
      <div>
        <Cards 
          cities={data} onClose= {handleOnClose} />
      </div>
      <hr />
    </div>
  );
}

export default App;