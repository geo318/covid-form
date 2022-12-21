import { createContext } from 'react';
import { UseFormHookValues } from '~/types';

export const formContext = createContext<UseFormHookValues>({});
