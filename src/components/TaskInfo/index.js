import React from 'react'
import './style.css'
export default function TaskInfo({
    index,
    data,
    handleChange,
    handleSubmit,
    type
}) {
    const today = new Date();
    const timeZoneOffset = today.getTimezoneOffset() * 60000; // Convert offset to milliseconds
    const localISODate = new Date(today - timeZoneOffset).toISOString().split('T')[0];

    if (!data.dueDate) {
        data.dueDate = localISODate;
    }
    return (
        <form className='form-container' onSubmit={() => handleSubmit()}>
            <input
                type='text'
                name='title'
                value={data?.title}
                placeholder='Add new task ...'
                className='task-input'
                required
                onChange={(e) => { index !== -1 ? handleChange(index, e.target.name, e.target.value) : handleChange(e) }}
            />
            <div className='task-des'>
                <label className='label'>Description</label>
                <textarea
                    name='description'
                    value={data?.description}
                    onChange={(e) => { index !== -1 ? handleChange(index, e.target.name, e.target.value) : handleChange(e) }}
                />
            </div>
            <div className='task-date-and-piority'>
                <div className='column-field'>
                    <label className='label'>Due Date</label>
                    <input
                        type='date'
                        name='dueDate'
                        className='input-field'
                        min={localISODate}
                        value={data?.dueDate}
                        onChange={(e) => { index !== -1 ? handleChange(index, e.target.name, e.target.value) : handleChange(e) }}
                    />
                </div>
                <div className='column-field'>
                    <label className='label'>Piority</label>
                    <select
                        name='piority'
                        className='input-field'
                        value={data?.piority || '1'}
                        onChange={(e) => { index !== -1 ? handleChange(index, e.target.name, e.target.value) : handleChange(e) }}
                    >
                        <option value='0'>Low</option>
                        <option value='1'>Normal</option>
                        <option value='2'>High</option>
                    </select>
                </div>
            </div>
            <button type='submit' className='submit-button'>{type}</button>
        </form>
    )
}
