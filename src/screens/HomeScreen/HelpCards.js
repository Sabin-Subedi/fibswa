import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import useMediaQuery from "../../hooks/useMediaQuery";
import ClockIcon from "../../vectors/img/1.png";
import MoneyIcon from "../../vectors/img/2.png";
import NetworkIcon from "../../vectors/img/3.png";

function HelpCards() {
  const isMediumScreen = useMediaQuery("(min-width: 992px)");

  return (
    <Row
      xs={1}
      md={1}
      lg={3}
 
      className="align-items-end justify-content-center mt-5 gap-y-4 gap-md-4 gap-lg-0"
    >
      <Col
        xs={12}
        sm={8}
        md={5}
        lg={4}
        style={{ marginRight: isMediumScreen ? "-4rem" : "" }}
        className="my-5 my-md-0 pt-4 mb-md-0"
      >
        <Card className="card_light help_card_blur d-flex  flex-column align-items-center  position-relative py-4">
          <div
            className="card_icon_placement"
          >
           <img src={ClockIcon} alt="icon" className="cardIcon" />
          </div>
          <div className="invisible">
            <img src={ClockIcon} alt="icon" className="cardIcon" />
          </div>
          <Card.Body className="pt-5 pt-sm-4 pt-md-4 pt-lg-0 px-md-3 pe-lg-5 ps-lg-4">
            <h3 className="text-white fw-bold text-center">
              Less Time Consuming
            </h3>
            <p className="text-center text_light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
              nisi, nunc in porttitor. Donec eleifend scelerisque proin ac.
              Sodales egestas nunc, venenatis dignissim. Donec nunc neque proin
              aliquam fringilla magna nec consectetur.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nisl nisi, nunc in porttitor.
              Donec eleifend scelerisque proin ac. Sodales egestas nunc,
              venenatis dignissim.{" "}
            </p>
            <button
              className="bg-transparent mt-4 border-0 d-block position-relative"
              style={{ width: "100%" }}
            >
              <div
                className="gradient_light  px-4 py-2 rounded"
                style={{ opacity: 0.2 }}
              >
                <p className="mb-0 fw-bold fs-5 invisible">Launch DEx </p>
              </div>
              <p
                className="mb-0 opacity-100 fw-bold  gradient_light gradient_text position-absolute top-50 start-50 translate-middle text-center"
                style={{ width: "100%" }}
              >
                Know More
              </p>
            </button>
          </Card.Body>
        </Card>
      </Col>
      <Col
        xs={12}
        sm={8}
        md={5}
        lg={4}
        style={{ zIndex: 10 }}
        className="my-5 my-md-0 pt-2 pt-md-0 "
      >
        <Card className="card_light card_center help_card_blur d-flex flex-column align-items-center position-relative py-4">
          <div
            className="card_icon_placement"
          >
            <img src={MoneyIcon} alt="icon" className="cardIcon" />
          </div>
          <div className="invisible">
            <img src={ClockIcon} alt="icon" className="cardIcon" />
          </div>
          <Card.Body className="pt-5 pt-md-4 pt-lg-0 px-md-3 px-lg-5">
            <h3 className="text-white fw-bold text-center">
              Low Transaction Fees
            </h3>
            <p className="text-center text_light mb-lg-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
              nisi, nunc in porttitor. Donec eleifend scelerisque proin ac.
              Sodales egestas nunc, venenatis dignissim. Donec nunc neque proin
              aliquam fringilla magna nec consectetur.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nisl nisi, nunc in porttitor.
              Donec eleifend scelerisque proin ac. Sodales egestas nunc,
              venenatis dignissim.{" "}
            </p>
            <button
              className="bg-transparent mt-4 border-0 d-block position-relative"
              style={{ width: "100%" }}
            >
              <div
                className="gradient_light  px-4 py-2 rounded"
                style={{ opacity: 0.2 }}
              >
                <p className="mb-0 fw-bold fs-5 invisible">Launch DEx </p>
              </div>
              <p
                className="mb-0 opacity-100 fw-bold  gradient_light gradient_text position-absolute top-50 start-50 translate-middle text-center"
                style={{ width: "100%" }}
              >
                Know More
              </p>
            </button>
          </Card.Body>
        </Card>
      </Col>
      <Col
        xs={12}
        sm={8}
        md={5}
        lg={4}
        style={{ marginLeft: isMediumScreen ? "-4rem" : "" }}
        className="mt-5 pt-5 pt-lg-0"
      >
        <Card className="card_light help_card_blur d-flex  flex-column align-items-center position-relative py-4">
          <div className="card_icon_placement">
            <img src={NetworkIcon} alt="icon" className="cardIcon" />
          </div>
          <div className="invisible">
            <img src={ClockIcon} alt="icon" className="cardIcon" />
          </div>
          <Card.Body className="pt-5 pt-sm-4 pt-md-0 px-md-3 ps-lg-5 pe-lg-4">
            <h3 className="text-white fw-bold text-center">Trust in CEX</h3>
            <p className="text-center text_light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
              nisi, nunc in porttitor. Donec eleifend scelerisque proin ac.
              Sodales egestas nunc, venenatis dignissim. Donec nunc neque proin
              aliquam fringilla magna nec consectetur.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nisl nisi, nunc in porttitor.
              Donec eleifend scelerisque proin ac. Sodales egestas nunc,
              venenatis dignissim.{" "}
            </p>
            <button
              className="bg-transparent mt-4 border-0 d-block position-relative"
              style={{ width: "100%" }}
            >
              <div
                className="gradient_light  px-4 py-2 rounded"
                style={{ opacity: 0.2 }}
              >
                <p className="mb-0 fw-bold fs-5 invisible">Launch DEx </p>
              </div>
              <p
                className="mb-0 opacity-100 fw-bold  gradient_light gradient_text position-absolute top-50 start-50 translate-middle text-center"
                style={{ width: "100%" }}
              >
                Know More
              </p>
            </button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default HelpCards;
