import React from 'react';
import './App.css';
import AddPatient from './components/AddPatient';
import PatientList from './components/PatientList';

function App() {
  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Patient List</h1>
        <p className="subtitle">Manage your patients easily</p>
        <AddPatient />
        <PatientList />
      </div>
    </div>
  );
}

export default App;
