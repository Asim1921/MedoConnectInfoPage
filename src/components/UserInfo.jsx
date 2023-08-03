import React, { Component } from "react";
import userimage from "../images/user--image--square.jpg";
import userInfo from "./userData";

class LabReports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailPrefix: "", // State variable for email prefix
      emailDomain: "gmail.com", // Default domain
    };
  }

  // Event handler to update email prefix state
  handleEmailPrefixChange = (event) => {
    this.setState({ emailPrefix: event.target.value });
  };

  // Event handler to update email domain state
  handleEmailDomainChange = (event) => {
    this.setState({ emailDomain: event.target.value });
  };

  render() {
    const { emailPrefix, emailDomain } = this.state;

    return (
      <section className="container userinfo">
        <div className="info-section">
          {/* Existing user information */}
          <img className="info-userimage" src={userimage} alt="user--logo" />
          <h1 className="info-username title">{userInfo.name}</h1>
          <p className="info-usertype subtitle">{userInfo.type}</p>
          <div className="info-enrollment">
            <div className="info--enrolled">
              <h1>Time Enrolled:</h1>
              <p>{userInfo.timeEnrolled}</p>
            </div>
            <div className="info--admitroom">
              <h1>OPD Room:</h1>
              <p>{userInfo.opdRoom}</p>
            </div>
            <div className="info--doctorinfo">
              <h1>Discounted By:</h1>
              <p>{userInfo.discountedBy}</p>
            </div>
          </div>
        </div>
        <div className="userinfo-section">
          <h1 className="userinfo--title">User Info</h1>
          {/* New form */}
          <form>
            <label>
              Full Name:
              <input type="text" name="fullname" />
            </label>
            <label>
              User Name:
              <input type="text" name="username" />
            </label>
            <label>
              Contact No#:
              <input type="tel" name="contactno" />
            </label>
            <label>
              CNIC:
              <input type="text" name="cnic" />
            </label>
            <label>
              DOB:
              <input type="date" name="dob" />
            </label>
            <label className="email-label">
              Email:
              <input
                type="text"
                name="emailPrefix"
                value={emailPrefix}
                onChange={this.handleEmailPrefixChange}
                placeholder="Enter Your Email"
              />
              <select
                name="emailDomain"
                value={emailDomain}
                onChange={this.handleEmailDomainChange}
              >
                <option value="gmail.com">gmail.com</option>
                <option value="yahoo.com">yahoo.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="outlook.com">outlook.com</option>
                <option value="proton.me">proton.me</option>
                {/* Add more options here if needed */}
              </select>
            </label>
            <label>
              Password:
              <input type="password" name="password" />
              <a href="#">Change password</a>
            </label>
            <label>
              OPD Price:
              <input type="number" name="opdprice" />
              <a href="#">Change opd</a>
            </label>
            <div className="buttons">
              <button type="submit">Back Home</button>
              <button type="submit">Edit Details</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default LabReports;
