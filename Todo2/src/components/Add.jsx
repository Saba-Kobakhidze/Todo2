import React from 'react'

const Add = ({ onAdd }) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value);
        e.target.name.value = "";
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <h1>TODO LIST BY API</h1>
                <input placeholder='Add Todo items' name='name' required />
                <button onSubmit={handleOnSubmit}>Add</button>
            </form>
        </div>
    )
}

export default Add