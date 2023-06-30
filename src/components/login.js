
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
export default function (props) {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })


  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  

  if (authMode === "signin") {

    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
              <a class="nav-link" href="./registration">sign up</a>
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
            type="email" name="email" id="email"
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
            className="form-control mt-1"
            placeholder="Enter Email"
            />
             {formik.touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
            </div>
            <div className="form-group mt-3">
              <label for="psw">Password</label>
              <input
                type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                className="form-control mt-1"
                placeholder="Enter password"
              />
              
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <div className="d-grid gap-2 mt-3">
              <a type="submit" href="./get-otp" className="btn btn-primary">
                login With OTP
              </a>
            </div>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="./forgotpassword">password?</a>
            </p>
          </div>
          
        </form>
      </div>
    )
  }
  

}