import React, { useState } from 'react';
import InputTodo from './InputTodo/InputTodo';
import Todo from './Todo/Todo';
import './App.css';

function App() {

  //state list of todos
  const [taskListState, setTaskListState] = useState({
    list: JSON.parse(localStorage.getItem("todo-list-react-v1")) || []
  });

  //input text
  const [inputTextState, setInputTextState] = useState("");

  /**
   * Function to save current list to localstorage
   */
  const saveList = (updatedTaskList) => {
    localStorage.setItem('todo-list-react-v1', JSON.stringify(updatedTaskList));
  }

  /**
   * Function to add todo
   */
  const addTodoHandler = () => {
    //deconstruct array and add new todo
    let updatedTaskList = [...taskListState.list, {
        todo: inputTextState, 
        done:false
    }];
    //update state
    setTaskListState({
        list: updatedTaskList
    });
    setInputTextState("");

    //save list to localstorage
    saveList(updatedTaskList);
  }

  /**
   * Function to update a todo as done / not done
   * 
   * @param {int} index of state taskList
   */
  const todoToggleDoneHandler = (index) => {
    //deconstruct array
    let updatedTaskList = [...taskListState.list];
    //update status of todo
    updatedTaskList[index].done = !updatedTaskList[index].done;
    //update state
    setTaskListState({
      list: updatedTaskList
    });

    //save list to localstorage
    saveList(updatedTaskList);
  }

  /**
   * Function to remove a task
   * 
   * @param {int} index of state taskList
   */
  const deleteTodoHandler = (index) => {
    //deconstruct array
    let updatedTaskList = [...taskListState.list];
    //remove element in array
    updatedTaskList.splice(index, 1);
    //update state
    setTaskListState({
      list: updatedTaskList
    });

    //save list to localstorage
    saveList(updatedTaskList);
  }

  return (
    <div className="App">
      <div id="list-container">
          <div id="list-title">
              Todo list
          </div>
          <InputTodo 
          inputText={inputTextState}
          setInputText={setInputTextState}
          clickAddTodo={addTodoHandler}
          />
          <div id="list-all-task">
            {
            //loop all todos and return Todo component
            taskListState.list.map( (task, index) => {
              return <Todo 
                key={index}
                task={task}
                clickToggleDone={() => todoToggleDoneHandler(index)} 
                clickDelete={() => deleteTodoHandler(index)}
                />
            } )
            }
          </div>
      </div>
    </div>
  );
}

export default App;
