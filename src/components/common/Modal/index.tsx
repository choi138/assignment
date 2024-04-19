import React, { useEffect } from 'react';

import { motion } from 'framer-motion';

import { useModal } from 'src/provider';

export interface ModalProps {
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-w-[32rem] p-[2rem] rounded-md bg-white z-[999]"
    >
      {children}
    </motion.div>
  );
};

export interface ModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => {
  const { close } = useModal();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen z-[998] bg-black bg-opacity-50"
    >
      <div className="absolute w-full h-full" onClick={close} />
      {children}
    </motion.div>
  );
};

export const Modal = Object.assign(ModalComponent, {
  Overlay: ModalOverlay,
});
