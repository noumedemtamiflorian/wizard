import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const WizardForm = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Envoyer les données
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <Step1 register={register} watch={watch} onSubmit={nextStep} />;
    case 2:
      return (
        <Step2
          register={register}
          watch={watch}
          onPrev={prevStep}
          onSubmit={nextStep}
        />
      );
    case 3:
      return (
        <Step3
          register={register}
          watch={watch}
          onPrev={prevStep}
          onSubmit={handleSubmit(onSubmit)}
        />
      );
    default:
      return null;
  }
};

export default WizardForm;
