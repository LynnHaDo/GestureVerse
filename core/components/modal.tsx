import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import styles from "./Modal.module.scss";

/**
 * Modal properties
 */
interface ModalProps {
  /** Title/header of the modal */
  title: string | "";
  /** Body of the modal */
  body: string;
  /** Footer button text */
  btnText: string | "";
  /** Whether or not to show the modal */
  show: boolean;
  /** Event handler for closing the modal */
  onHide: Function;
  /** Event handler for custom button */
  customBtnHandler?: Function;
}

const CustomModalHeader = ({ title }) => {
  return title == "" ? null : (
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
};

const CustomModalFooter = ({ btnContent, onHide, btnActionHandler = ()=>{return;} }) => {
  return (
    <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide()}>
        Close
      </Button>
      {btnContent !== "" && (
        <Button variant="primary" onClick={() => btnActionHandler()}>
          {btnContent}
        </Button>
      )}
    </Modal.Footer>
  );
};

/**
 * Custom static modal for displaying messages
 */
const CustomModal = ({ title, body, btnText, show, onHide, customBtnHandler }: ModalProps) => {
  return (
    <>
      <Modal
        className={styles.modal}
        onHide={() => onHide()}
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <CustomModalHeader title={title} />
        <Modal.Body>{body}</Modal.Body>
        <CustomModalFooter btnContent={btnText}
                           onHide={onHide} 
                           btnActionHandler={()=> customBtnHandler()}/>
      </Modal>
    </>
  );
};

export default CustomModal;
