import React, { useState } from "react";
import FormFirstStep from "./FormFirstStep";
import FormSecondStep from "./FormSecondStep";
import FormThirdStep from "./FormThirdStep";
import FormFourthStep from "./FormFourthStep";
import FormFifthStep from "./FormFifthStep";
import Confirm from "./Confirm";

const stepsLabels = [
  "Informacion General",
  "Detalle del Motor y Carroceria",
  "Equipamiento",
  "Eligiendo Images",
  "Opcionales",
  "Confirm",
];

const ContentForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    engine: "",
    category: "",
    year: "",
    state: "",
    price: "",
    tradable: false,
    exteriorColor: "",
    interiorColor: "",
    fuel: "",
    transmission: "",
    km: "",
    taxes: false,
    receivedCar: false,
    licensePlate: "",
    doors: "",
    province: "",
    equipment: [
      {
        _id: "5f5c2fe97e16f621ac9407bf",
        name: "radio",
        createdAt: "2020-09-12T02:18:17.661Z",
        updatedAt: "2020-09-12T02:18:17.661Z",
      },
    ],
    comment: "",
    files: [],
    packageValue: "",
  });
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  switch (step) {
    case 0:
      return (
        <FormFirstStep
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          currentStep={step}
          stepsLabels={stepsLabels}
        />
      );
    case 1:
      return (
        <FormSecondStep
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          currentStep={step}
          stepsLabels={stepsLabels}
        />
      );
    case 2:
      return (
        <FormThirdStep
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          currentStep={step}
          stepsLabels={stepsLabels}
        />
      );
    case 3:
      return (
        <FormFourthStep
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          currentStep={step}
          stepsLabels={stepsLabels}
        />
      );
    case 4:
      return (
        <FormFifthStep
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          currentStep={step}
          stepsLabels={stepsLabels}
        />
      );
    case 5:
      return (
        <Confirm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          currentStep={step}
          stepsLabels={stepsLabels}
        />
      );
    default:
      return "UNKNOWN STEP";
  }
};

export default ContentForm;
