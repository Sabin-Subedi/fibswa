import TransferCard from "components/Transfercard";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FiX } from "react-icons/fi";
import "./historymodal.scss";

function HistoryModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      className="history_modal "
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="d-flex">
        <h3 className="gradient_light gradient_text">Transfer History</h3>
        <button
          className="btn text-white"
          style={{ zIndex: 10 }}
          onClick={props.onHide}
        >
          <FiX className="fs-1" />
        </button>
      </Modal.Header>
      <Modal.Body>
        <TransferCard />
        <TransferCard />
        <TransferCard />
        <TransferCard />
        <TransferCard />
      </Modal.Body>

      <div className="overlay"></div>
    </Modal>
  );
}

export default HistoryModal;
