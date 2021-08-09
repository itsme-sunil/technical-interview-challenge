import React, { useState, useEffect } from 'react';
import SelectedBreed from './SelectedBreed';
import Breeds from './Breeds';
import AddBreed from './AddBreed';
import axios from 'axios';
const url = `http://127.0.0.1:3004`;

export default function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState({});

  useEffect(() => {
    getBreeds();
  }, []);

  const getBreeds = (breed) => {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        breed = breed || data[0];
        setBreeds(data);
        setSelectedBreed(breed);
      })
      .catch(err => console.error(err));
  }

  const selectBreed = (breed) => {
    setSelectedBreed(breeds.filter(dog => dog.name === breed)[0]);
  };

  const findBreed = (array, target) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === target) {
        return array[i];
      }
    }
    return array[0];
  }

  const addNewBreed = (newBreed, data) => {
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newBreed: newBreed
      })
    })
      .then(response => console.info('breed post successful!'))
      .then(response => {
        getBreeds(newBreed);
      })
      .catch(err => console.error(err.message));

    fetch(url + '/upload', {
      method: 'post',
      body: data
    })
      .then(response => {
        console.info(response);
        getBreeds(newBreed);
      })
      .catch(err => console.error(err.message));
  };

  return (
    <div>
      <div className={'container'}>
        <Breeds breeds={breeds} selectBreed={selectBreed} />
        <SelectedBreed selectedBreed={selectedBreed} />
      </div>
      <AddBreed addNewBreed={addNewBreed} />
    </div>
  )
}