import React from "react";

export const Contact = (props) => {
  // Obfuscate email using array join
  const emailParts =
    props.data && props.data.email
      ? props.data.email.split("@")
      : ["loading", ""];
  const obfuscatedEmail =
    emailParts.length === 2
      ? [emailParts[0], "@", emailParts[1]].join("")
      : "loading";
  const mailtoLink =
    emailParts.length === 2
      ? `mailto:${emailParts[0]}@${emailParts[1]}`
      : undefined;

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
                      <a href={mailtoLink} className="email-text">
                        {obfuscatedEmail}
                      </a>
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
          <p>
            &copy; {new Date().getFullYear()} Mohammed Moufakkir. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
