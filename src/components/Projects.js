import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg3 from "../assets/img/project-img3.png";
import olshop from "../assets/img/atika-olshop.jpg";
import simora from "../assets/img/simora.jpg";
import myPortfolio from "../assets/img/my-portfolio.jpg";
import reactKasir from "../assets/img/react-kasir.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "SIMORA",
      description: "Sistem Monitoring Menara",
      imgUrl: simora,
    },
    {
      title: "E-Commerce Atika Olshop",
      description: "Situs Online Shop Percetakan Atika Print",
      imgUrl: olshop,
    },
    {
      title: "My Portfolio",
      description: "Portofolio",
      imgUrl: myPortfolio,
    },
  ];
  const projects2 = [
    {
      title: "Kasir App",
      description: "Kasir Application Using React",
      imgUrl: reactKasir,
    },
    {
      title: "SIPEKAN",
      description: "Sistem Pemesanan Kendaraan",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }>
                  <h2>Projects</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    aliquet.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
