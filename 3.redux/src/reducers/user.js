const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...prevState,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        isLoggingIn: false,
        data: action.data,
      };
    case "LOG_IN_FAILURE":
      return {
        ...prevState,
        isLoggingIn: false,
        data: null,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        data: null,
      };
    default:
      return prevState;
  }
};

module.exports = userReducer;
