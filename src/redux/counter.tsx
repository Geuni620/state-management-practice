import React from "react";
import type {RootState} from "./store";
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        증가
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        감소
      </button>
    </div>
  );
};

/*
버튼을 클릭할 때마다 Redux action이 store로 스토어로 발송(dispatch)
counter slice reducer가 dispatch를 보고 상태 업데이트함.
<Counter> 컴포넌트는 스토어로부터 전달받은 새로운 상태값을 보고, 새로운 데이터 자체를 리렌더링
*/
