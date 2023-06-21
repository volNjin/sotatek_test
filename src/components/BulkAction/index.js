import React from 'react'
import './style.css'
export default function BulkAction({ handleDone, handleRemove }) {
    return (
        <div className='bottom-div'>
            <div className='text'>Bulk Action:</div>
            <div className='button-field'>
                <button className='bottom-done-button' onClick={() => handleDone()}>Done</button>
                <button className='bottom-remove-button' onClick={() => handleRemove()}>Remove</button>
            </div>
        </div>
    )
}
