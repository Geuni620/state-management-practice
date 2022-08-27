import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "./actions/user";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const po sts = useSelector((state) => state.posts);

  const onClick = useCallback(() => {
    dispatch(
      login({
        id: "keunhwee",
        pw: "비밀번호",
      })
    );
  }, [dispatch]);

  const onLogOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="App">
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.data ? (
        <div>{user.data.nickName}</div>
      ) : (
        "로그인 해주세요."
      )}
      {!user.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogOut}>로그아웃</button>
      )}
    </div>
  );
}

export default App;
