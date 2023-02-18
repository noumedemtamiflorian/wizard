import React from "react";

const Step1 = ({ register, watch, onSubmit }) => {
  const name = watch("name");
  const email = watch("email");
  const age = watch("age");

  return (
    <form onSubmit={onSubmit} className="form">
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
