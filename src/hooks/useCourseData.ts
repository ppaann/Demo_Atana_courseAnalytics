'use client';
import { CourseName } from '@/types/dashboard';
import { useDashboard } from '../context/DashboardContext';

const url =
  'https://qcuialeirsxv5ht6crufymcjse0xmkop.lambda-url.us-east-1.on.aws/course/';

export const useCourseData = () => {
  const { state, dispatch } = useDashboard();

  const handleSubmit = async () => {
    if (!state.course) return;

    try {
      dispatch({ type: 'FETCH_START' });

      const response = await fetch(`${url}${state.course.id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: 'FETCH_ERROR', payload: err.message });
      } else {
        dispatch({
          type: 'FETCH_ERROR',
          payload: 'An unknown error occurred',
        });
      }
    }
  };

  return {
    course: state.course,
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    setCourse: (course: CourseName) =>
      dispatch({ type: 'SET_COURSE', payload: course }),
    handleSubmit,
  };
};
