// Import de la librairie React
import React from "react";

// Ce composant représente l'étape 3 de l'inscription
const Step3 = ({ register, watch, onPrev, onSubmit }) => {
  // Récupération des valeurs des champs de saisie à partir de watch
  const date = watch("date");
  const gender = watch("gender");
  const country = watch("country");

  // Renvoi du code JSX qui correspond au formulaire du Step 3, avec les champs de saisie, les boutons Précédent et Envoyer
  return (
    // Formulaire de saisie des données
    <form onSubmit={onSubmit} className="row justify-content-center">
      {/*  Champ pour la date de naissance */}
      <div className="col-md-4">
        <label htmlFor="date" className="form-label">
          Date de naissance :
        </label>
        <input
          type="date"
          name="date"
          {...register("date", { required: true })}
          className="form-control"
        />
      </div>
      {/*  Champ pour le genre */}
      <div className="col-md-4">
        <label htmlFor="gender" className="form-label">
          Genre :
        </label>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            value="M"
            {...register("gender", { required: true })}
            className="form-check-input"
          />
          <label htmlFor="gender" className="form-check-label">
            Homme
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            value="F"
            {...register("gender", { required: true })}
            className="form-check-input"
          />
          <label htmlFor="gender" className="form-check-label">
            Femme
          </label>
        </div>
      </div>
      {/*  Champ pour le pays */}
      <div className="col-md-4">
        <label htmlFor="country" className="form-label">
          Pays :
        </label>
        <select
          name="country"
          {...register("country", { required: true })}
          className="form-select"
        >
          <option value="">-- Sélectionnez un pays --</option>
          <option value="FR">France</option>
          <option value="BE">Belgique</option>
          <option value="CH">Suisse</option>
        </select>
      </div>
      {/*  Boutons de navigation */}
      <div className="col-12">
        {/*  Bouton pour revenir à la page précédente */}
        <button
          type="button"
          onClick={onPrev}
          className="btn btn-secondary me-2"
        >
          Précédent
        </button>
        {/*  Bouton pour soumettre le formulaire */}
        <button
          type="submit"
          disabled={!date || !gender || !country}
          className="btn btn-primary"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};

// Export du composant Step3 pour pouvoir l'utiliser dans d'autres fichiers
export default Step3;
