// On importe React et useState depuis la bibliothèque React
import React, { useState } from "react";

// On importe useForm depuis la bibliothèque react-hook-form
import { useForm } from "react-hook-form";

// On importe les composants Step1, Step2 et Step3 qui représentent les formulaires des différentes étapes
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

// On importe le composant ModalConfirm qui représente la fenêtre modale de confirmation
import ModalConfirm from "./ModalConfirm";
const WizardForm = () => {
  // Crée un state "step" initialisé à 1 pour gérer l'étape du formulaire
  const [step, setStep] = useState(1);

  // Crée un state "showModal" initialisé à false pour gérer l'affichage du modal de confirmation
  const [showModal, setShowModal] = useState(false);

  // Utilise useForm() de react-hook-form pour initialiser les champs et méthodes pour le formulaire
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = (data) => {
    //afficher les données soumises dans la console
    console.log(data);
    //afficher le modal de confirmation
    setShowModal(true);
  };

  const handleConfirm = () => {
    //cacher le modal de confirmation
    setShowModal(false);
    //vider les champs du formulaire
    reset();
    //revenir à la première étape
    setStep(1);
  };

  const nextStep = () => {
    //passer à l'étape suivante
    setStep(step + 1);
  };

  const prevStep = () => {
    //revenir à l'étape précédente
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      // Si on est à l'étape 1, on affiche le composant Step1 avec les propriétés suivantes
      return <Step1 register={register} watch={watch} onSubmit={nextStep} />;
    case 2:
      // Si on est à l'étape 2, on affiche le composant Step2 avec les propriétés suivantes
      return (
        <Step2
          register={register}
          watch={watch}
          onPrev={prevStep}
          onSubmit={nextStep}
        />
      );
    case 3:
      // Si on est à l'étape 3, on affiche les composants Step3 et ModalConfirm avec les propriétés suivantes
      return (
        <>
          <Step3
            register={register}
            watch={watch}
            onPrev={prevStep}
            onSubmit={handleSubmit(onSubmit)}
          />

          <ModalConfirm
            setStep={setStep}
            reset={reset}
            show={showModal}
            handleConfirm={handleConfirm}
          />
        </>
      );
    default:
      // Si l'étape n'est pas définie, on ne renvoie rien
      return null;
  }
};

export default WizardForm;
