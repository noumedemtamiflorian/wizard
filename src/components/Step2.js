import React from "react";

const Step2 = ({ register, watch, onPrev, onSubmit }) => {
  const username = watch("username");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <form onSubmit={onSubmit}>
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
      <button type="button" className="btn btn-secondary me-3" onClick={onPrev}>
        Précédent
      </button>
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

export default Step2;
