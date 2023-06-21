import React, { useState, useEffect } from 'react';
import './style.css';
import NewTask from '../../components/NewTask';
import TaskList from '../../components/TaskList';
import BulkAction from '../../components/BulkAction';
function MainPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const storedData = localStorage.getItem('myData');
        if (storedData) {
            const parsedData = storedData ? JSON.parse(storedData) : [];
            setData(parsedData);
        }
    }, [setData]);
    const [showDiv, setShowDiv] = useState(false);

    const handleCheck = (isChecked) => {
        if (isChecked) {
            setShowDiv(true);
        }
    }

    const handleDone = () => {
        setShowDiv(false);
    }

    const handleRemove = () => {
        const updatedData = data.filter(item => !item.isChecked);
        localStorage.setItem('myData', JSON.stringify(updatedData));
        setData(updatedData);
    }

    return (
        <div className="main-screen">
            <div className='main-container'>
                <div className='left-side'>
                    <NewTask data={data} />
                </div>
                <div className='devider' />
                <div className='right-side'>
                    <TaskList data={data} setData={setData} handleCheck={handleCheck} />
                    {showDiv &&
                        <BulkAction handleDone={handleDone} handleRemove={handleRemove} />
                    }
                </div>
            </div>
        </div>
    );
}

export default MainPage;
