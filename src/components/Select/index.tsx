import React, { useState } from "react";
import { FormControl, Image, Modal } from "react-bootstrap";
import {
  FiBox,
  FiChevronDown,
  FiChevronsDown,
  FiSearch,
  FiX,
} from "react-icons/fi";
import "./select.scss";
import { GrBraille } from "react-icons/gr";
import SelectItem from "./SelectItem";

interface Props {}

function SelectModal(props) {
  return (
    <Modal
      {...props}
      className="select_modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="d-flex border-0">
        <div className="d-flex align-items-center text-white fs-3">
          <FiBox />
          <p className="mb-0 ms-1 fw-bolder">Transfer History</p>
        </div>
        <button
          className="btn text-white"
          style={{ zIndex: 10 }}
          onClick={props.onHide}
        >
          <FiX className="fs-1" />
        </button>
      </Modal.Header>
      <div className="border" />
      <Modal.Body>
        <div className="d-flex align-items-center select_searchBox">
          <FormControl
            className="select_search_input"
            placeholder="Search name or address"
          />
          <FiSearch className="me-2" />
        </div>

        <div className="select_options">
          {props.options &&
            props.options.map((item, index) => (
              <SelectItem
                item={item}
                active={item === props.selectedItem}
                selectItem={() => {
                  props.selectItem(item);
                  props.onHide();
                }}
                key={index}
              />
            ))}
        </div>
      </Modal.Body>

      <div className="overlay"></div>
    </Modal>
  );
}

export default function Select({
  options,
  defaultValue,
}: {
  options: any[];
  defaultValue?: any;
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    defaultValue ? defaultValue : options[0]
  );

  return (
    <>
      <div
        className="select_control  d-flex align-items-center justify-content-between"
        onClick={() => setModalVisible(true)}
      >
        <div className="option d-flex align-items-center me-1">
          {selectedItem ? (
            <>
              <div className="me-2 " style={{ maxWidth: "25px" }}>
                <Image
                  src={selectedItem.image}
                  className="w-full"
                  alt={selectedItem.label}
                />
              </div>
              <div>
                <p className="option-label mb-0 ">{selectedItem.label}</p>
              </div>
            </>
          ) : (
            <div>
              <p className="option-label mb-0 ">Select</p>
            </div>
          )}
        </div>
        <FiChevronDown />
      </div>
      <SelectModal
        options={options}
        onHide={() => setModalVisible(false)}
        show={modalVisible}
        selectItem={(item) => setSelectedItem(item)}
        selectedItem={selectedItem}
      />
    </>
  );
}
