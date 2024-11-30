import React, { createRef } from 'react'

function Form() {

    const username = createRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        let nameValue = username.current.value;
        alert(nameValue);
    }

  return (
    <div>
        <form className='w-50' onSubmit={handleSubmit}>
            <div className="mb-3 text-center">
                <label for="nameInput" className="form-label">Enter Name</label>
                <input ref={username}  type="text" className="form-control" id="nameInput" placeholder='Enter Something' />
                <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
        </form>

    </div>
  )
}

export default Form