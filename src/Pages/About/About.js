import React, { useEffect, useRef } from 'react';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-section');
          } else {
            entry.target.classList.remove('animate-section'); // Remove class to allow repeated animation
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    const aboutSection = aboutRef.current;
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <>
      <div id="about" ref={aboutRef}>
        <h1 className="text-center text-warning">
          <u>About Me</u>
        </h1>
        <section className="about py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <style>
                    {`
                      .hover-effect {
                        transition: filter 0.3s ease-in-out;
                      }
                      .hover-effect:hover {
                        filter: grayscale(100%);
                      }
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
                  <img
                    src={`${process.env.PUBLIC_URL}/image.jpg`}
                    alt="A portrait of me"
                    className="img-fluid shadow-sm hover-effect rounded border border-4"
                    style={{
                      width: '400px',
                      height: '400px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6 text-light">
                <p className="lead">
                  Hi, I'm <span className="text-warning">Sagar Raj,</span> a passionate web developer with a knack for crafting clean, efficient, and user-friendly web applications.
                </p>
                <p>
                  With expertise in modern web technologies like ReactJS, Bootstrap, and more, I aim to build exceptional digital experiences. Whether it's designing responsive layouts or optimizing frontend performance, I thrive on solving complex problems.
                </p>
                <p>Let's collaborate to bring your ideas to life!</p>
                <a href="https://drive.google.com/file/d/1l2vKFSA98HLqssJdzyQ61zfCRY2dp4u6/view?usp=drivesdk" className="btn btn-primary mt-3" target='_blank' rel="noreferrer">
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
