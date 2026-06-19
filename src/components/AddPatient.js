import React, { useState } from 'react';
import usePatient from '../hooks/usePatient';

function AddPatient() {
      const [name, setName] = useState('');
      const { addPatient } = usePatient();

      const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '') return;
        addPatient(name.trim());
        setName('');
      };

      return (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter patient name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          <button type="submit" className="add-btn">
            + Add Patient
          </button>
        </form>
      );
    }

export default AddPatient;
