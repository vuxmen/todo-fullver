import React from 'react';
import style from './TodoItem.module.css';

export default function TodoItem ({name, createdDate}) {
    return (
        <div className = {style.item}>
            <input type="text" value = {name}/>
        </div>
    );
}