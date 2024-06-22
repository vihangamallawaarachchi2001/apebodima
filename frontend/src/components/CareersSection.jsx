import React from "react";
import "../styles/CareersSection.css";

function CareersSection() {
  return (
    <section className="careers-section">
      <h2>Join Our Team</h2>
      <div className="content">
        <div>
            <img src="/support.png" alt="" width={320} height={270} />
          <p>
            At Ape Bodima, we are always looking for talented individuals to
            join our team. If you are passionate about helping students and
            young employees find their perfect boarding houses, we'd love to
            hear from you.
          </p>
        </div>

        <form className="career-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input type="text" id="position" name="position" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Why do you want to join us?</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </section>
  );
}

export default CareersSection;
