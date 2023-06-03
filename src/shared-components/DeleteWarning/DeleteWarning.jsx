import React from "react";
import { Modal } from "react-bootstrap";

// Component imports
import { toAbsoluteUrl } from "../../_metronic/helpers";

const DeleteWarning = ({ text, name, show, onHide, onConfirm, cancelButton, confirmButton }) => {
  return (
    <Modal show={show} onHide={() => onHide("")} backdrop="static" keyboard={false} centered>
      <div className="card card-custom">
        {text ? null : (
          <img
            className="img-fluid bg-secondary"
            style={{
              borderTopLeftRadius: "0.475rem",
              borderTopRightRadius: "0.475rem",
            }}
            src={toAbsoluteUrl("/media/illustrations/delete.png")}
          />
        )}
        <div className="card-body pt-10">
          <div className="text-center text-dark fw-bold fs-3">
            {text ? `${(text)} ?` : `${("ARE_YOU_SURE_DELETE")} ${name} ?`}
          </div>
          <div className="d-flex justify-content-center pt-10">
            <button
              className="btn btn-light-primary font-weight-bold"
              style={{ marginRight: "1rem" }}
              type="button"
              onClick={() => onHide("")}
            >
              <span className="indicator-label">{(cancelButton || "CANCEL")}</span>
            </button>
            <button type="button" className="btn btn-primary" onClick={() => onConfirm(show)}>
              <span className="indicator-label">{(confirmButton || "DELETE")}</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteWarning;
