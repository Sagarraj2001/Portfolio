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
            entry.target.classList.remove('animate-section'); 
          }
        });
      },
      {
        threshold: 0.5,
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
  Hi, I'm <span className="text-warning">Sagar Raj,</span> a passionate Java Full-Stack Developer with a strong focus on building scalable, efficient, and user-centric applications.
</p>
<p>
  With hands-on expertise in Java, Spring Boot, ReactJS, and modern web technologies, I specialize in developing robust backend architectures and seamless frontend experiences. Whether it's designing RESTful APIs, optimizing database performance, or building responsive interfaces, I enjoy solving real-world engineering challenges end-to-end.
</p>

                <p>Let's collaborate to bring your ideas to life!</p>
                <a href="https://drive.google.com/file/d/154W912htwo61uSLFbB0LlWtNDlL1N4pK/view?usp=drive_link" className="btn btn-primary mt-3" target='_blank' rel="noreferrer">
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


