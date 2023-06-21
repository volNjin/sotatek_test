import React, { useState, useEffect } from 'react'
import './style.css'
import TaskInfo from '../TaskInfo';

export default function TaskBox({ index, data, handleChange, handleRemoveClick, handleCheck, handleSubmit }) {
    const [showData, setShowData] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const detailField = document.getElementById('detail-field');
            if (event.target !== detailField 
                && event.target.parentNode !== detailField 
                && event.target.parentNode.parentNode !== detailField
                && event.target.parentNode.parentNode.parentNode !== detailField
                ) {
                setShowData(false);
            }
        };
        window.addEventListener('mouseup', handleOutsideClick);
    }, []);

    const handleCheckboxChange = (checked) => {
        handleCheck(checked);
        handleChange(index, 'isChecked', checked);
    };

    const handleDetailClick = () => {
        setShowData(true);
    }

    return (
        <div className='result-field'>
            <div className='box-container'>
                <input
                    type="checkbox"
                    name="isChecked"
                    className='checkbox'
                    checked={data.isChecked}
                    onChange={(e) => handleCheckboxChange(e.target.checked)}
                />
                <div className='task-name'>{data.title}</div>
                <div className='button-field'>
                    <button className='detail-button' onClick={() => handleDetailClick()}>Detail</button>
                    <button className='remove-button' onClick={() => handleRemoveClick(index)}>Remove</button>
                </div>
            </div>

            {showData &&
                <div className='detail-field' id='detail-field'>
                    <TaskInfo
                        index={index}
                        data={data}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        type={'Update'}
                    />
                </div>
            }
        </div>
    )
}
