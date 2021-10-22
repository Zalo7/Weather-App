import React from 'react';
import styles from './styles/Card.module.css';


export default function Card(props) {
const { max, min, name, img, onClose } = props;

  // acá va tu código
  return ( <div className={styles.card}>
    <button className={styles.btn} onClick={onClose}>X</button>
    <span> {name} </span>
    <div>
      <span>Min </span> 
      <span>{min}</span>
      </div>
      <div>
        <span>Max </span>
        <span>{max}</span>
      </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found"  />
  </div>
  );
}