import React, { useContext, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Modal, ModalProps } from 'src/components';

export interface ModalContextProps {
  open: (props: ModalProps) => void;
  close: () => void;
}

export interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = React.createContext<ModalContextProps | null>(null);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modal, setModal] = useState<ModalProps | null>(null);

  const open = (props: ModalProps) => {
    setModal(props);
  };

  const close = () => {
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ open, close }}>
      <AnimatePresence>
        {modal && (
          <Modal.Overlay>
            <Modal {...modal} />
          </Modal.Overlay>
        )}
      </AnimatePresence>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal() must be used within a ModalProvider');

  return context;
};
