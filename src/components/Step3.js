import React from "react";

const Step3 = ({ register, watch, onPrev, onSubmit }) => {
  const date = watch("date");
  const gender = watch("gender");
  const country = watch("country");

  return (
    <form onSubmit={onSubmit} className="row justify-content-center">
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
      <div className="col-12">
        <button
          type="button"
          onClick={onPrev}
          className="btn btn-secondary me-2"
        >
          Précédent
        </button>
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

export default Step3;
