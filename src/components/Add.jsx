import { useState } from "react";
import { Modal } from "./Modal";
import styles from "./Add.module.css";

export function Add({ onAdd }) {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      <div style={{ position: "fixed", bottom: 16, right: 22 }}>
        <button onClick={() => setModalState(true)} className={styles.btn}>
          +
        </button>
      </div>

      {modalState && <Modal onAdd={onAdd} close={() => setModalState(false)} />}
    </>
  );
}
