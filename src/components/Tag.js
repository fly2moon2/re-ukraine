// redux toolkit way...
import React, { Component }  from 'react';
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
    </>
  );

  
};

export default Tag;