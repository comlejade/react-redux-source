/**
 *
 * @param {*} reducer 处理器
 * @param {*} initState 初始化数据
 * @returns
 */
function createStore(reducer, initState) {
  let state = initState;
  // 保存监听的函数
  let listeners = [];

  // 获取最新的数据
  function getState() {
    return state;
  }

  // 执行方法
  function dispatch(action) {
    state = reducer(state, action); // 获取到最新的数据
    listeners.forEach((listener) => listener());
  }

  // 订阅
  function subscribe(listener) {
    listeners.push(listener);
    // 取消订阅，防止内存泄漏
    return () => {
      listeners = listeners.filter((item) => item !== listener);
    };
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}

export default createStore;
