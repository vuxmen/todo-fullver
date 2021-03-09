import React from 'react';
import style from './NewTask.module.css';

export default function NewTask () {
    return (
        <div className = {style.newtask}>
            <h3>New Task</h3>
            <input type="text"/>
        </div>
    );
}