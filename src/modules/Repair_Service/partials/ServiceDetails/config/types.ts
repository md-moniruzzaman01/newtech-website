export type IssueStepProps = {
  issue: string;
  setIssue: (value: string) => void;
  setStep: (value: number) => void;
  setError?: (value: string) => void;
  error?: string;
};
export type LocationStepProps = {
  locations: {
    id: number;
    name: string;
    address: string;
    phone?: string;
  }[];
  selectedLocation: {
    id: number;
    name: string;
    address?: string;
    phone?: string;
  } | null;

  setSelectedLocation: (location: {
    id: number;
    name: string;
    address: string;
    phone?: string;
  }) => void;

  setStep: (value: number) => void;
};

export type ModelStepProps = {
  service: {
    title: string;
    image: {
      src: string;
    };
  };
  modelVersion: string;
  selectedBrand: string;
  selectedModel: string;
  setModelVersion: (value: string) => void;
  setSelectedBrand: (value: string) => void;
  setSelectedModel: (value: string) => void;
  setStep: (value: number) => void;
};

export type ProgressBarProps = {
  step: number;
  setStep: (value: number) => void;
};

import { Dispatch, SetStateAction } from 'react';

export interface QuoteStepProps {
  deliveryMethod: string;
  setDeliveryMethod: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  message: string;
  setMessage: (value: string) => void;
  issue: string;
  selectedLocation?: {
    id: number;
    name: string;
    address?: string;
    phone?: string;
  } | null;
  service: {
    title: string;
    image: {
      src: string;
    };
  };
  setError: Dispatch<SetStateAction<string>>; // This is where you define setError's type
  error: string;
  setStep: (step: number) => void;
}

export type SummaryStepProps = {
  service: {
    title: string;
    image: {
      src: string;
    };
  };
  issue: string;
  selectedLocation: {
    id: number;
    name: string;
    address?: string;
    phone?: string;
  } | null;
  deliveryMethod: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  modelVersion: string;
  selectedBrand: string;
  selectedModel: string;
};

export type ServiceDetailsProps = {
  service: {
    title: string;
    image: {
      src: string;
    };
  };
  modelVersion: string;
  selectedBrand: string;
  selectedModel: string;
  setModelVersion: (value: string) => void;
  setSelectedBrand: (value: string) => void;
  setSelectedModel: (value: string) => void;
};
