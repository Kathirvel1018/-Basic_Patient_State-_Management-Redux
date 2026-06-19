import { ADD_PATIENT, DELETE_PATIENT } from './actions';

// Initial state
    const initialState = {
      patients: [],
    };

    // Reducer
    const reducer = (state = initialState, action) => {
      switch (action.type) {

        case ADD_PATIENT:
          return {
            ...state,
            patients: [...state.patients, action.payload],
          };

        case DELETE_PATIENT:
          return {
            ...state,
            patients: state.patients.filter((_, index) => index !== action.payload),
          };

        default:
          return state;
      }
    };

export default reducer;
