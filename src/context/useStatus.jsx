import { useContext } from 'react';
import { StatusContext } from './StatusContext';

const useStatus = () => useContext(StatusContext);

export default useStatus;
