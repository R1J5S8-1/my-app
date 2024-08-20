import React from "react";

function Display() {
  return (
    <div className="container-fluid d-flex sample my-5 mx-auto">
      <div className="d-flex gap-3">
        <ToDoCard />
        <Doing />
        <Done />
      </div>
    </div>
  );
}

function ToDoCard() {
  return (
    <div className="card custom-card">
      <div>
        <p className="float-left">To Do</p>
        <i className="bi-plus float-right"></i>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <i className="bi bi-plus text-primary fs-4">Add a task</i>
        </li>
        <li className="list-group-item">
          <input type="checkbox" name="Apple" id="a" />
          <label htmlFor="a">This is a demo board</label>
        </li>
        <li className="list-group-item">
          <input type="checkbox" name="Apple" id="b" />
          <label htmlFor="b">You can play with it</label>
        </li>
        <li className="list-group-item">
          <input type="checkbox" name="Apple" id="c" />
          <label htmlFor="c">I am a task</label>
          <ul>
            <li className="list-group-item">
              <input type="checkbox" name="Apple" id="d" />
              <label htmlFor="d">And I am a subtask</label>
            </li>
            <li className="list-group-item">
              <input type="checkbox" name="Apple" id="e" />
              <label htmlFor="e">Add a note</label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

function Doing() {
  return (
    <div className="card custom-card">
      <div>
        <p className="float-left">Doing</p>
        <i className="bi bi-plus float-right"></i>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <i className="bi bi-plus text-primary">Add a task</i>
        </li>
        <li className="list-group-item">
          <input type="checkbox" name="Apple" id="a" />
          <label htmlFor="a">You can drag me anywhere in this list</label>
        </li>
        <li className="list-group-item">
            <input type="checkbox" name="Apple" id='b'/>
            <label htmlFor="b">Inside a subtask</label>
        </li>
        <li className="list-group-item">
            <input type="checkbox" name="Apple" id="c" />
            <label htmlFor="c">And also to another list</label>         
        </li>
        <li className="list-group-item">
            <input type="checkbox" name="Apple" id="d" />
            <label htmlFor="d">And reorder the lists themselves</label>
        </li>
      </ul>
    </div>
  );
}

function Done() {
    return (
        <div className="card custom-card">
            <div>
                <p className="float-left">Done</p>
                <i className="bi bi-plus float-right"></i>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    <i className="bi bi plus text-primary">Add a task</i>
                </li>
                <li className="list-group-item">
                    <input type="checkbox" name="Apple" id="a" />
                    <label htmlFor="a">You can mark me as completed</label>
                </li>
            </ul>
        </div>
    )
}

export default Display;
