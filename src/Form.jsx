import React,{useState} from 'react'

function Form() {

    const [formValues,setFormValues] = useState({
        username : 'Test something'
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    const handleChange = (e) => {
        setFormValues({
            username : e.target.value
        })
    }


  return (
    <div>
        <form className='w-50' onSubmit={handleSubmit}>
            <div className="mb-3 text-center">
                <label for="nameInput" className="form-label">Enter Name</label>
                <input 
                    value={formValues.username}
                    type="text" 
                    className="form-control" 
                    id="nameInput" 
                    placeholder='Enter Something' 
                    onChange={handleChange}
                />
                <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
        </form>

    </div>
  )
}

export default Form