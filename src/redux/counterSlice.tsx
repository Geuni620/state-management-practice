import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};
// 슬라이스를 만들려면 슬라이스르 식별하는 'name: 문자열 이름', 'initialState: 초기 상태값', '상태업데이트 방법을 정희하는 하나 이상의 reducer 함수'가 필요
// 슬라이스가 생성되면 생성된 redux 액션 생성자와, 전체 슬라이스에 대한 reducer 함수를 내보낼 수 있음.
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// 각 케이스 리듀서 함수에 대해 액션 생성자 생성
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// coutnerSlice의 reducer를 내보냄
export default counterSlice.reducer;
