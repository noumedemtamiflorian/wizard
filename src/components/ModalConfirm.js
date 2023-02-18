import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalConfirm = ({ show, handleConfirm }) => {
  return (
    <div className={`modal ${show ? "d-block" : ""}`}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmation</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleConfirm}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">Le message a été bien envoyé. </div>
          <div className="modal-footer text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleConfirm}
            >
              Confirmer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
