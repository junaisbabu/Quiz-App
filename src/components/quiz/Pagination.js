import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { context } from "../../App";
import { questions } from "../../mcq/questions";
import "./pagination.css";
import { useNavigate } from "react-router-dom";

function Pagination(props) {
  const navigate = useNavigate();
  const value = useContext(context);
  const setMcqQuestion = value[1];

  const count = props.count;
  const setCount = props.setCount;

  return (
    <div className="pagination-container">
      <Button
        variant="primary"
        disabled={count === 1 ? true : false}
        onClick={() => {
          setCount(count - 1);
          setMcqQuestion(questions[count]);
        }}
      >
        Return
      </Button>

      {count !== 10 ? (
        <span className="page-num">{`${count} / 10`}</span>
      ) : (
        <Button
          className="submit-btn"
          variant="warning"
          onClick={() => navigate("/result")}
        >
          Submit
        </Button>
      )}

      <Button
        variant="primary"
        disabled={count === 10 && true}
        onClick={() => {
          setCount(count + 1);
          setMcqQuestion(questions[count]);
          console.log(count);
        }}
      >
        Skip
      </Button>
    </div>
  );
}

export default Pagination;
