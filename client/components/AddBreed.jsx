import React, { useState, useEffect } from 'react';

const AddBreed = ({ addNewBreed }) => {
  const [newBreed, setNewBreed] = useState('');
  const [image, setImage] = useState('');

  const handleNameChange = e => {
    setNewBreed(e.target.value);
  }

  const generateImageFileName = newDog => {
    let imgName = newDog.toLowerCase().split(' ').join('_') + '.jpg';
    return imgName;
  };

  const uploadImage = e => {
    setImage(e.target.files[0]);
  }

  const handleSubmit = e => {
    e.preventDefault();
    let myImage = new File([image], generateImageFileName(newBreed), { type: image.type });
    const data = new FormData();
    data.append('file', myImage);
    addNewBreed(newBreed, data);
    setNewBreed('');
    setImage('');
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        placeholder={'Enter Breed Name...'}
        value={newBreed}
        onChange={handleNameChange}
        required
      />
      <input
        type='file'
        onChange={uploadImage}
        name='image'
        required
      />
      <button onSubmit={handleSubmit}>Add Breed</button>
    </form>
  )
};

export default AddBreed;