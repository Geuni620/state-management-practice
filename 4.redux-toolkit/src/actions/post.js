const {createAsyncThunk} = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const addPost = createAsyncThunk("post/add", async (data, thunkAPI) => {
  const result = await delay(500, {
    title: "새 게시글",
    content: "내용 내용 내용",
  });
  return result;
});

module.exports = {addPost};
