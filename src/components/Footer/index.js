import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../vectors/Logo";
import { FiMail } from "react-icons/fi";
import InstaIcon from "../../vectors/img/6.png"
import MailIcon from "../../vectors/img/4.png";
import TelegramIcon from "../../vectors/img/5.png";

function Footer() {
  return (
    <div
      style={{
        mixBlendMode: "normal",
        borderTop: "2px solid rgba(255, 255, 255, 0.25)",
      }}
      className="py-5"
    >
      <Container>
        <Row xs={1} md={3} className="justify-content-center align-items-center">
          <Col xs={12} >
            <div className="text-white opacity-75 d-flex justify-content-center gap-3  gap-sm-4 fs-6 pt-5">
              <p>Projects</p>
              <p>Policy</p>
              <p className="">Terms and Condition</p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="d-flex flex-column align-items-center">
              <img src="/img/logo.svg" alt="logo" className="w-100 footerlogo" />
              <p className="text-white opacity-75 text-center">
                Lorem Ipsum Dolor Ist Lorem Ipsum Dolor IstLorem Ipsum Dolor Ist
                Lorem Ipsum{" "}
              </p>
            </div>
          </Col>
          <Col>
            <div className="d-flex gap-3 pt-5 justify-content-center justify-content-md-end">
              <p className="text-white opacity-75">Contact:</p>
              <img src={MailIcon} alt="icon" className="socialIcon" />
              <img src={TelegramIcon} alt="icon" className="socialIcon" />
              <img src={InstaIcon} alt="icon" className="socialIcon" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
