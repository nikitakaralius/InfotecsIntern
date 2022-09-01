import React from 'react';
import styles from './Modal.module.scss';
import {createPortal} from 'react-dom';

interface IModalProps {
  children: React.ReactNode;
  open: boolean;
}

const Modal = ({children, open}: IModalProps) => {
  if (!open) return null;
  return createPortal(
    <>
      <div className={styles.overlay}/>
      <div className={styles.content}>
        {children}
      </div>
    </>,
    document.getElementById('modal')!
  );
};

export  {Modal};
