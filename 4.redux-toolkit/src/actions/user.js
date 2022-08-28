const {createAsyncThunk, isPending, isFulfilled} = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  console.log(data);
  const result = await delay(500, {
    userId: 1,
    nickName: "keunhwee",
  });
  return result;
});

module.exports = {login};
