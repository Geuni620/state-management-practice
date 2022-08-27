const {createStore, applyMiddleware, compose} = require("redux");
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
const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);

store.dispatch(
  login({
    id: 1,
    name: "KeunHwee",
    addmin: true,
  })
);

console.log("2nd", store.getState());

// store.dispatch(
//   addPost({
//     content: "안녕하세요.",
//   })
// );

// store.dispatch(logout());
