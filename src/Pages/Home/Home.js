import React, { useRef, useEffect } from "react";

const Home = () => {
  const homeRef = useRef(null);

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

    const homeSection = homeRef.current;
    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  return (
    <>
      <section
        id="home"
        ref={homeRef}
        className="container-fluid d-flex align-items-center min-vh-100 text-white"
      >
        <div className="row w-100">
         
          <div className="col-12 col-md-6 text-md-left px-5">
            <h1 className="display-4 font-weight-bold">
              Hi There,<br /> I'm Sagar <span className="text-warning">Raj</span>
            </h1>
            <p className="h3 font-weight-bold text-light mt-3">
              I am a <span className="text-warning">Java Full Stack Developer</span>
            </p>
            <a
              href="#about"
              className="btn btn-warning btn-lg mt-4 px-4 py-2 shadow"
            >
              About Me
            </a>

            
            <div className="d-flex justify-content-start align-items-center mt-4">
              <div
                className="rounded-circle bg-warning d-flex justify-content-center align-items-center mx-2"
                style={{ width: "50px", height: "50px" }}
              >
                <a href="https://www.linkedin.com/in/sagar-raj-030697234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                <ion-icon
                  name="logo-linkedin"
                  style={{ color: "#0C2340", fontSize: "24px" }}
                ></ion-icon></a>
              </div>
              <div
                className="rounded-circle bg-warning d-flex justify-content-center align-items-center mx-2"
                style={{ width: "50px", height: "50px" }}
              >
                <ion-icon
                  name="logo-facebook"
                  style={{ color: "#0C2340", fontSize: "24px" }}
                ></ion-icon>
              </div>
              <div
                className="rounded-circle bg-warning d-flex justify-content-center align-items-center mx-2"
                style={{ width: "50px", height: "50px" }}
              >
                 <a href="https://github.com/Sagarraj2001" target="_blank" rel="noreferrer">
                <ion-icon
                  name="logo-github"
                  style={{ color: "#0C2340", fontSize: "24px" }}
                ></ion-icon></a>
              </div>
              <div
                className="rounded-circle bg-warning d-flex justify-content-center align-items-center mx-2"
                style={{ width: "50px", height: "50px" }}
              >
                <a href="/" target="_blank" rel="noreferrer">
                <ion-icon
                  name="logo-instagram"
                  style={{ color: "#0C2340", fontSize: "24px" }}
                ></ion-icon></a>
              </div>
            </div>
          </div>

          
          <div className="col-12 col-md-6 text-center mt-3">
            <img
              src={`${process.env.PUBLIC_URL}/home.jpg`}
              alt=" a developer with a laptop"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
      </section>
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
};

export default Home;

