import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import agna from "../assets/img/agna1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />

          <Col sm={6}>
            <img src={agna} alt="logo" />
          </Col>

          <Col sm={6} className="text-center text-sm-end">
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
            <p>Made it with smiles, Copyright 2022 All Good</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
