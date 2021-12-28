import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { FiChevronRight, FiChevronsRight } from "react-icons/fi";

import "./transfercard.scss";

function TransferCard() {
  return (
    <Row className="d-flex transfer_card align-items-center p-3 py-4 mb-4">
      <Col lg={3} className="d-flex align-items-center transfer_card_item">
        <div className="icon">
          <Image src="/icons/bnb.png" className="w-full" />
        </div>
        <div className="ms-2">
          <h5 className="fw-bold mb-0">BNB</h5>
          <p className="fw-light loss_text mb-0 fs-6">-1000 USDC</p>
        </div>
      </Col>
      <Col lg={1} className="transfer_card_item">
        <FiChevronRight className="fs-1 text-white" />
      </Col>
      <Col lg={3} className="d-flex align-items-center transfer_card_item">
        <div className="icon">
          <Image src="/icons/eth.png" className="w-full" />
        </div>
        <div className="ms-2">
          <h5 className="fw-bold mb-0">ETH</h5>
          <p className="fw-light gain_text mb-0 fs-6">+1020 USDC</p>
        </div>
      </Col>
      <Col lg={5} className="transfer_card_item text-end">
        <h6 className="fw-bold gain_text mb-0">Completed</h6>
        <p className="text-white opacity-75 fw-light text-sm mb-0">
          18-12-2021 10:10:53
        </p>
      </Col>
    </Row>
  );
}

export default TransferCard;
