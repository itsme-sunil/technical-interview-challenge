import React, { useState, useEffect } from 'react';
import Breed from './Breed';

const Breeds = ({ breeds, selectBreed }) => {
  return (
    <table className={'column left'}>
      <thead>
        <tr className={'header'}>
          <td style={{border:'none'}}><h3>Breed Names (click to show picture)</h3></td>
        </tr>
      </thead>
      <tbody>
        {breeds.length ? breeds.map((breed, idx) => (
          <Breed
            key={idx}
            breed={breed}
            selectBreed={selectBreed}
          />
        )) : null}
      </tbody>
    </table>
  )
}

export default Breeds;