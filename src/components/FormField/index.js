import React from 'react';

function FormField({ name, type, value, onChange }) {
  return (    
    <div>
      <label>
        {name} da categoria:
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
  
}

export default FormField;