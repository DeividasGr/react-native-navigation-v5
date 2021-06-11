import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        token: action.payload,
        isLoading: false,
      };
    case 'SIGNUP':
      return {token: action.payload, isLoading: false};
    case 'SIGNOUT':
      return {token: null, isLoading: false};
    case 'CHANGE_LOADING_STATUS':
      return {token: null, isLoading: false};
    default:
      return state;
  }
};

const signin = dispatch => tokenValue => {
  dispatch({type: 'SIGNIN', payload: tokenValue});
};

const signup = dispatch => tokenValue => {
  dispatch({type: 'SIGNUP', payload: tokenValue});
};

const signout = dispatch => () => {
  dispatch({type: 'SIGNOUT'});
};

const changeLoadingStatus = dispatch => () => {
  dispatch({type: 'CHANGE_LOADING_STATUS'});
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup, signout, changeLoadingStatus},
  {token: null, isLoading: true},
);
