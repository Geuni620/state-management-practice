import { useContext } from 'react';
import { MyContext } from '../main';

export const useMyContext = () => {
  return useContext(MyContext);
};
