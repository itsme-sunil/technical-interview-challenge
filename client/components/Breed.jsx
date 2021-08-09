import React from 'react';

const Breed = ({ breed, selectBreed }) => {
  return (
    <tr>
      <td onClick={() => selectBreed(breed.name)}>{breed.name}</td>
    </tr>
  )
};

export default Breed;