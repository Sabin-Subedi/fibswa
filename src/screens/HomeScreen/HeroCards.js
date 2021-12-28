import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import useMediaQuery from "../../hooks/useMediaQuery";

function HeroCards() {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");

  return (
    <Row
      className="align-items-center justify-content-center mx-auto gap-0 "
      style={{ paddingTop: "6rem" }}
    >
      <Col style={{ marginRight: "-10rem" }} xs={4}>
        <div className="">
          <Card
            className="card_light   d-flex flex-column align-items-center position-relative"
            style={{
              background:
                "linear-gradient(108.66deg, rgba(10, 21, 36, 0.3) -47.25%, rgba(13, 28, 39, 0.3) 145.76%)",
              width: "10rem",
            }}
          >
            <div className="">
              <img
                src="/img/bnb.png"
                style={{ width: "15rem" }}
                alt="bnb"
                className="invisible"
              />
              <div
                className="position-absolute "
                style={{
                  zIndex: 5,
                  top: "55%",
                  left: "40%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <img src="/img/bnb.png" style={{ width: "18rem" }} alt="bnb" />
              </div>
            </div>
          </Card>
        </div>
      </Col>
      <Col xs={4} style={{ zIndex: 10 }}>
        <div className="position-relative" style={{ zIndex: 10 }}>
          <Card
            className="card_light py-1 px-2  bg-body-dark  d-flex flex-column align-items-center position-relative"
            style={{
              background:
                "linear-gradient(108.66deg, rgba(10, 21, 36, 0.3) -47.25%, rgba(13, 28, 39, 0.3) 145.76%)",
            }}
          >
            <div className="">
              <img
                src="/img/ethereum.png"
                style={{ width: "5rem" }}
                alt="Ethereum"
                className="invisible"
              />
              <div
                className="position-absolute "
                style={{
                  zIndex: 5,
                  top: "-8rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  src="/img/ethereum.png"
                  style={{ width: "10rem" }}
                  alt="Ethereum"
                />
              </div>
            </div>
            <div className="text-center text-white top-0">
              <h4>ETHERIUM</h4>
              <p>
                Etherium is an old and trustable cryptocurrency to invest in
              </p>
            </div>
          </Card>
        </div>
      </Col>
      <Col style={{ marginLeft: "-4.5rem" }} xs={3}>
        <div className="">
          <Card
            className="card_light   d-flex flex-column align-items-center position-relative"
            style={{
              background:
                "linear-gradient(108.66deg, rgba(10, 21, 36, 0.3) -47.25%, rgba(13, 28, 39, 0.3) 145.76%)",
              width: "10rem",
            }}
          >
            <div className="">
              <img
                src="/img/token.png"
                style={{ width: "10rem" }}
                alt="token"
                className="invisible"
              />
              <div
                className="position-absolute "
                style={{
                  zIndex: 5,
                  top: "45%",
                  left: "90%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <img
                  src="/img/token.png"
                  style={{ width: "16rem" }}
                  alt="token"
                />
              </div>
            </div>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default HeroCards;
