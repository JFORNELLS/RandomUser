import React, { useState } from 'react';

export default function Home() {
  let [currentIndex, setCurrentIndex] = useState(0);

  function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        setRandomUser(data.results[0]);
      })
      .catch(error => {
        console.error('Error fetching random user:', error);
      });
  }

  function usuarios() {
    fetchRandomUser();
  }
  function match() {
    const imatges = ["guapos1.png", "guapos2.png", "guapos3.png", "guapos4.png"]; 
    // Siempre mostrará la siguiente imagen en orden
    let nextIndex = (currentIndex + 1) % imatges.length;
    setRandomImage(`/imatges/${imatges[nextIndex]}`); 
    // Actualiza el índice actual para el próximo clic
    setCurrentIndex(nextIndex);
  }

  let [randomUser, setRandomUser] = useState(null);
  let [randomImage, setRandomImage] = useState(null);

  return (
    <div className="container">
      <img src="/imatges/imatge3.jpg" alt="imatge3" />
      <h1 className="title">Aquí vas apoder conocer a gente de todo el mundo.</h1>
      <h2 className="title2">¡Pulsa el botón "USUARIOS" para ver los componenetes de la comunidad!</h2>
      <button className="button" onClick={usuarios}>USUARIOS</button>
      {randomUser && (
        <div className="user-container">
          <img className="user-image" src={randomUser.picture.large} alt="Usuario" />
          <div className="user-info">
            <p><strong>Nombre:</strong> {randomUser.name.first} {randomUser.name.last}</p>
            <p><strong>Edad:</strong> {randomUser.dob.age}</p>
            <p><strong>Email:</strong> {randomUser.email}</p>
            <p><strong>Dirección:</strong> {randomUser.location.street.number} {randomUser.location.street.name}</p>
            <p><strong>País:</strong> {randomUser.location.country}</p>
          </div>
        </div>
      )}
      <h3 className="title3">¡Gente que te quiere conocer!</h3>
      <button className="button" onClick={match}>HAS LIGAO</button>
      {randomImage && <img src={randomImage} alt="Imagen Aleatoria" />} 
    </div>
  );
}
