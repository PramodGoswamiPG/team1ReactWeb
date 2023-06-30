import React from "react"
export default function (props) {
return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign up</h3>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Name"
            />
          </div>

          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="tel"
              className="form-control mt-1"
              placeholder="Phone Number"
            />
          </div>

          <div className="form-group mt-3">
            <label>Coupon Code</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Coupon code"
            />

           <div className="form-group mt-3">
            <label>Role</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Role"
            />
          </div>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )
}