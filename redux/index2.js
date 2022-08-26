const {createStore} = require("redux");

// reducer
const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);

const login = (data) => {
  return {
    /** action, action이 함수가 아님, */
    type: "LOG_IN",
    data,
  };
};

const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

// ------ 여기까진 다 만들어놓아야함. 아래는 화면에서 동작할 때마다 실행하는 것.

store.dispatch(
  login({
    id: 1,
    name: "KeunHwee",
    addmin: true,
  })
);

console.log("1nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요. 리덕스",
  })
);

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "두 번째. 리덕스",
  })
);

console.log("2nd", store.getState());

store.dispatch(logout());

console.log("3rd", store.getState());
