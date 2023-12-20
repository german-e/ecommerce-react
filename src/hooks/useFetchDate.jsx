import React, { useEffect, useReducer } from 'react';

const INITIAL_STATE = {
  error: '',
  isLoading: true,
  data: [],
};

function fetchReducer(state, action) {
  switch (action.type) {
    case 'init':
      return { ...state, isLoading: true };

    case 'ok':
      return { ...state, error: '', isLoading: false, data: action.payload };

    case 'error':
      return { ...state, isLoading: false, error: payload, data: [] };
  }
}

function useFetchData(URL) {
  /// .....

  const [state, dispatch] = useReducer(fetchReducer, INITIAL_STATE);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        dispatch({ type: 'init' });
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        if (data.error) {
          throw new Error('Error cargando datos');
        }
        dispatch({ type: 'ok', payload: data });
      } catch (error) {
        console.error(error);
        dispatch({ type: 'error', payload: error.message });
      }
    };

    fetchCharacters();
  }, []);

  return { data: state.data, error: state.error, isLoading: state.isLoading };
}

export default useFetchData;
