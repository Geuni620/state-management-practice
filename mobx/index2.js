const {observable, runInAction} = require("mobx");

const userState = observable({
  isLoggingIn: true,
  data: null,
});

const postState = observable([]);

runInAction(() => {
  postState.push({id: 1, content: "안녕하세요."});
  userState.data({
    id: 1,
    nickname: "keunHwee",
  });
});
