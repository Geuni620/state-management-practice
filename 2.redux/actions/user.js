const login = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

module.exports = {login, logout};
