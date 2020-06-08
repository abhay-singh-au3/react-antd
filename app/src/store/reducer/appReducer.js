const INITIAL_STATE = {
  results: [],
  loading: false,
  error: ''
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return { results: [], loading: true, error: '' };
    case 'DATA_LOADED':
      return { results: [...action.data], loading: false, error: '' };
    case 'DATA_ERROR':
      return { results: [], loading: false, error: action.error };
    default:
      return state;
  }
};

export default appReducer;
