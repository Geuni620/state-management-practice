const {createStore} = require("redux");
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

const store = createStore(reducer, initialState);

store.dispatch(
  login({
    id: 1,
    name: "KeunHwee",
    addmin: true,
  })
);

store.dispatch(
  addPost({
    content: "안녕하세요.",
  })
);

store.dispatch(logout());

console.log("2nd", store.getState());
