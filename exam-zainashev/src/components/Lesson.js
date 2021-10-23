import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Linkify from "react-linkify";
import Answers from "./Answer";
import Tasks from "./Task";

const Lesson = (props) => {
  return (
    <div style={{ margin: "15px" }}>
      <Card className="bg-light text-black border-secondary">
        <Card.Header> {props.name}</Card.Header>
        <Card.Body>
          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="Описание">
              <Linkify>
                <Card.Text
                  style={{ whiteSpace: "pre-line", textAlign: "left" }}
                >
                  {props.text}
                </Card.Text>
              </Linkify>
            </Tab>
            <Tab eventKey="tasks" title="Задания">
              <Tasks id={props.id} />
            </Tab>
            <Tab eventKey="answers" title="Выполнение">
              <Answers id={props.id} />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Lesson;
