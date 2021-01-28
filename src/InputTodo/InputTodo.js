import React from 'react';

const InputTodo = (props) => {

    const inputTextChangeHandler = (e) => {
        props.setInputText(e.target.value);
    }
    
    return (
        <div className="list-add-task">
            <input type="text" value={props.inputText} onChange={inputTextChangeHandler} placeholder="Todo description" />
            <input type="button" value="Add todo" onClick={props.clickAddTodo}/>
        </div>
    );
}

export default InputTodo;
