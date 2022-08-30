const {observable, autorun, action, runInAction, reaction} = require("mobx");

const state = observable({
  compA: "a",
  compB: 12,
  compC: null,
  compD: 3,
});

/** 무언가 바뀐게 있다면 감지해줌 */
autorun(() => {
  console.log("changed", state.compA);
});

/** autorun과 reaction 모두 감지기임
 * 어떤 state가 바뀌면 뭐든 다 감지하는 건 -> auturun
 * 첫 번째 함수에서 return하는 값이 바뀌었을 때만 실행이 됨 -> reaction
 */
reaction(
  () => {
    return state.compB;
  },
  () => {
    console.log("reaction", state.compB);
  }
);

/**
 * runInAction은 바로 실행되고, action은 함수처럼 만들어 놓아서 필요할 때만 실행 할 수 있음.
 */
const change = action(() => {
  state.compA = "b";
  state.compB = 123;
  state.compC = "b";
  state.compD = "c";
});

/** Mobx가 변경사항을 한번에 묶어서 실행 */
runInAction(() => {
  state.compA = "b";
  state.compB = 123;
  state.compC = "b";
  state.compD = "c";
});

runInAction(() => {
  state.compA = "d";
});
