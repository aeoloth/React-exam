import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import tasks from "../jsons/tasks";
import Lesson from "./Lesson";
import "./Lessons.css";

const Lessons = (props) => {
  let match = useRouteMatch();
  {
    return (
      <BrowserRouter>
        <div>
          <ListGroup as="ul" bg="dark" variant="dark" className="links">
            {tasks.map((task) => (
              <ListGroup.Item key={task.id} variant="dark">
                <Link to={`${match.url}/${task.idShort}`} className="link">
                  Урок {task.idShort}: {task.name}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Switch>
            {tasks.map((task) => (
              <Route key={task.id} path={`${match.path}/${task.idShort}`}>
                <Lesson
                  id={task.id}
                  name={task.name}
                  text={task.desc}
                  className="lesson"
                />
              </Route>
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default Lessons;
