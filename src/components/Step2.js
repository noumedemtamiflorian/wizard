// Importer le package React
import React from "react";

// Ce composant représente l'étape 2 de l'inscription
const Step2 = ({ register, watch, onPrev, onSubmit }) => {
  // Récupérer le nom d'utilisateur
  const username = watch("username");

  // Récupérer le mot de passe
  const password = watch("password");

  // Récupérer le mot de passe de confirmation
  const confirmPassword = watch("confirmPassword");

  return (
    // Formulaire de soumission
    <form onSubmit={onSubmit}>
      {/* Champ pour le nom d'utilisateur */}
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Nom d'utilisateur :
        </label>
        <input
          type="text"
          name="username"
          className="form-control"
          {...register("username", { required: true })}
        />
      </div>
      {/* Champ pour le mot de passe */}
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Mot de passe :
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          {...register("password", { required: true })}
        />
      </div>
      {/* Champ pour la confirmation du mot de passe */}
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirmez le mot de passe :
        </label>
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === password,
          })}
        />
      </div>
      {/* Bouton pour revenir en arrière */}
      <button type="button" className="btn btn-secondary me-3" onClick={onPrev}>
        Précédent
      </button>
      {/* Bouton pour soumettre le formulaire */}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!username || !password || !confirmPassword}
      >
        Suivant
      </button>
    </form>
  );
};

// Exporter le composant Step2 par défaut
export default Step2;
