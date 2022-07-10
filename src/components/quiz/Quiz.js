import React, { useContext, useState } from "react";
import { Container, ListGroup, Col, Form } from "react-bootstrap";
import Pagination from "./Pagination";
import { context } from "../../App";

import "./quiz.css";
import Header from "./Header";
import { questions } from "../../mcq/questions";

export let score = 0;

function Quiz() {
  const value = useContext(context);
  const mcqQuestion = value[0];
  const setMcqQuestion = value[1];

  const [count, setCount] = useState(1);

  let option = mcqQuestion.options.map((item, index) => {
    return (
      <>
        <Form.Check
          key={index + "" + count}
          className="list"
          type="checkbox"
          id={index + "" + count}
          label={`${item}`}
          onClick={() => {
            if (index + 1 === mcqQuestion.answer) {
              score += 1;
            }
            setTimeout(() => {
              setCount(count + 1);
              setMcqQuestion(questions[count]);
              console.log("c2: " + count);
            }, 500);
          }}
        />
      </>
    );
  });

  return (
    <>
      <Header />
      <Container className="quiz-container">
        <Col xs={12} sm={11} md={10} lg={6}>
          <ListGroup className="list-container">
            <ListGroup.Item className="question-text list-item">
              <h1>{mcqQuestion.question}</h1>
            </ListGroup.Item>

            <div className="options-container">
              <Form>{option}</Form>
            </div>
          </ListGroup>
        </Col>
      </Container>
      <Pagination count={count} setCount={setCount} />
    </>
  );
}

export default Quiz;
