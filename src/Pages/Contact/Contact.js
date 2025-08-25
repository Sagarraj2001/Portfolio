import React, { useRef, useEffect } from "react";

function Contact() {
  const formRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-section");
          } else {
            entry.target.classList.remove("animate-section");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const contactSection = contactRef.current;
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8d12b7d1-0756-4e58-86d9-2bf1a7860aad");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Thanks for Contacting! We will reply to you soon.");
      formRef.current.reset(); 
    }
  };

  return (
    <>
      <h1 className="text-warning text-center mt-5" id="contact">
        <u>Contact</u>
      </h1>
      <div
        ref={contactRef}
        className="card mb-3 mt-5 mx-3 m-2"
        id="contact-section"
      >
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={`${process.env.PUBLIC_URL}/contact.gif`}
              alt="Contact illustration"
              className="img-fluid"
              style={{
                width: "400px",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <form ref={formRef} onSubmit={onSubmit}>
                <h1 className="text-center text-warning">Contact Form</h1>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-floating">
                  <textarea
                    rows={5}
                    className="form-control"
                    name="message"
                    placeholder="Leave a comment here"
                    required
                  ></textarea>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-warning">
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .animate-section {
            animation: fadeInUp 1.5s ease-out forwards;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}

export default Contact;

