import React from 'react';

const Todo = (props) => {

    //css backgound on hover
    let done_css_hover = ['row-todo-description'];
    if( props.task.done ){
        done_css_hover.push('notdone');
    }

    //css line through
    let done_css = ['row-todo-description-text'];
    if( props.task.done ){
        done_css.push('done');
    }

    //title text
    let done_title = (props.done) ? 'Mark todo as uncomplete' : 'Mark todo as complete';

    return (
        <div className="row-todo">
            <div className={done_css_hover.join(' ')} onClick={props.clickToggleDone} title={done_title}>
                <div className={done_css.join(' ')}>{props.task.todo}</div>
            </div>
            <div className="row-todo-delete" onClick={props.clickDelete} title="Delete todo">x</div>
        </div>
    );
}

export default Todo;
