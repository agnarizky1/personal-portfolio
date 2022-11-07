import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import programming from "../assets/img/programming.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Agna Rizky `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Hello, my name is Agna Rizky Putra Anggara, I am a fresh
                    graduate from Politeknik Negeri Jember with an average GPA
                    of 3.69. I have experience in the IT field. I am working on
                    a project at Dinas Komunikasi dan Informatika (DISKOMINFO)
                    with the name simora for monitoring tower, and some
                    experience in the maintening software and hardware at
                    Percetakan Agna Indo Pratama
                  </p>
                  <a href="https://wa.me/+6281235003948">
                    <button onClick={() => console.log("connect")}>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={programming} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
