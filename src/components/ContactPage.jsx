import React, { useState, useEffect } from "react";
import "../styles/Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [ setWindowWidth] = useState(window.innerWidth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    // Show success message to user
    alert("Message sent successfully!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },);

  // Add scroll behavior for back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const backToTop = document.querySelector(".contact-back-to-top");
      if (backToTop) {
        if (window.scrollY > 300) {
          backToTop.style.display = "flex";
        } else {
          backToTop.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="contact-page-container">
      {/* Navigation/Breadcrumb */}
      <div className="contact-nav-breadcrumb">
        <div className="contact-breadcrumb-wrapper">
          <div className="contact-breadcrumb-links">
            <a href="/" className="contact-breadcrumb-link">
              HOMEPAGE
            </a>
            <span className="contact-breadcrumb-separator"> / </span>
            <span className="contact-breadcrumb-current">CONTACT</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="contact-hero-section">
        <h1 className="contact-hero-title">Get in touch!</h1>
        <div className="contact-send-message-button-wrapper">
          <button
            onClick={() =>
              document
                .getElementById("contact-form-section")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="contact-send-message-button"
          >
            <span className="contact-button-text">SEND MESSAGE</span>
            <div className="contact-button-circle">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form-section" className="contact-form-section">
        <div className="contact-title-container">
          <h2 className="contact-section-title">
            Let's <span className="contact-title-light">Talk</span>
          </h2>
        </div>

        <div className="contact-form-container">
          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-form-content">
            <div className="contact-input-row">
              <div className="contact-input-group">
                <label htmlFor="name" className="contact-input-label">
                  WHAT'S YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-form-input"
                  placeholder=""
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="email" className="contact-input-label">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-form-input"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="contact-input-group">
              <label htmlFor="message" className="contact-input-label">
                TELL US ABOUT YOUR PROJECT
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="contact-form-textarea"
                placeholder=""
                required
              ></textarea>
            </div>

            <div className="contact-submit-container">
              <p className="contact-privacy-note">
                * We promise not to disclose your personal information to third
                parties.
              </p>
              <button type="submit" className="contact-submit-button">
                SEND MESSAGE
                <span className="contact-submit-button-circle">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14m-5-5l5 5-5 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Side Text - Only visible on larger screens */}
      <div className="contact-side-text">CONTACT</div>

      {/* Back to Top Button */}
      <div className="contact-back-to-top">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="contact-back-to-top-button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19V5M12 5L5 12M12 5L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="contact-back-to-top-text">BACK TO TOP</span>
      </div>
    </div>
  );
};

export default ContactPage;