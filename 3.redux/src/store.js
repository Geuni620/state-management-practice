const {createStore, applyMiddleware, compose} = require("redux");
const {composeWithDevTools} = require("redux-devtools-extension");
const {login, logout} = require("./actions/user");
const {addPost} = require("./actions/post");
const reducer = require("./reducers");

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("로깅", action);
  dispatch(action);
};

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    // 비동기
    return action(store.dispatch, store.getState());
  }
  return dispatch(action);
};

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
