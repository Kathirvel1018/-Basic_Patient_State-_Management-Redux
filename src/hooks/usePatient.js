import { useSelector, useDispatch } from 'react-redux';
import { addPatient, deletePatient } from '../redux/patientSlice';

function usePatient() {
  // state.patient.patients  ← "patient" is the slice name in store
  const patients = useSelector((state) => state.patient.patients);
  const dispatch = useDispatch();

  const handleAddPatient = (name) => {
    dispatch(addPatient(name));
  };

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
