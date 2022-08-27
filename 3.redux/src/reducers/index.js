const {combineReducers} = require("redux");
const userReducer = require("./user");
const postReducer = require("./post");

//combineReducers가 Reducer을 합쳐줌.
module.exports = combineReducers({
  user: userReducer,
  posts: postReducer,
});
