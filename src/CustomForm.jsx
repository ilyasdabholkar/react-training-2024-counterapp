
import React from 'react'
import { useState } from 'react'

function CustomForm() {
    const [formValues,setFormValues] = useState({
        title : "",
        genre : "",
        stock : "",
        rating : ""
    });

    const [formErrors,setFormErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if(Object.keys(formErrors).length == 0){
            alert("form submitted");
            console.log(formValues);
        }
      
    }

    
    const handleChange = (e) => {
        const {id,value} = e.target;

        console.log(`ID : ${id}`)
        console.log(`VALUE : ${value}`)
        setFormValues((prevState)=>({
            ...prevState,
            [id] : value
        }))
    }

    const validate = (values) => {
        const errors = {}
        if(values.title.trim() == ""){
            console.log("title is empty");
            errors.title = "Title is required";
        }

        if(values.genre.trim() == "" || values.genre.trim() == "SELECT"){
            errors.genre = "Genre is required";
        }

        console.log("returning errors ")
        console.log(errors);
        return Object.keys(errors).length === 0 ? {} : errors;
    }

  return (
   <div className='d-flex justify-content-center mt-5'>
        <form className='w-50' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='title'>Title</label>
                <input 
                    type="text"
                    className='form-control'
                    id="title"
                    name="title"
                    onChange={handleChange}
                    placeholder='Enter Title'
                />
                {formErrors.title && <small id="titleError" className="text-danger">{formErrors.title}</small>}
            </div> 
            <div className='form-group'>
                <label htmlFor='genre'>Genre</label>
                <select 
                    className="form-select" 
                    defaultValue={'SELECT'} 
                    id="genre"
                    name="genre"
                    onChange={handleChange}
                >
                    <option value="SELECT">Select Genre</option>
                    <option value="1">Actions</option>
                    <option value="2">Comedy</option>
                    <option value="3">Horror</option>
                </select>
                {formErrors.genre && <small id="genreError" className="text-danger">{formErrors.genre}</small>}
            </div> 

            <div className='form-group'>
                <label htmlFor='stock'>Stock</label>
                <input 
                        type="number"
                        className='form-control'
                        id="stock"
                        name="stock"
                        onChange={handleChange}
                        placeholder='Enter Stock'
                    />
            </div>

            <div className='form-group'>
                <label htmlFor='rating'>Rating</label>
                <input 
                        type="number"
                        className='form-control'
                        id="rating"
                        name="rating"
                        onChange={handleChange}
                        placeholder='Enter Rating'
                    />
            </div>

            <button type="submit" className='btn btn-primary mt-2'>Submit</button>
        </form>
   </div>
  )
}

export default CustomForm