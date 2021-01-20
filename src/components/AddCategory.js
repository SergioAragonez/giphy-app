import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(''); // ''

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  const handleReset = () => setCategories([]);


  return (
    <form className='addCategory' onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <input type='submit' value='Search' />
      <button onClick={handleReset}>Reset</button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
