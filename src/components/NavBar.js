import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import agna from "../assets/img/agna1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={agna} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon "></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}>
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}>
              Skill
            </Nav.Link>

            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}>
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/agna-rizky-putra-anggara-415017249/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://m.me/AgnaRizky182" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a href="http://instagram.com/_u/mas_ik._/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd">
              <a href="https://wa.me/+6281235003948">
                <span>Let's Connect</span>
              </a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
