// redux toolkit way...

import { useSelector, useDispatch } from "react-redux";

import { tagActions } from "../store/tag";

const Tag = () => {
  const dispatch = useDispatch();
  const tag = useSelector((state) => state.tag.label);
  const show = useSelector((state) => state.tag.showTag);
/*
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  }; */

  return (
    <>
    {show &&<div>{tag}</div>}
 {/*        <div className="task">
      <div className="task-header">
        <div>{props.task.title}</div>
        <select value={props.task.status} onChange={onStatusChange}>
          {TASK_STATUSES.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>
      <hr />
      <div className="task-body">{props.task.description}</div>
    </div>
      {show && <div>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 10</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button> */}
    </>
  );

  
};

export default Tag;