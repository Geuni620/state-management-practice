const {createSlice} = require("@reduxjs/toolkit");
const {login} = require("../actions/user");

const initialState = {
  isLoggingIn: false,
  data: null,
  email: "",
  password: "",
  prices: Array(100)
    .fill()
    .map((v, i) => (i + 1) * 100),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state, action) {
      state.data = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isLoggingIn = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggingIn = false;
      state.data = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoggingIn = false;
      state.data = null;
    },
  },
});

module.exports = userSlice;
