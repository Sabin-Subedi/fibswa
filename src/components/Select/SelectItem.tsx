import React from "react";
import { Image } from "react-bootstrap";

export default function SelectItem(props) {
  return (
    <div
      className={`select_item  mb-3 ${props.active && "active"}`}
      onClick={props.selectItem}
    >
      <div className="select_item_img">
        {props.item.image && (
          <Image src={props.item.image} className="w-full" alt="eth" />
        )}
      </div>
      <div className="ms-2 flex-grow-1">
        <h4 className="fw-bold mb-0">{props.item.label}</h4>
        <p className="fs-7 opacity-75 mb-0 mt-0">{props.item.subLabel}</p>
      </div>

      <div className="select_item_circle"></div>
    </div>
  );
}
