import * as React from "react";

import { Col, Container, Row } from "react-bootstrap";

import ResetButton from "./ui/reset-button";

export interface HeaderProps {
  /** Class name of the header */
  className: string;
  /** Class name of the control buttons */
  controlsClassName?: string;
  /** Class name of back button*/
  backButtonClassName?: string;
  /** Background color */
  backgroundColor?: string;
  /** Position of the controls: left, right, center */
  position?: "left" | "right" | "center";
  /** Variant of the modal */
  modalVariant?: string;
  modalHeaderClass?: string,
  modalBodyClass?: string, 
  modalFooterClass?: string
}

const Header = ({
  className,
  controlsClassName = null,
  backButtonClassName = null,
  backgroundColor = 'transparent',
  position = 'center',
  modalVariant = null,
  modalHeaderClass = null,
  modalBodyClass = null, 
  modalFooterClass = null
}: HeaderProps): JSX.Element => {
  let headerContent: React.ReactElement;

  switch (position) {
    case "left":
    case "right":
      headerContent = (
        <>
          <Col lg={6}></Col>
          <Col lg={6}>
            <nav>
              <div className={controlsClassName}>
                <button
                  onClick={() =>
                    window.location.replace(window.location.origin)
                  }
                >
                  home
                </button>
                <ResetButton
                  message="Do you want to reset the story?"
                  className={backButtonClassName}
                  modalVariant={modalVariant}
                  headerClass={modalHeaderClass}
                  bodyClass={modalBodyClass}
                  footerClass={modalFooterClass}
                >reset</ResetButton>
              </div>
            </nav>
          </Col>
        </>
      );
      break;
    default:
      headerContent = (
        <>
          <Col lg={4}></Col>
          <Col lg={4}>
            <nav>
              <div className={controlsClassName}>
                <button
                  onClick={() =>
                    window.location.replace(window.location.origin)
                  }
                >
                  home
                </button>
                <ResetButton
                  message="Do you want to reset the story?"
                  className={backButtonClassName}
                  modalVariant={modalVariant}
                  headerClass={modalHeaderClass}
                  bodyClass={modalBodyClass}
                  footerClass={modalFooterClass}
                >reset</ResetButton>
              </div>
            </nav>
          </Col>
          <Col lg={4}></Col>
        </>
      );
  }

  return (
    <header className={className} style={{backgroundColor: backgroundColor}}>
      <Container>
        <Row>{headerContent}</Row>
      </Container>
    </header>
  );
};

export default Header;
