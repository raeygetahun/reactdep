import React from "react";
import "./registration.css";
import Navbar from "../components/Navbar/Navbar";

class HackathonRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cvError: "",
    };
  }

  validateForm = (event) => {
    event.preventDefault();

    const cvInput = document.getElementById("cv");
    const cvError = document.getElementById("cvError");

    if (cvInput.files.length === 0) {
      this.setState({ cvError: "Please select a CV file." });
      return false;
    }

    const maxFileSize = 250 * 1024;
    const fileSize = cvInput.files[0].size;

    if (fileSize > maxFileSize) {
      this.setState({ cvError: "CV file size exceeds the limit (250KB)." });
      return false;
    }

    this.setState({ cvError: "" });
    event.target.submit();
    return true;
  };

  componentDidMount() {
    const constructorYes = document.getElementById("constructor_yes");
    const constructorNo = document.getElementById("constructor_no");
    const constructorInfo = document.getElementById("constructor_info");
    const otherInfo = document.getElementById("other_info");

    constructorYes.addEventListener("change", () => {
      constructorInfo.style.display = "block";
      otherInfo.style.display = "none";
      document.getElementById("school").value = "NA";
      document.getElementById("diploma").value = "NA";
      document.getElementById("graduation_year_other").value = "NA";
    });

    constructorNo.addEventListener("change", () => {
      constructorInfo.style.display = "none";
      otherInfo.style.display = "block";
      document.getElementById("school").value = "";
      document.getElementById("diploma").value = "";
      document.getElementById("graduation_year_other").value = "";
    });
  }

  render() {
    return (
      <div>
        <h2>Hackathon Registration Form</h2>
        <form
          action="https://constructorhackapi.onrender.com/register"
          method="post"
          enctype="multipart/form-data"
          onSubmit={this.validateForm}
        >
          <label htmlFor="full_name">Full Name:</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            required
            value="hello@gmail.com"
          />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value="hello@gmail.com"
          />
          <br />
          <br />
          <label htmlFor="pronouns">Pronouns:</label>
          <input type="text" id="pronouns" name="pronouns" />
          <br />
          <br />
          <label htmlFor="constructor">
            Are you currently studying at Constructor?
          </label>
          <input
            type="radio"
            id="constructor_yes"
            name="constructor"
            value="Yes"
            required
          />{" "}
          Yes
          <input
            type="radio"
            id="constructor_no"
            name="constructor"
            value="No"
            required
          />{" "}
          No
          <br />
          <br />
          <div id="constructor_info" style={{ display: "none" }}>
            <label htmlFor="major">Major:</label>
            <input
              type="text"
              id="major"
              name="major"
              required
              value="hello@gmail.com"
            />
            <br />
            <br />
            <label htmlFor="minor">Minor:</label>
            <input
              type="text"
              id="minor"
              name="minor"
              required
              value="hello@gmail.com"
            />
            <br />
            <br />

            <label htmlFor="graduation_year">Year of Graduation:</label>
            <input
              type="text"
              id="graduation_year"
              name="graduation_year"
              required
              value="hello@gmail.com"
            />
            <br />
            <br />
          </div>
          <div id="other_info" style={{ display: "none" }}>
            <label htmlFor="school">Where do you study?</label>
            <input
              type="text"
              id="school"
              name="school"
              required
              value="hello@gmail.com"
            />
            <br />
            <br />

            <label htmlFor="diploma">Diploma/Degree:</label>
            <input
              type="text"
              id="diploma"
              name="diploma"
              required
              value="hello@gmail.com"
            />
            <br />
            <br />

            <label htmlFor="graduation_year_other">Year of Graduation:</label>
            <input
              type="text"
              id="graduation_year_other"
              name="graduation_year_other"
              required
              value="hello@gmail.com"
            />
            <br />
            <br />
          </div>
          <label htmlFor="linkedin">LinkedIn Profile:</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value="https://www.geeksforgeeks.org/how-to-upload-pdf-files-in-firebase-storage-in-android/"
          />
          <br />
          <br />
          <label htmlFor="file">Upload your CV (PDF only, max 250KB):</label>
          <input type="file" id="cv" name="file" accept=".pdf" />
          <br />
          <small id="cvError" style={{ color: "red" }}>
            {this.state.cvError}
          </small>
          <br />
          <br />
          <label htmlFor="dietary_restrictions">Dietary Restrictions:</label>
          <input
            type="text"
            id="dietary_restrictions"
            name="dietary_restrictions"
            required
            value="hello@gmail.com"
          />
          <br />
          <br />
          <label htmlFor="reason_to_participate">
            Why do you want to participate in this year's hackathon?
          </label>
          <textarea
            id="reason_to_participate"
            name="reason_to_participate"
            rows="4"
            required
            value="hello@gmail.com"
          ></textarea>
          <br />
          <br />
          <label htmlFor="team_preference">Team Preference:</label>
          <input
            type="radio"
            id="team_preference_existing"
            name="team_preference"
            value="Join Existing Team"
            required
          />
          Join Existing Team
          <input
            type="radio"
            id="team_preference_new"
            name="team_preference"
            value="Form a New Team"
            required
          />{" "}
          Form a New Team
          <br />
          <br />
          <label htmlFor="suggestions_questions">
            Any suggestions or questions about/for the event?
          </label>
          <textarea
            id="suggestions_questions"
            name="suggestions_questions"
            rows="4"
            required
            value="hello@gmail.com"
          ></textarea>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default HackathonRegistrationForm;
