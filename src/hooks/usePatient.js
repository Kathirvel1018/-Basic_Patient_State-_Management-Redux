import { useSelector, useDispatch } from 'react-redux';
import { addPatient, deletePatient } from '../redux/actions';

// Custom Hook - hides all Redux logic in one place
    function usePatient() {
      // Read patients from Redux store
      const patients = useSelector((state) => state.patients);

      // Get dispatch to send actions
      const dispatch = useDispatch();

      // Add a new patient
      const handleAddPatient = (name) => {
        dispatch(addPatient(name));
      };

      // Delete patient by index
      const handleDeletePatient = (index) => {
        dispatch(deletePatient(index));
      };

      return {
        patients,
        addPatient: handleAddPatient,
        deletePatient: handleDeletePatient,
      };
    }

export default usePatient;
