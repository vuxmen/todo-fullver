import React from 'react';
import style from './TaskList.module.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TodoItem from './TodoItem';

export default function TaskList ({incompletedTasks}) {
    return (
        <div className = {style.tasklist}>
            <div className = {style.title}>
                <p>TaskList</p>
                <ExpandMoreIcon className = {style.expandIcon}/>
            </div>
            <div>
                {incompletedTasks.map(item => <TodoItem 
                    name = {item.name}
                    createdDate = {item.createdDate}
                    key = {item.name}
                />)}
            </div>
        </div>
    );
}