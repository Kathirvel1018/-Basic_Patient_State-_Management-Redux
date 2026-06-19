// Action Types
export const ADD_PATIENT = 'ADD_PATIENT';
export const DELETE_PATIENT = 'DELETE_PATIENT';

// Action Creators
        export const addPatient = (name) => ({
          type: ADD_PATIENT,
          payload: name,
        });

        export const deletePatient = (index) => ({
          type: DELETE_PATIENT,
          payload: index,
        });
