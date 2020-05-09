import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { size, map } from "lodash";
import firebase from "./utils/firebase";
import "firebase/firestore";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import "./App.scss";

const db = firebase.firestore(firebase);

function App() {
  const [tasks, setTasks] = useState([]);
  const [relodTasks, setRelodTasks] = useState(false);

  useEffect(() => {
    db.collection("tasks")
      .orderBy("completed")
      .get()
      .then((response) => {
        const arrayTasks = [];
        map(response?.docs, (task) => {
          const data = task.data();
          data.id = task.id;
          arrayTasks.push(data);
        });
        setTasks(arrayTasks);
      });
    setRelodTasks(false);
  }, [relodTasks]);

  return (
    <Container fluid className="app">
      <div className="title">
        <h1>To Do List</h1>
      </div>

      <Row className="todo">
        <Col
          className="todo__title"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <h2>Today</h2>
        </Col>
        <Col
          className="todo__list"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          {size(tasks) === 0 ? (
            <div className="loading">
              {" "}
              <Spinner animation="border" />
              <span> There are no tasks...</span>
            </div>
          ) : (
            map(tasks, (task, index) => (
              <Task key={index} task={task} setRelodTasks={setRelodTasks} />
            ))
          )}
        </Col>
        <Col
          className="todo__input"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddTask setRelodTasks={setRelodTasks} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
