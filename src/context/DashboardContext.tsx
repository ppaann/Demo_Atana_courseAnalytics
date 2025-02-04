'use client';

import { createContext, useContext, useReducer } from 'react';
import { CourseData, CourseName } from '@/types/dashboard';

type State = {
  course: CourseName | null;
  data: CourseData | null;
  isLoading: boolean;
  error: string | null;
};

type Action =
  | { type: 'SET_COURSE'; payload: CourseName }
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: CourseData }
  | { type: 'FETCH_ERROR'; payload: string };

const initialState: State = {
  course: null,
  data: null,
  isLoading: false,
  error: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_COURSE':
      return { ...state, course: action.payload };
    case 'FETCH_START':
      return { ...state, isLoading: true, error: null, data: null };
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

const DashboardContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>(null!);

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
