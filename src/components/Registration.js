import React, { useState } from "react"
import { useFormik } from 'formik'


const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}
export default function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  
return (
  
 <div className="Auth-form-container w-100 h-75">
      <form className="Auth-form ">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign up</h3>
          <div className="form-group mt-2">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="form-group mt-1">
            <label>Email</label>
            <input
            type="email" name="email" id="email"
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
            className="form-control mt-1"
            placeholder="Enter Email"
            required
            />
             {formik.touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
          </div>

          <div className="form-group mt-1">
            <label>Phone Number</label>
            <input
                type="text" 
                id="userPhone"
                pattern="[6-9]{1}[0-9]{9}"
                maxLength={10}
              className="form-control mt-1"
              placeholder="Phone Number"
              required
          />
          </div>

          <div className="form-group mt-1">
            <label>PAN</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="PAN"
              maxLength={10}
              required
             
            />
          </div>
          <div className="form-group mt-1">
            <label>GST</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="GST"
              maxLength={10}
              required
              
            />
          </div>

          <div className="form-group mt-1">
            <label>Enter type</label>
            <select  class="form-select"  required aria-label="Default select example">
  <option selected>Select</option>
  <option value="1">Mart</option>
  <option value="2">Outlet</option>
  
</select>
          </div>


          <div className="form-group mt-1">
            <label>Coupon Code</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Coupon code"
              required
            
            />

           <div className="form-group mt-1">
            <label> Enter Role</label>
            <select class="form-select"   required  aria-label="Default select example">
  <option selected>Select</option>
  <option value="1">Manager</option>
  <option value="2">Dealer</option>
  
</select>
          </div>
          </div>
          <div className="form-group mt-1">
            <label for="psw">Password</label>
            <input
              type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
              className="form-control mt-1"
              placeholder="Password"
              
              
            />
          </div>
          <div className="d-grid gap-2 mt-1">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )
}