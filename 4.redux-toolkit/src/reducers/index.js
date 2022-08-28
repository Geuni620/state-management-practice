const {combineReducers} = require("redux");
const userSlice = require("./user");
const postsSlice = require("./post");

//combineReducers가 Reducer을 합쳐줌.
module.exports = combineReducers({
  user: userSlice.reducer,
  posts: postsSlice.reducer,
});
