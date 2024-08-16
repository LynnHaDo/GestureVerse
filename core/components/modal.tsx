import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import Button from "react-bootstrap/Button";

import styles from "./Modal.module.scss";

/**
 * Modal properties
 */
interface ModalProps {
  /** Title/header of the modal */
  title: string | "";
  /** Variant of the modal */
  variant?: string | "";

  /** Header classname */
  headerClass?: string | "";
  /** Body classname */
  bodyClass?: string | "";
  /** Footer classname */
  footerClass?: string | "";

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

const CustomModalHeader = ({ title, className }) => {
  return title == "" ? null : (
    <Modal.Header className={className} closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
};

const CustomModalFooter = ({
  btnContent,
  onHide,
  btnActionHandler = () => {
    return;
  },
  className,
}) => {
  return (
    <Modal.Footer className={className}>
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
const CustomModal = ({
  title,
  variant,
  headerClass,
  bodyClass,
  footerClass,
  body,
  btnText,
  show,
  onHide,
  customBtnHandler,
}: ModalProps) => {
  return (
    <>
      <Modal
        contentClassName={variant}
        className={styles.modal}
        onHide={() => onHide()}
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <CustomModalHeader title={title} className={headerClass} />
        <Modal.Body className={bodyClass}>{body}</Modal.Body>
        <CustomModalFooter
          btnContent={btnText}
          onHide={onHide}
          btnActionHandler={() => customBtnHandler()}
          className={footerClass}
        />
      </Modal>
    </>
  );
};

export default CustomModal;
