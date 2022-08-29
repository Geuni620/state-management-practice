import {useCallback, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "./actions/user";
import userSlice from "./reducers/user";
import {createSelector} from "@reduxjs/toolkit"; /// reselector

const priceSelector = (state) => state.user.prices;
const sumPriceSelector = createSelector(priceSelector, (prices) =>
  prices.reduce((acc, v) => acc + v, 0)
);

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const totalPrices = useSelector(sumPriceSelector);
  const [email, setEmail] = useState("");

  const onClick = useCallback(() => {
    dispatch(
      login({
        id: "keunhwee",
        pw: "비밀번호",
      })
    );
  }, [dispatch]);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(userSlice.actions.logout());
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
      <div>
        <b>{totalPrices}원</b>
      </div>
      <input type="email" value={email} onChange={onChangeEmail} />
    </div>
  );
}

export default App;
