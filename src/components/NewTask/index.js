import React, { useState } from 'react'
import './style.css'
import TaskInfo from '../TaskInfo'

export default function NewTask({ data }) {
    const nullData = {
        'title': '',
        'description': '',
        'dueDate': '',
        'piority': '1',
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
            const dueDateComparison = new Date(a.dueDate) - new Date(b.dueDate);
            if (dueDateComparison !== 0) {
                return dueDateComparison;
            }

            // If 'dueDate' values are the same, compare 'piority' values
            const piorityComparison = b.piority.localeCompare(a.piority);
            return piorityComparison;
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
