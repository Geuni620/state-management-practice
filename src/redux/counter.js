import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
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
