import React from "react";

function Navbar() {
  const handleScroll = (event, id) => {
    event.preventDefault(); // Prevent default anchor behavior
    const target = document.getElementById(id);
    if (target) {
      const offset = 70; // Adjust this to match your navbar height
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling
      });

      // Collapse navbar after clicking
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); // Simulates a toggler click to collapse the menu
      }
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#001122", color: "#e0e0e0" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#home"
            style={{ color: "#ffffff", fontSize: "20px", fontWeight: "bold" }}
          >
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: "#ffffff" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                filter: "invert(1)",
              }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav justify-content-center w-100"
              style={{ fontSize: "20px" }}
            >
              {/* Home */}
              <li className="nav-item" style={{ marginRight: "15px" }}>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#home"
                  style={{ color: "#FFC107", fontWeight: "bold" }}
                  onClick={(e) => handleScroll(e, "home")}
                >
                  Home
                </a>
              </li>
              {/* About */}
              <li className="nav-item" style={{ marginRight: "15px" }}>
                <a
                  className="nav-link"
                  href="#about"
                  style={{
                    color: "#ffffff",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FFC107")}
                  onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                  onClick={(e) => handleScroll(e, "about")}
                >
                  About
                </a>
              </li>
              {/* Skills */}
              <li className="nav-item" style={{ marginRight: "15px" }}>
                <a
                  className="nav-link"
                  href="#skill"
                  style={{
                    color: "#ffffff",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FFC107")}
                  onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                  onClick={(e) => handleScroll(e, "skill")}
                >
                  Skills
                </a>
              </li>
              {/* Projects */}
              <li className="nav-item" style={{ marginRight: "15px" }}>
                <a
                  className="nav-link"
                  href="#project"
                  style={{
                    color: "#ffffff",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FFC107")}
                  onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                  onClick={(e) => handleScroll(e, "project")}
                >
                  Project
                </a>
              </li>
              {/* Contact */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  style={{
                    color: "#ffffff",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FFC107")}
                  onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                  onClick={(e) => handleScroll(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
