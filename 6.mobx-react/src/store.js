const {observable} = require("mobx");

// 객체같은 경우 @observerable 사용할 수 없음
const userStore = observable({
  isLoggingIn: false,
  data: null,

  login(data) {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.data = data;
      this.isLoggingIn = false;
      postStore.data.push(1); // redux에 비해 편한 점
    }, 2000);
  },

  logout() {
    this.data = null;
  },
});

const postStore = observable({
  data: [],
  addPost(data) {
    this.data.push(data);
  },
});

export {userStore, postStore};
