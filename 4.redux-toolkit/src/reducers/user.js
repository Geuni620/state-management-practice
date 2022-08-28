const {createSlice} = require("@reduxjs/toolkit");
const {login} = require("../actions/user");

const initialState = {
  isLoggingIn: false,
  data: null,
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
