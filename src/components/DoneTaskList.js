import React from 'react';
import style from './TaskList.module.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TodoItem from './TodoItem';

export default function DoneTaskList ({completedTasks}) {
    return (
        <div className = {style.tasklist}>
            <div className = {style.title}>
                <p>Done Tasks</p>
                <ExpandMoreIcon className = {style.expandIcon}/>
            </div>
            <div>
                {completedTasks.map(item => <TodoItem 
                    name = {item.name}
                    createdDate = {item.createdDate}
                    key = {item.name}
                />)}
            </div>
        </div>
    );
}