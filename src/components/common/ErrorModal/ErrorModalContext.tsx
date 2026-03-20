import React, { createContext, useContext, useState, ReactNode } from "react";

interface ErrorModalData {
  error: string;
  logs?: string;
  explanation?: string;
}

interface ErrorModalContextType {
  showErrorModal: (data: ErrorModalData) => void;
  hideErrorModal: () => void;
  modalData: ErrorModalData | null;
  isOpen: boolean;
}

const ErrorModalContext = createContext<ErrorModalContextType | undefined>(undefined);

export const ErrorModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalData, setModalData] = useState<ErrorModalData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const showErrorModal = (data: ErrorModalData) => {
    setModalData(data);
    setIsOpen(true);
  };

  const hideErrorModal = () => {
    setIsOpen(false);
    setTimeout(() => setModalData(null), 300); // allow modal to animate out
  };

  return (
    <ErrorModalContext.Provider value={{ showErrorModal, hideErrorModal, modalData, isOpen }}>
      {children}
    </ErrorModalContext.Provider>
  );
};

export const useErrorModal = () => {
  const ctx = useContext(ErrorModalContext);
  if (!ctx) throw new Error("useErrorModal must be used within ErrorModalProvider");
  return ctx;
}; 