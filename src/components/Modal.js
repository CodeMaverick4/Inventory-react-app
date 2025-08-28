
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="btn btn-danger mt-3">Close</button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
