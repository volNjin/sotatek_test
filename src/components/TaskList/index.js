import React, { useState } from 'react'
import './style.css'
import TaskBox from '../TaskBox';

export default function TaskList({ data, setData, handleCheck }) {
    const [searchKey, setSearchKey] = useState('');
    console.log(data)
    const handleSearch = (event) => {
        setSearchKey(event.target.value);
    }
    const filteredData = data.filter((item) => {
        const title = item.title || '';
        return title.toLowerCase().includes(searchKey.toLowerCase());
    });
    const handleChange = (index, name, value) => {
        const updatedData = [...data];
        updatedData[index][name] = value;
        setData(updatedData);
        if (name === 'isChecked') {
            localStorage.setItem('myData', JSON.stringify(updatedData));
        }
    }

    const handleRemoveClick = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        localStorage.setItem('myData', JSON.stringify(updatedData));
        setData(updatedData);
    }

    const handleSubmit = () => {
        localStorage.setItem('myData', JSON.stringify(data));
    }

    return (
        <div className='tasklist-container'>
            <p className='title'>
                To Do List
            </p>
            <input
                type='text'
                value={searchKey}
                placeholder='Search ...'
                className='search-task-input'
                onChange={handleSearch}
            />
            <div className='scroll-box'>
                {filteredData?.map((task, index) => (
                    < TaskBox
                        key={index}
                        index={index}
                        data={task}
                        handleCheck={handleCheck}
                        handleChange={handleChange}
                        handleRemoveClick={handleRemoveClick}
                        handleSubmit={handleSubmit}
                    />
                ))}
            </div>
        </div>
    )
}
