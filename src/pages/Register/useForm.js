import { useReducer, useEffect } from 'react';

const useForm = (callback) => {
  //State
  const initState = {
    input: {
      email: '',
      password: '',
    },
    validationErrs: {
      email: '',
      password: '',
    },
    isSubmiting: false,
  };

  // Reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        return {
          ...state,
          input: {
            ...state.input,
            ...action.payload,
          },
          validationErrs: {
            ...state.validationErrs,
            ...validateOnTouch(state, action),
          },
        };
      case 'SUBMIT':
        return {
          ...state,
          validationErrs: {
            email: '',
            password: '',
            ...validateOnSubmit(state),
          },
          isSubmiting: true,
        };
      case 'STOP_SUBMIT':
        return {
          ...state,
          isSubmiting: false,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);

  const handleChange = (e) => {
    dispatch({
      type: 'INPUT_CHANGE',
      payload: { [e.target.name]: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT' });
  };

  useEffect(() => {
    if (
      Object.values(state.validationErrs).find((err) => err.length) &&
      state.isSubmiting
    )
      dispatch({ type: 'STOP_SUBMIT' });
    if (
      !Object.values(state.validationErrs).find((err) => err.length) &&
      state.isSubmiting
    )
      callback(state.input); // submit logic
  }, [state.isSubmiting]);

  return { state, handleChange, handleSubmit };
};

export default useForm;

// Validation functions
function validateOnSubmit(state) {
  const { input } = state;
  let validationErrs = {};
  if (!input.email) validationErrs.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(input.email))
    validationErrs.email = 'Should be an email';
  if (!input.password) validationErrs.password = 'Password is required';
  else if (input.password.length < 10)
    validationErrs.password = 'Password must be at least 10 characters';
  return validationErrs;
}

function validateOnTouch(state, action) {
  let validationErr = {};
  for (let keyName in action.payload) {
    if (state.input[keyName].length > 0 && action.payload[keyName].length === 0)
      validationErr[keyName] = 'This field is required';
    if (state.input[keyName].length === 0 && action.payload[keyName].length > 0)
      validationErr[keyName] = '';
  }
  return validationErr;
}
