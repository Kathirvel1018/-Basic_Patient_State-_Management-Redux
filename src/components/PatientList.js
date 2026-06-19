import React from 'react';
import usePatient from '../hooks/usePatient';

function PatientList() {
  const { patients, deletePatient } = usePatient();

  return (
    <div>
      <div className="list-header">
        <span className="list-label">Patients</span>
        <span className="badge">{patients.length}</span>
      </div>

      {patients.length === 0 ? (
        <div className="empty">
          <p className="empty-text">No patients added yet.</p>
          <p className="empty-hint">Add a patient using the form above.</p>
        </div>
      ) : (
        <ul className="patient-list">
          {patients.map((patient, index) => (
            <li key={index} className="patient-item">
              <div className="patient-left">
                <div className="avatar">{patient[0].toUpperCase()}</div>
                <span className="patient-name">{patient}</span>
              </div>
              <button onClick={() => deletePatient(index)} className="delete-btn">
                🗑 Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PatientList;
