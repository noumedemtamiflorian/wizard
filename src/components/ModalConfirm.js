// Importer React
import React from "react";

// ModalConfirm est un composant qui affiche une boîte de dialogue de confirmation
const ModalConfirm = ({ show, handleConfirm }) => {
  return (
    // Déclaration d'une div contenant la modal et ses classes
    <div className={`modal ${show ? "d-block" : ""}`}>
      {/*  Déclaration d'une div pour le dialogue de la modal */}
      <div className="modal-dialog" role="document">
        {/*  Déclaration d'une div pour le contenu de la modal */}
        <div className="modal-content">
          {/*  Déclaration d'une div pour l'en-tête de la modal */}
          <div className="modal-header">
            {/*  Déclaration d'un titre pour la modal */}
            <h5 className="modal-title">Confirmation</h5>
            {/*  Déclaration d'un bouton pour fermer la modal */}
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleConfirm}
            >
              {/*  Déclaration d'un span pour le croix de fermeture de la modal */}
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {/*  Déclaration d'une div pour le corps de la modal */}
          <div className="modal-body">Le message a été bien envoyé. </div>
          {/*  Déclaration d'une div pour le pied de la modal */}
          <div className="modal-footer text-center">
            {/* Déclaration d'un bouton pour confirmer l'envoi du message */}
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
