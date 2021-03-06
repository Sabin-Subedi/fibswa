import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { FiChevronDown, FiClipboard } from "react-icons/fi";

import NavigationBar from "../../components/Navbar";
import SwapIcon from "../../vectors/Icons/SwapIcon";
import "./crosswap.scss";
import HistoryModal from "./HistoryModal";
import Select from "components/Select";
interface Props {}

const items = [
  {
    label: "BNB",
    subLabel: "Binance Token",
    value: "BNB",
    image: "/icons/bnb.png",
    icon: "",
  },
  {
    label: "ETH",
    subLabel: "Etherneum",
    value: "BNB",
    image: "/icons/eth.png",
    icon: "",
  },
  {
    label: "DOGE",
    subLabel: "DogeCoin",
    value: "Doge",
    image: "/icons/doge.png",
    icon: "",
  },
  {
    label: "FIL",
    subLabel: "Binance-Peg Filecoin",
    value: "FIL",
    image: "/icons/fil.png",
    icon: "",
  },
  {
    label: "bwJUP",
    subLabel: "Jupiter",
    value: "jupiter",
    image: "/icons/jupiter.png",
    icon: "",
  },
];

const CrossSwap: React.FC<Props> = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div>
      <NavigationBar />
      <Container className="mt-5">
        <Card className="col-12 swap_card p-3 py-5 p-md-5">
          <Row xs={1} md={2} className="align-items-center ">
            <Col xs={12} md={6} className="d-flex d-md-block">
              <h2 className="gradient_light gradient_text d-inline-block text-uppercase mx-auto">
                Bsc Swap
              </h2>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center justify-content-md-end"
            >
              <div className="text-white d-inline-flex rounded-pill  overflow-hidden  menu ">
                <p className="active mb-0 p-1 p-md-2 fs-7 ps-3">Cross Swap</p>
                <p className=" mb-0 p-1 p-md-2 fs-7">BSC Swap</p>
                <p
                  className=" mb-0 p-1 p-md-2 fs-7"
                  onClick={() => setShowHistory(true)}
                >
                  History
                </p>
                <p className=" mb-0 p-1 p-md-2 fs-7 pe-3">ETH Swap</p>
              </div>
            </Col>
          </Row>

          <Form className="inner_swap_card p-4 p-md-5 text-white mt-5">
            <div className="d-flex align-items-center mb-4 mb-md-2">
              <h6 className="mb-0 me-1  fs-6">Transactions </h6>
              <FiChevronDown className="fs-6" />
            </div>
            <Row xs={1} md={3} className="align-items-center">
              <Col className="inner_swap_card_item flex-grow-1">
                <div className="d-flex px-3 pt-3 pb-1 border-bottom border-secondary">
                  <Form.Group className="flex-grow-1">
                    <p className="mb-0 opacity-75 fs-6 fw-light">From</p>
                    <Form.Control
                      style={{ zIndex: 10 }}
                      type="email"
                      size="lg"
                      placeholder="123032"
                      as="input"
                      className="swap_input"
                    />
                  </Form.Group>
                  <Form.Group className="d-flex align-items-center">
                    <p className="mb-0 me-2">Max</p>

                    <Select options={items} />
                  </Form.Group>
                </div>
                <div className="d-flex align-items-center px-3 pt-3 pb-1 ">
                  <Form.Group className="flex-grow-1">
                    <p className="mb-0 opacity-75 fs-6 fw-light">Token</p>
                    <Form.Control
                      style={{ zIndex: 10 }}
                      type="email"
                      size="lg"
                      placeholder="0x00000"
                      as="input"
                      className="swap_input"
                    />
                  </Form.Group>
                  <div>
                    <Select
                      options={items}
                      defaultValue={null}
                      className="d-none"
                    >
                      <div className="icon_container">
                        <FiClipboard className="fs-4" />
                      </div>
                    </Select>
                  </div>
                </div>
              </Col>
              <Col xs={1} md={1} className="d-flex justify-content-center">
                <SwapIcon />
              </Col>

              <Col className="inner_swap_card_item flex-grow-1">
                <div className="d-flex px-3 pt-3 pb-1 border-bottom border-secondary">
                  <Form.Group className="flex-grow-1">
                    <p className="mb-0 opacity-75 fs-6 fw-light">From</p>
                    <Form.Control
                      style={{ zIndex: 10 }}
                      type="email"
                      size="lg"
                      placeholder="123032"
                      as="input"
                      className="swap_input"
                    />
                  </Form.Group>
                  <Form.Group className="d-flex align-items-center">
                    <p className="mb-0 me-2">Max</p>

                    <Select options={items} defaultValue={items[1]} />
                  </Form.Group>
                </div>
                <div className="d-flex align-items-center px-3 pt-3 pb-1 ">
                  <Form.Group className="flex-grow-1">
                    <p className="mb-0 opacity-75 fs-6 fw-light">Token</p>
                    <Form.Control
                      style={{ zIndex: 10 }}
                      type="email"
                      size="lg"
                      placeholder="0x00000"
                      as="input"
                      className="swap_input"
                    />
                  </Form.Group>
                  <div>
                    <Select
                      options={items}
                      defaultValue={null}
                      className="d-none"
                    >
                      <div className="icon_container">
                        <FiClipboard className="fs-4" />
                      </div>
                    </Select>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="col-10 col-md-5 mx-auto mt-5">
              <button className="swap_button mx-auto py-2">
                <p className="d-inline-block gradient_light gradient_text fw-bold mb-0">
                  START SWAP
                </p>
              </button>
            </div>
          </Form>

          <div className="inner_swap_card mt-5 p-4">
            <Row className="">
              <Col lg={5} className="video_item">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/z7538iNe2Pw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </Col>
              <Col className="video_item overflow-scroll text-white">
                <h2>How to cross swap?</h2>

                <p>
                  To use FibSwap Nice 2nd point 3rd point 4th point Then, do
                  something else, now and this is very important.
                </p>
              </Col>
            </Row>
          </div>
        </Card>
      </Container>

      <HistoryModal show={showHistory} onHide={() => setShowHistory(false)} />
    </div>
  );
};

export default CrossSwap;
