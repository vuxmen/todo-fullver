import React from 'react';
import style from './TodoTask.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NewTask from './NewTask';
import TaskList from './TaskList';
import DoneTaskList from './DoneTaskList';

export default function TodoTask () {
    const taskList = [
        {
            name: 'Learn Python Programing',
            createdDate: new Date(),
            isDone: false,
            isFavorite: true
        },
        {
            name: 'Go to BookStore',
            createdDate: new Date(),
            isDone: true,
            isFavorite: false
        },
        {
            name: 'Go to bed',
            createdDate: new Date(),
            isDone: false,
            isFavorite: false
        },
        {
            name: 'Coding a Company',
            createdDate: new Date(),
            isDone: true,
            isFavorite: true
        },
        {
            name: 'Go to Coding Laboratory',
            createdDate: new Date(),
            isDone: false,
            isFavorite: true
        },
        {
            name: 'Reading Programing Book',
            createdDate: new Date(),
            isDone: false,
            isFavorite: true
        }
    ];

    const incompletedTasks = taskList.filter(item => item.isDone === false);
    const completedTasks = taskList.filter(item => item.isDone === true);


    return (
        <div className = {style.todotask}>
            <div className = {style.header}>
                <h2>Hi, Vu !</h2>
                <div className = {style.logoutArea}>
                    <ExitToAppIcon className = {style.signOutIcon}/>
                    <span>Đăng xuất</span>
                </div>
            </div>
            <div className = {style.body}>
                <NewTask />
                <TaskList incompletedTasks = {incompletedTasks}/>
                <DoneTaskList completedTasks = {completedTasks}/>
            </div>
        </div>
    );
}