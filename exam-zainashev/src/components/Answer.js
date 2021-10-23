import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Linkify from "react-linkify";
import answers from "../jsons/answers";
import "./Lessons.css";
import "./Task.css";

const Answers = (props) => {
  return (
    <Linkify>
      <ListGroup as="ul" bg="light" variant="light" className="TaskListGroup">
        {answers.map((answer) => {
          if (answer.idTask === props.id) {
            return (
              <ListGroup.Item key={answer.id} variant="light">
                {answer.text}
              </ListGroup.Item>
            );
          }
        })}
      </ListGroup>
    </Linkify>
  );
};

export default Answers;
