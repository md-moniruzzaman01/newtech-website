'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { servicecard_data } from '../../../../common/components/ServiceCard/config/constants';
import ProgressBar from './partials/ProgressBar';
import IssueStep from './partials/IssueStep';
import LocationStep from './partials/LocationStep';
import locations from './config/constants';
import QuoteStep from './partials/QuoteStep';
import SummaryStep from './partials/SummaryStep';
import ModelStep from './partials/ModelStep';

const ServiceDetails = () => {
  const params = useParams();
  const id = params.id as string;
  const service = servicecard_data.service_list.find(
    item => item.id === parseInt(id)
  );

  const [step, setStep] = useState<number>(1);
  const [issue, setIssue] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<{
    id: number;
    name: string;
    address?: string;
    phone?: string;
  } | null>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Model step data states
  const [modelVersion, setModelVersion] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10 sm:py-20">
      <ProgressBar step={step} setStep={setStep} />

      {step === 1 && (
        <ModelStep
          service={service}
          setStep={setStep}
          setModelVersion={setModelVersion}
          setSelectedBrand={setSelectedBrand}
          setSelectedModel={setSelectedModel}
          modelVersion={modelVersion}
          selectedBrand={selectedBrand}
          selectedModel={selectedModel}
        />
      )}
      {step === 2 && (
        <IssueStep
          issue={issue}
          setIssue={setIssue}
          setStep={setStep}
          setError={setError}
          error={error}
        />
      )}
      {step === 3 && (
        <LocationStep
          locations={locations}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          setStep={setStep}
        />
      )}
      {step === 4 && (
        <QuoteStep
          deliveryMethod={deliveryMethod}
          setDeliveryMethod={setDeliveryMethod}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          message={message}
          setMessage={setMessage}
          issue={issue}
          selectedLocation={selectedLocation}
          service={service}
          setError={setError}
          error={error}
          setStep={setStep}
        />
      )}
      {step === 5 && (
        <SummaryStep
          service={service}
          issue={issue}
          selectedLocation={selectedLocation}
          deliveryMethod={deliveryMethod}
          name={name}
          email={email}
          phone={phone}
          message={message}
          modelVersion={modelVersion}
          selectedBrand={selectedBrand}
          selectedModel={selectedModel}
        />
      )}
    </div>
  );
};

export default ServiceDetails;
