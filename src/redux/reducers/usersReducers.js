import { userTypes } from '../types/users'

const initialState = {
  users: [],
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.FETCH_USERS:
      return { 
        ...state, 
        users: action.payload,
        loading: false,
        error: '',
      };

    case userTypes.LOADING:
      return {...state, loading: true};

    case userTypes.ERROR:
      return {
        ...state, 
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
