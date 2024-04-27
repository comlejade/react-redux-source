// 合并 action 和 dispatch

function bindActionCreators(actionCreators, dispatch) {
  let bindActions = {};

  for (let key in actionCreators) {
    // 获取方法
    let actionCreator = actionCreators[key];
    bindActions[key] = bindCreators(actionCreator, dispatch);
  }

  return bindActions;
}

function bindCreators(actionCreator, dispatch) {
  return function (...args) {
    return dispatch(actionCreator(...args));
  };
}

export default bindActionCreators;
