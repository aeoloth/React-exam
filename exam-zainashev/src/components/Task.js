import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Linkify from "react-linkify";
import checklists from "../jsons/checklists";
import "./Lessons.css";
import "./Task.css";

const Tasks = (props) => {
  return (
    <Linkify>
      <ListGroup as="ul" bg="light" variant="light" className="TaskListGroup">
        {checklists.map((checklist) => {
          if (checklist.idChecklist === props.id) {
            return (
              <ListGroup.Item key={checklist.id} variant="light">
                {checklist.name}
              </ListGroup.Item>
            );
          }
        })}
      </ListGroup>
    </Linkify>
  );
};

export default Tasks;
