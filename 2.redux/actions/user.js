const login = (data) => {
  // async action creator
  return (dispatch, getState) => {
    // async action
    dispatch(loginRequest(data));
    try {
      setTimeout(() => {
        dispatch(loginSuccess({userId: 1, nickName: "keunhwee"}));
      }, 2000);
    } catch (err) {
      dispatch(loginFailure(e));
    }
  };
};

const loginRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const loginSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const loginFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

module.exports = {login, logout};
