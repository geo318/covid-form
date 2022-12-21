import { createContext } from 'react';
import { UseFormHookValues } from 'types';

const formContext = createContext<UseFormHookValues>({});
export default formContext;
