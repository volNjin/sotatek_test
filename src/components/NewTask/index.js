import React, { useState, useEffect } from 'react'
import './style.css'
import TaskInfo from '../TaskInfo'

export default function NewTask({ data }) {
    const nullData = {
        'title': '',
        'description': '',
        'dueDate': '',
        'piority': 'normal',
        'isChecked': false,
    }

    const [newData, setNewData] = useState(nullData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleAdd = () => {
        const updatedData = [...data, newData];
        const sortedData = [...updatedData].sort((a, b) => {
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
        localStorage.setItem('myData', JSON.stringify(sortedData));
    }

    return (
        <div className='newtask-container'>
            <p className='title'>
                New Task
            </p>
            <TaskInfo index={-1} data={newData} handleChange={handleChange} handleSubmit={handleAdd} type={'Add'} />
        </div>
    )
}
