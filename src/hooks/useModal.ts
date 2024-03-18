import { useState, useCallback } from "react";

interface IUseModal{
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModal = (): IUseModal => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsModalOpen(true);
      }, []);
    
      const closeModal = useCallback(() => {
        setIsModalOpen(false);
      }, []);

      return {
        isModalOpen,
        openModal,
        closeModal,
      };
    }