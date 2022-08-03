import { useState } from "react";
import { Modal } from "./Modal";

export function Add({ onAdd }) {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      <div style={{ position: "fixed", bottom: 16, right: 16 }}>
        <button onClick={() => setModalState(true)}>Add</button>
      </div>

      {modalState && <Modal onAdd={onAdd} close={() => setModalState(false)} />}
    </>
  );
}
