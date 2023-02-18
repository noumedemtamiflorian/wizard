// Importer le package React
import React from "react";

// Ce composant représente l'étape 1 de l'inscription
const Step1 = ({ register, watch, onSubmit }) => {
  // Récupérer le name
  const name = watch("name");

  // Récupérer l'adresse email
  const email = watch("email");

  // Récupérer l'âge
  const age = watch("age");

  return (
    <form onSubmit={onSubmit} className="form">
      {/* Champ "Nom" */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nom :
        </label>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
          className="form-control"
        />
      </div>
      {/* Champ "Email" */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email :
        </label>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          className="form-control"
        />
      </div>
      {/* Champ "Âge" */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age :
        </label>
        <input
          type="number"
          name="age"
          {...register("age", { required: true, min: 18 })}
          className="form-control"
        />
      </div>
      {/*  Bouton "Suivant" */}
      <button
        type="submit"
        disabled={!name || !email || !age}
        className="btn btn-primary"
      >
        Suivant
      </button>
    </form>
  );
};

export default Step1;
