import React, {Component} from "react";
import {observer} from "mobx-react";
import {observable} from "mobx";

import {userStore, postStore} from "./store";

class App extends Component {
  // 일반적으로 컴포넌트 안에서만 state를 사용하고 싶을 때,
  // react에서는 setState를 사용하지 않아도 됨
  state = observable({
    name: "",
    password: "",
  });

  onClick = () => {
    userStore.login({
      nickname: "keunhwee",
      password: 123,
    });
  };

  onLogout = () => {
    userStore.logout();
  };

  onChangeName = (e) => {
    this.state.name = e.target.value;
  };

  onChangePassword = (e) => {
    this.state.password = e.target.value;
  };

  render() {
    return (
      <div>
        {userStore.isLoggingIn ? (
          <div>로그인 중</div>
        ) : userStore.data ? (
          <div>{userStore.data.nickname}</div>
        ) : (
          "로그인 해주세요."
        )}
        {!userStore.data ? (
          <button onClick={this.onClick}>로그인</button>
        ) : (
          <button onClick={this.onLogout}>로그아웃</button>
        )}
        <div>{postStore.data.length}</div>
        <input value={this.state.name} onChange={this.onChangeName} />
        <input
          value={this.state.password}
          type="password"
          onChange={this.onChangePassword}
        />
      </div>
    );
  }
}

export default observer(App);
