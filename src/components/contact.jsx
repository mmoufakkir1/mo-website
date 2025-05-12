import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      );
      console.log(result.text);
      clearState();
      setSubmitStatus("success");
    } catch (error) {
      console.log(error.text);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Obfuscate email using array join
  const emailParts = props.data && props.data.email ? props.data.email.split("@") : ["loading", ""];
  const obfuscatedEmail = emailParts.length === 2 ? [emailParts[0], "@", emailParts[1]].join("") : "loading";
  const mailtoLink = emailParts.length === 2 ? `mailto:${emailParts[0]}@${emailParts[1]}` : undefined;

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h2>Let's Connect</h2>
            <p>Feel free to reach out through any of these channels</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-container">
              <div className="contact-info">
                <div className="info-item">
                  <i className="fa fa-envelope-o"></i>
                  <div className="info-content"> 
                    {mailtoLink ? (
                      <a href={mailtoLink} className="email-text">{obfuscatedEmail}</a>
                    ) : (
                      <p className="email-text">{obfuscatedEmail}</p>
                    )}
                  </div>
                </div>

                <div className="social-links">
                  <h3>Connect with me</h3>
                  <div className="social-icons">
                    <a 
                      href={props.data ? props.data.linkedin : "/"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="LinkedIn"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a 
                      href={props.data ? props.data.github : "/"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="GitHub"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Mohammed Moufakkir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
