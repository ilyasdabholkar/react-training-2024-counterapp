import React, { useState } from "react";
import { z } from "zod";

const schema = z.object({
  fullname: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be atleast 10 digits"),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  accountType: z.enum(["current", "savings"], {
    errorMap: () => ({ message: "Please select account type" }),
  }),
  amount: z.string().min(1, "Balance amount is required"),
});

function AccountForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    gender: "",
    accountType: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    const fieldSchema = schema.pick({ [field]: true });
    const result = fieldSchema.safeParse({ [field]: value });

    if (!result.success) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: result.error.format()[field],
      }));
    } else {
      setErrors((prevErrors) => {
        const { [field]: removed, ...rest } = prevErrors;
        return rest;
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const result = schema.safeParse(formData);
    if(!result.success){
        const zodErrors = result.error.format();
        setErrors(zodErrors);
    }else{
        setErrors({});
        //submit my form
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name,value)
  };

  return (
    <>
      <form style={{ width: "50%" }} onSubmit={handleSubmit}>
        <fieldset className="border p-3">
          <legend className="float-none w-auto px-2 m-0">
            Create New Account
          </legend>

          <div className="mb-2">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="form-control"
              placeholder="Enter Full Name"
              value={formData.fullname}
              onChange={handleChange}
            />
              {errors.fullname && (
                  <span className="text-danger">{errors.fullname._errors[0]}</span>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
             {errors.email && (
                  <span className="text-danger">{errors.email._errors[0]}</span>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Enter Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
                  <span className="text-danger">{errors.phone._errors[0]}</span>
            )}

          </div>

          <div className="mb-2">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="gender1"
                name="gender"
                className="form-check-input"
                value="male"
                onChange={handleChange}
                checked={formData.gender == "male"}
              />
            <label htmlFor="gender1" className="form-label">
              Male
            </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="gender2"
                name="gender"
                className="form-check-input"
                value="female"
                onChange={handleChange}
                checked={formData.gender == "female"}
              />
            <label htmlFor="gender1" className="form-label">
              Female
            </label>
            {errors.gender && (
                  <span className="text-danger d-block">{errors.gender._errors[0]}</span>
                )}

            </div>
            <div className="mb-3">
                <label htmlFor="accountType" className="form-label">
                  Account Type
                </label>
                <select
                  id="accountType"
                  className="form-select"
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                >
                  <option value="">-- Select Account --</option>
                  <option value="current">Current</option>
                  <option value="savings">Savings</option>
                </select>
                {errors.accountType && (
                  <span className="text-danger">{errors.accountType._errors[0]}</span>
                )}
              </div>
    
              <div className="mb-2">
                <label htmlFor="amount" className="form-label">Balance Amount</label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  className="form-control"
                  placeholder="Enter Balance Amount.."
                  value={formData.amount}
                  onChange={handleChange}
                />
                {errors.amount && (
                  <span className="text-danger">{errors.amount._errors[0]}</span>
                )}

            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default AccountForm;
