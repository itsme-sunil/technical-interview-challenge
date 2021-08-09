import React, { useState, useEffect } from 'react';

const SelectedBreed = ({ selectedBreed }) => {
  return (
    <div className={'column right selectedBreed'}>
      <p>{selectedBreed.name}</p>
      <img
        src={selectedBreed.image}
        height={'300'}
        width={'auto'}
        alt={selectedBreed.fileName}
        border={'1px solid black'}
      />
    </div>
  )
}

export default SelectedBreed;